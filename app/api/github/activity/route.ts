import { NextResponse } from "next/server";

export const revalidate = 3600;

type Day = { date: string; count: number };

const GQL = `
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

function toISODate(d: Date) {
  return d.toISOString();
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
      longestStreak = Math.max(longestStreak, streak);
    } else {
      streak = 0;
    }
  }

  return { currentStreak, longestStreak };
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

  const now = new Date();
  const yearAgo = new Date(now);
  yearAgo.setFullYear(now.getFullYear() - 1);

  const body = JSON.stringify({
    query: GQL,
    variables: { login, from: toISODate(yearAgo), to: toISODate(now) },
  });

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body,
    cache: "force-cache",
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json(
      { error: "GitHub API error", detail: text },
      { status: 502 }
    );
  }

  const json = await res.json();
  const user = json?.data?.user;
  if (!user)
    return NextResponse.json({ error: "No user found" }, { status: 404 });

  const calendar = user.contributionsCollection.contributionCalendar;

  const rawWeeks = calendar.weeks as {
    contributionDays: { date: string; contributionCount: number }[];
  }[];

  // compact bento width: keep last ~20 weeks
  const weeksForCard = rawWeeks.slice(-20).map((w) => ({
    days: w.contributionDays.map((d) => ({
      date: d.date,
      count: d.contributionCount,
    })),
  }));

  const allDaysAsc: Day[] = rawWeeks
    .flatMap((w) => w.contributionDays)
    .map((d) => ({ date: d.date, count: d.contributionCount }))
    .sort((a, b) => a.date.localeCompare(b.date));

  const last35 = allDaysAsc.slice(-35);
  const last30 = allDaysAsc.slice(-30).reduce((sum, d) => sum + d.count, 0);

  const { currentStreak, longestStreak } = computeStreaks(allDaysAsc);

  return NextResponse.json({
    login,
    followers: user.followers.totalCount,
    publicRepos: user.repositories.totalCount,
    totalContributionsYear: calendar.totalContributions,
    last30Contributions: last30,
    currentStreak,
    longestStreak,
    last35Days: last35,
    weeks: weeksForCard,
  });
}
