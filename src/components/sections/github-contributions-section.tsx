import { Suspense } from "react";

import {
  GitHubContributions,
  GitHubContributionsFallback,
} from "@/components/github-contributions";
import { profile } from "@/content/profile";
import { getCachedContributions } from "@/lib/get-cached-contributions";

export function GitHubContributionsSection() {
  const contributions = getCachedContributions(profile.contact.githubUsername);

  return (
    <section
      aria-labelledby="github-contributions-heading"
      className="screen-line-top"
    >
      <h2 id="github-contributions-heading" className="sr-only">
        GitHub Contributions
      </h2>

      <Suspense fallback={<GitHubContributionsFallback />}>
        <GitHubContributions
          contributions={contributions}
          githubProfileUrl={profile.contact.github}
        />
      </Suspense>
    </section>
  );
}
