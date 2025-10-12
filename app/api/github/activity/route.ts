import { NextResponse } from "next/server";

export const revalidate = 3600;

type Day = { date: string; count: number };
type LevelDay = Day & { level: 0 | 1 | 2 | 3 | 4 };

//
// ---- GraphQL payload types (module scope) ----
//
interface CalendarResp {
  user: {
    followers: { totalCount: number };
    repositories: { totalCount: number };
    contributionsCollection: {
      contributionCalendar: {
        weeks: Array<{
          contributionDays: Array<{ date: string; contributionCount: number }>;
        }>;
        totalContributions: number;
      };
    };
  } | null;
}

interface ReposPage {
  user: {
    repos: {
      pageInfo: { hasNextPage: boolean; endCursor: string | null };
      nodes: Array<{ stargazerCount: number; forkCount: number }>;
    };
  } | null;
}

const GQL_CALENDAR = `
  query($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      followers { totalCount }
      repositories(privacy: PUBLIC, isFork: false) { totalCount }
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
          totalContributions
        }
      }
    }
  }
`;

const GQL_REPOS_PAGE = `
  query($login: String!, $after: String) {
    user(login: $login) {
      repos: repositories(
        first: 100
        privacy: PUBLIC
        isFork: false
        ownerAffiliations: OWNER
        orderBy: { field: STARGAZERS, direction: DESC }
        after: $after
      ) {
        pageInfo { hasNextPage endCursor }
        nodes {
          stargazerCount
          forkCount
        }
      }
    }
  }
`;

function toISODate(d: Date) {
  return d.toISOString();
}

function addLevels(days: Day[]): LevelDay[] {
  if (!days.length) return [];
  const max = Math.max(...days.map((d) => d.count));
  if (max === 0) return days.map((d) => ({ ...d, level: 0 }));

  return days.map((d) => {
    if (d.count === 0) return { ...d, level: 0 };
    const r = d.count / max;
    // thresholds: (0, .25] => 1, (.25, .5] => 2, (.5, .75] => 3, (.75, 1] => 4
    const level: 1 | 2 | 3 | 4 = r > 0.75 ? 4 : r > 0.5 ? 3 : r > 0.25 ? 2 : 1;
    return { ...d, level };
  });
}

function computeStreaks(days: Day[]) {
  let currentStreak = 0;
  let longestStreak = 0;

  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].count > 0) currentStreak++;
    else break;
  }

  let streak = 0;
  for (let i = 0; i < days.length; i++) {
    if (days[i].count > 0) {
      streak++;
      if (streak > longestStreak) longestStreak = streak;
    } else {
      streak = 0;
    }
  }

  return { currentStreak, longestStreak };
}

async function ghFetch<T>(
  token: string,
  query: string,
  variables: Record<string, unknown>
): Promise<T> {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    cache: "force-cache",
  });

  if (!res.ok) throw new Error(await res.text());
  const json = (await res.json()) as { data?: T; errors?: unknown };
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data as T;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const login = searchParams.get("user") || process.env.GITHUB_LOGIN;
  if (!login) {
    return NextResponse.json(
      { error: "Missing user. Provide ?user=<login> or set GITHUB_LOGIN." },
      { status: 400 }
    );
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "Missing GITHUB_TOKEN in env." },
      { status: 500 }
    );
  }

  try {
    const now = new Date();
    const yearAgo = new Date(now);
    yearAgo.setFullYear(now.getFullYear() - 1);

    // 1) Calendar + followers + public repo count
    const calData: CalendarResp = await ghFetch<CalendarResp>(
      token,
      GQL_CALENDAR,
      { login, from: toISODate(yearAgo), to: toISODate(now) }
    );

    const user = calData.user;
    if (!user)
      return NextResponse.json({ error: "No user found" }, { status: 404 });

    const calendar = user.contributionsCollection.contributionCalendar;
    const rawWeeks = calendar.weeks;

    const allDaysAsc: Day[] = rawWeeks
      .flatMap((w) => w.contributionDays)
      .map((d) => ({ date: d.date, count: d.contributionCount }))
      .sort((a, b) => a.date.localeCompare(b.date));

    const last35 = allDaysAsc.slice(-35);
    const last30 = allDaysAsc.slice(-30).reduce((sum, d) => sum + d.count, 0);

    const { currentStreak, longestStreak } = computeStreaks(allDaysAsc);

    const contributionsWithLevels = addLevels(allDaysAsc);

    // 2) Aggregate stars + forks (paginated)
    let after: string | null = null;
    let totalStars = 0;
    let totalForks = 0;

    for (let i = 0; i < 10; i++) {
      const reposData: ReposPage = await ghFetch<ReposPage>(
        token,
        GQL_REPOS_PAGE,
        { login, after }
      );

      const page = reposData.user?.repos;
      if (!page) break;

      for (const repo of page.nodes) {
        totalStars += repo.stargazerCount;
        totalForks += repo.forkCount;
      }

      if (!page.pageInfo.hasNextPage) break;
      after = page.pageInfo.endCursor;
    }

    // Optional compact weeks slice
    const weeksForCard = rawWeeks.slice(-20).map((w) => ({
      days: w.contributionDays.map((d) => ({
        date: d.date,
        count: d.contributionCount,
      })),
    }));

    return NextResponse.json({
      login,
      followers: user.followers.totalCount,
      publicRepos: user.repositories.totalCount,
      totalStars,
      totalForks,
      totalContributionsYear: calendar.totalContributions,
      last30Contributions: last30,
      currentStreak,
      longestStreak,
      last35Days: last35,
      contributions: contributionsWithLevels,
      weeks: weeksForCard,
      asOf: now.toISOString(),
    });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json(
      { error: "GitHub API error", detail: msg },
      { status: 502 }
    );
  }
}
