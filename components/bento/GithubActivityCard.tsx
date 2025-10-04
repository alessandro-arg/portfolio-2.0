"use client";

import useSWR from "swr";
import { motion } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";

type ApiDay = { date: string; count: number };
type ApiWeek = { days: ApiDay[] };
type ApiData = {
  login: string;
  followers: number;
  publicRepos: number;
  totalContributionsYear: number;
  last30Contributions: number;
  currentStreak: number;
  longestStreak: number;
  last35Days: ApiDay[];
  weeks?: ApiWeek[];
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

type GithubActivityCardProps = {
  user?: string;
  className?: string;
  title?: string;
};

export default function GithubActivityCard({
  user,
  className = "",
  title = "GitHub Activity",
}: GithubActivityCardProps) {
  const q = user ? `?user=${encodeURIComponent(user)}` : "";
  const { data, error, isLoading } = useSWR<ApiData>(
    `/api/github/activity${q}`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const weeks: ApiWeek[] =
    data?.weeks && data.weeks.length
      ? data.weeks
      : (data?.last35Days ?? []).length === 35
      ? Array.from({ length: 5 }, (_, w) => ({
          days: data!.last35Days.slice(w * 7, w * 7 + 7),
        }))
      : [];

  const monthLabels: { col: number; label: string }[] = (() => {
    if (!weeks.length) return [];
    const labels: { col: number; label: string }[] = [];
    let last = "";
    weeks.forEach((week, col) => {
      const firstDay = week.days[0];
      if (!firstDay) return;
      const m = new Date(firstDay.date).toLocaleString(undefined, {
        month: "short",
      });
      if (m !== last) {
        labels.push({ col, label: m });
        last = m;
      }
    });
    return labels;
  })();

  const bucket = (n: number) => {
    if (n <= 0) return 0;
    if (n <= 3) return 1;
    if (n <= 6) return 2;
    if (n <= 9) return 3;
    return 4;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute inset-0 group p-5 cursor-default"
      role="region"
      aria-label="GitHub activity card"
    >
      {/* GitHub green palette (light + dark) */}
      <style jsx global>{`
        :root {
          --gh-0: #ebedf0; /* no contributions - light */
          --gh-1: #9be9a8;
          --gh-2: #40c463;
          --gh-3: #30a14e;
          --gh-4: #216e39;
          --gh-border: rgba(0, 0, 0, 0.08);
        }
        .dark {
          --gh-0: #161b22; /* no contributions - dark */
          --gh-1: #0e4429;
          --gh-2: #006d32;
          --gh-3: #26a641;
          --gh-4: #39d353;
          --gh-border: rgba(255, 255, 255, 0.08);
        }
      `}</style>

      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="bg-linear-to-b from-black to-[#83d6ff90] bg-clip-text text-center text-3xl font-semibold tracking-normal text-transparent select-none dark:from-white">
          {title}
        </div>
        {data?.login && (
          <a
            href={`https://github.com/${data.login}`}
            target="_blank"
            rel="noreferrer"
            className="text-md text-zinc-300 hover:text-white transition-all duration-200"
          >
            @{data.login}
          </a>
        )}
      </div>

      {/* Heatmap */}
      <div className="relative mt-4 flex gap-5">
        <div className="flex-1 h-full">
          {/* Month labels */}
          <div className="relative mb-1 hidden text-[10px] text-zinc-400 sm:block">
            <div className="grid grid-flow-col auto-cols-[0.8rem] gap-[3px] md:auto-cols-[0.9rem] md:gap-[4px]">
              {weeks.map((_, i) => {
                const label = monthLabels.find((m) => m.col === i)?.label ?? "";
                return (
                  <div key={`m-${i}`} className="text-[10px]">
                    {label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Weekday labels + grid */}
          <div className="flex">
            {/* Weekday labels (md+) */}
            <div className="mr-2 hidden flex-col justify-between py-[2px] text-[10px] text-zinc-400 md:flex">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            {/* Grid: 7 rows × N weeks */}
            <Tooltip.TooltipProvider delayDuration={150}>
              <div
                className="grid grid-flow-col auto-cols-[0.8rem] gap-[3px] sm:auto-cols-[0.9rem] sm:gap-[4px]"
                role="img"
                aria-label="Contribution activity heatmap"
              >
                {isLoading && (
                  <div className="col-span-20 flex items-center text-xs text-zinc-500">
                    Loading…
                  </div>
                )}
                {error && (
                  <div className="col-span-20 text-xs text-rose-400">
                    Failed to load GitHub data
                  </div>
                )}
                {!isLoading &&
                  !error &&
                  weeks.map((week, colIdx) => (
                    <div
                      key={colIdx}
                      className="flex flex-col gap-[3px] sm:gap-[4px]"
                    >
                      {week.days.map((d, rowIdx) => {
                        const b = bucket(d.count);
                        const title = `${d.date} - ${d.count} contribution${
                          d.count === 1 ? "" : "s"
                        }`;

                        return (
                          <Tooltip.Root key={`${colIdx}-${rowIdx}`}>
                            <Tooltip.Trigger asChild>
                              <button
                                type="button"
                                className="h-[10px] w-[10px] rounded-[2px] sm:h-[12px] sm:w-[12px] md:h-[13px] md:w-[13px] outline-none ring-0 focus-visible:ring-2 focus-visible:ring-white/20 transition-transform duration-150 hover:scale-[1.06]"
                                style={{
                                  backgroundColor: `var(--gh-${b})`,
                                  boxShadow: `inset 0 0 0 1px var(--gh-border)`,
                                }}
                                aria-label={`${d.date}: ${d.count} contributions`}
                              />
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                              <Tooltip.Content
                                side="top"
                                align="center"
                                className="rounded-md border border-white/10 bg-black/80 px-2 py-1 text-xs text-white shadow-lg backdrop-blur-sm data-[state=delayed-open]:animate-in data-[state=closed]:animate-out data-[state=delayed-open]:fade-in-0 data-[state=closed]:fade-out-0"
                              >
                                {title}
                                <Tooltip.Arrow className="fill-black/80" />
                              </Tooltip.Content>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        );
                      })}
                    </div>
                  ))}
              </div>
            </Tooltip.TooltipProvider>
          </div>
        </div>

        {/* Legend */}
        <div className="absolute -bottom-1 flex items-center gap-2 text-[10px] text-zinc-400">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((b) => (
            <span
              key={`legend-${b}`}
              className="inline-block h-[10px] w-[10px] rounded-[2px]"
              style={{
                backgroundColor: `var(--gh-${b})`,
                boxShadow: `inset 0 0 0 1px var(--gh-border)`,
              }}
            />
          ))}
          <span>More</span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:w-[300px]">
          <Stat
            label="Current streak"
            value={isLoading ? "…" : `${data?.currentStreak ?? 0} days`}
            accent="emerald"
          />
          <Stat
            label="Longest streak"
            value={isLoading ? "…" : `${data?.longestStreak ?? 0} days`}
            accent="sky"
          />
          <Stat
            label="Last 30 days"
            value={isLoading ? "…" : `${data?.last30Contributions ?? 0}`}
            accent="violet"
          />
          <Stat
            label="Public repos"
            value={isLoading ? "…" : `${data?.publicRepos ?? 0}`}
            accent="amber"
          />
        </div>
      </div>
    </motion.div>
  );
}

function Stat({
  label,
  value,
  accent = "emerald",
}: {
  label: string;
  value: string | number;
  accent?: "emerald" | "sky" | "violet" | "amber";
}) {
  const ring =
    accent === "emerald"
      ? "ring-emerald-400/30"
      : accent === "sky"
      ? "ring-sky-400/30"
      : accent === "violet"
      ? "ring-violet-400/30"
      : "ring-amber-400/30";

  return (
    <div
      className={[
        "rounded-xl border border-white/10 bg-white/[0.02] p-3 ring-1",
        ring,
      ].join(" ")}
    >
      <div className="text-[11px] uppercase tracking-wide text-zinc-400">
        {label}
      </div>
      <div className="mt-1 text-xl font-semibold text-white">{value}</div>
    </div>
  );
}
