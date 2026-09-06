import type { Activity } from "@/components/contribution-graph";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

const DEFAULT_API_URL = "https://github-contributions-api.jogruber.de/v4";

export async function getCachedContributions(
  username: string,
): Promise<Activity[]> {
  const apiUrl = process.env.GITHUB_CONTRIBUTIONS_API_URL ?? DEFAULT_API_URL;

  try {
    const response = await fetch(`${apiUrl}/${username}?y=last`, {
      next: {
        revalidate: 86400,
      },
    });

    if (!response.ok) {
      return [];
    }

    const data = (await response.json()) as GitHubContributionsResponse;

    return data.contributions ?? [];
  } catch {
    return [];
  }
}
