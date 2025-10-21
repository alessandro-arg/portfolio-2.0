"use client";

import StarIcon from "@/components/icons/star.svg";
import { Project, ProjectPoint } from "./types";
import { getAccentColor } from "@/lib/theme";
import { TechIcon, TECH_LABELS } from "./_components/TechIcon";

function normalizePoints(points: ProjectPoint[] | undefined) {
  return (points ?? []).map((p) =>
    typeof p === "string" ? { title: p, description: undefined } : p
  );
}

export function ProjectInfoPanel({ project }: { project: Project | null }) {
  if (!project) return null;

  const badgeClass =
    "inline-flex items-center justify-center rounded-lg border px-3 py-1 text-sm w-fit whitespace-nowrap shrink-0 gap-2 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-all overflow-hidden text-black dark:text-white font-mono border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2";

  const accent = getAccentColor(project.theme);
  const { title, description, technologies = [] } = project;
  const points = normalizePoints(project.points);

  return (
    <div className="flex">
      <div
        className="my-4 mr-4 h-[2px] min-w-6"
        style={{ background: accent }}
        aria-hidden="true"
      />
      <div className="flex flex-col items-start lg:h-[500px]">
        <div className="flex items-center gap-3">
          <h3 className="text-foreground font-instrument text-3xl font-bold">
            {title}
          </h3>
        </div>

        {description && (
          <p className="text-primary/90 my-2 text-base font-light">
            {description}
          </p>
        )}

        {points.length > 0 && (
          <ul className="text-primary/90 mt-4 flex flex-col gap-y-2 text-base">
            {points.map((p, i) => (
              <li key={i} className="flex items-start text-sm">
                <StarIcon
                  className="mt-1 mr-2 size-6 shrink-0"
                  color={accent}
                />
                <span className="leading-6">
                  {/* Render the title always */}
                  <span className="font-medium">{p.title}</span>
                  {/* Optional one-line teaser (first sentence) if you want: */}
                  {/* {p.description ? <span className="text-muted-foreground"> — {p.description}</span> : null} */}
                </span>
              </li>
            ))}
          </ul>
        )}

        {technologies.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-3 text-sm">
            {technologies.map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                data-slot="badge"
                className={`${badgeClass} hover:-translate-y-[1px]`}
              >
                <TechIcon tech={tech} size={16} className="mr-1" />
                {TECH_LABELS[tech]}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
