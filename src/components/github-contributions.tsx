"use client";

import { use } from "react";

import { Spinner } from "@/components/ui/spinner";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Activity } from "@/components/contribution-graph";
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/contribution-graph";

const contributionDateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

function formatContributionDate(date: string) {
  return contributionDateFormatter.format(new Date(`${date}T00:00:00`));
}

export function GitHubContributions({
  contributions,
  githubProfileUrl,
}: {
  contributions: Promise<Activity[]>;
  githubProfileUrl: string;
}) {
  const data = use(contributions);

  if (data.length === 0) {
    return null;
  }

  return (
    <figure>
      <ContributionGraph
        className="mx-auto gap-4 py-4"
        data={data}
        blockSize={12}
        blockMargin={2}
        blockRadius={0}
        aria-label="GitHub Contributions Graph"
      >
        <ContributionGraphCalendar
          className="px-4 **:data-[slot=month-labels]:text-muted-foreground"
          title="GitHub Contributions"
          aria-hidden
          tabIndex={-1}
        >
          {({ activity, dayIndex, weekIndex }) => (
            <Tooltip>
              <TooltipTrigger asChild>
                <g>
                  <ContributionGraphBlock
                    activity={activity}
                    dayIndex={dayIndex}
                    weekIndex={weekIndex}
                  />
                </g>
              </TooltipTrigger>
              <TooltipContent className="font-sans">
                <p>
                  {activity.count} contribution
                  {activity.count !== 1 ? "s" : null} on{" "}
                  {formatContributionDate(activity.date)}
                </p>
              </TooltipContent>
            </Tooltip>
          )}
        </ContributionGraphCalendar>

        <ContributionGraphFooter className="px-4 text-sm">
          <ContributionGraphTotalCount>
            {({ totalCount }) => (
              <figcaption className="text-pretty tabular-nums">
                {totalCount.toLocaleString("en-US")} contributions in the last
                year on{" "}
                <a
                  href={githubProfileUrl}
                  className="underline underline-offset-3 hover:text-muted-foreground"
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </a>
                .
              </figcaption>
            )}
          </ContributionGraphTotalCount>

          <ContributionGraphLegend aria-hidden />
        </ContributionGraphFooter>
      </ContributionGraph>
    </figure>
  );
}

export function GitHubContributionsFallback() {
  return (
    <div className="flex h-45 w-full items-center justify-center">
      <Spinner className="text-muted-foreground" />
    </div>
  );
}
