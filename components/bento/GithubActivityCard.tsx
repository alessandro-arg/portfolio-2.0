"use client";

import useSWR from "swr";
import { motion } from "framer-motion";

type ApiDay = { date: string; count: number };
type ApiData = {
  login: string;
  followers: number;
  publicRepos: number;
  totalContributionsYear: number;
  last30Contributions: number;
  currentStreak: number;
  longestStreak: number;
  last35Days: ApiDay[];
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

  const maxCount =
    data?.last35Days?.reduce((m, d) => Math.max(m, d.count), 0) ?? 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={[
        "relative w-full overflow-hidden rounded-2xl",
        "border border-white/10 bg-gradient-to-b from-zinc-900 to-black",
        "p-5 backdrop-blur-sm",
        className,
      ].join(" ")}
      role="region"
      aria-label="GitHub activity card"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="bg-linear-to-b from-black to-[#83d6ff90] bg-clip-text px-4 text-center text-3xl font-semibold tracking-normal text-transparent select-none dark:from-white">
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

      {/* Main stats */}
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat
          label="Current streak"
          value={isLoading ? "…" : `${data?.currentStreak ?? 0}d`}
          accent="emerald"
        />
        <Stat
          label="Longest streak"
          value={isLoading ? "…" : `${data?.longestStreak ?? 0}d`}
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

      {/* Heatmap (35 days / 7x5) */}
      <div className="mt-5">
        <div className="mb-2 text-xs text-zinc-400">Recent activity</div>
        <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
          {isLoading && (
            <div className="col-span-7 text-zinc-500 text-xs">Loading…</div>
          )}
          {error && (
            <div className="col-span-7 text-rose-400 text-xs">
              Failed to load GitHub data
            </div>
          )}
          {!isLoading &&
            !error &&
            data?.last35Days?.map((d, i) => {
              const lvl =
                maxCount === 0 ? 0 : Math.ceil((d.count / maxCount) * 4); // 0..4
              const cls =
                lvl === 0
                  ? "bg-zinc-700/40"
                  : lvl === 1
                  ? "bg-emerald-400/25"
                  : lvl === 2
                  ? "bg-emerald-400/50"
                  : lvl === 3
                  ? "bg-emerald-400/70"
                  : "bg-emerald-400";
              return (
                <div key={i} className="flex flex-col gap-1">
                  <div
                    className={[
                      "h-6 w-full rounded sm:h-7",
                      "transition-transform duration-200",
                      "hover:scale-[1.06]",
                      cls,
                    ].join(" ")}
                    role="img"
                    aria-label={`${d.date}: ${d.count} contributions`}
                    title={`${d.date} — ${d.count} contributions`}
                  />
                </div>
              );
            })}
        </div>
      </div>

      {/* Footer micro-infos */}
      <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-zinc-400">
        <div className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded bg-emerald-400/25" />
          low
        </div>
        <div className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded bg-emerald-400/70" />
          medium
        </div>
        <div className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded bg-emerald-400" />
          high
        </div>

        <div className="ml-auto">
          {isLoading ? "…" : `${data?.followers ?? 0}`} followers
        </div>
      </div>

      {/* glossy top highlight */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent"
        aria-hidden="true"
      />
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
        "rounded-xl border border-white/10 bg-white/[0.02] p-3",
        "ring-1",
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
