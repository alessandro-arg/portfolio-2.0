"use client";

import React, { useState, useEffect } from "react";
import ActivityCalendar from "react-activity-calendar";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { User, Star, BookOpen, GitFork } from "lucide-react";
import StatsCard from "./ui/StatsCard";

interface GitHubActivity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const GitHubActivitySection = () => {
  const [data, setData] = useState<GitHubActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const username = "alessandro-arg";

  useEffect(() => {
    const fetchGitHubActivity = async () => {
      try {
        setLoading(true);
        setError(null);

        // Using GitHub's contribution API endpoint
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub activity");
        }

        const result = await response.json();

        // Transform the data to match react-activity-calendar format
        const contributions: GitHubActivity[] = result.contributions.map(
          (day: any) => ({
            date: day.date,
            count: day.count,
            level: day.level,
          })
        );

        setData(contributions);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching GitHub activity:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubActivity();
  }, [username]);

  const theme = {
    dark: ["#0d1117", "#0b2d1d", "#085c36", "#04964f", "#00d264"],
  };

  if (loading) {
    return (
      <div className="text-center">
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          Loading contribution data...
        </p>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neutral-800 dark:border-white"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <p className="text-red-600 dark:text-red-400">
          Failed to load GitHub activity: {error}
        </p>
      </div>
    );
  }

  return (
    <ActivityCalendar
      data={data}
      theme={theme}
      style={{
        fontFamily: "Outfit",
      }}
      colorScheme="dark"
      blockSize={14}
      blockMargin={4}
      fontSize={14}
      hideColorLegend={true}
      hideTotalCount={false}
      showWeekdayLabels={false}
      labels={{
        totalCount: "Total {{count}} contributions in this year",
      }}
    />
  );
};

export default function GithubSection() {
  return (
    <section
      id="github"
      className="mx-auto my-24 w-full max-w-[984px] px-4 mt-10 mb-32"
    >
      <h2 className="relative z-2 text-5xl font-medium tracking-tight text-balance sm:text-5xl md:text-6xl mb-12 md:mb-12 text-center [text-shadow:rgba(255,255,255,0.05)_0px_4px_8px,rgba(255,255,255,0.25)_0px_8px_30px]">
        <p className="mb-3 font-mono text-xs font-normal tracking-widest text-black/80 uppercase md:text-sm dark:text-white/70">
          Developer Insights
        </p>
        <span className="font-instrument">
          <span>GitHub </span>
          <AnimatedGradientText
            colorFrom="#4aeedd"
            colorTo="#16b1ff"
            className="pe-2 tracking-tight italic"
          >
            activity
          </AnimatedGradientText>
        </span>
      </h2>
      <div className="flex justify-center">
        <GitHubActivitySection />
      </div>
      <div className="mx-auto mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatsCard
          title="Followers"
          value={"NUMBER"}
          icon={User}
          scheme="purple"
        />
        <StatsCard
          title="Total Stars"
          value={"NUMBER"}
          icon={Star}
          scheme="yellow"
        />
        <StatsCard
          title="Public Repos"
          value={"NUMBER"}
          icon={BookOpen}
          scheme="green"
        />
        <StatsCard
          title="Total Forks"
          value={"NUMBER"}
          icon={GitFork}
          scheme="blue"
        />
      </div>
    </section>
  );
}
