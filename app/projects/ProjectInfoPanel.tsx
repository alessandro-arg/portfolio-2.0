"use client";

import StarIcon from "@/components/icons/star.svg";
import { Project } from "./types";
import { makeGradient } from "@/lib/theme";

export function ProjectInfoPanel({ project }: { project: Project | null }) {
  if (!project) return null;

  const { title, description, points = [], technologies = [] } = project;

  return (
    <div className="flex">
      <div
        className="my-4 mr-4 h-[2px] min-w-6"
        style={{ background: makeGradient(project?.theme) }}
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
              <li key={i} className="flex items-center text-sm">
                <StarIcon className="mt-1 mr-2 size-6 shrink-0 fill-blue-600 text-blue-600 dark:text-blue-400 bg-transparent" />
                {p}
              </li>
            ))}
          </ul>
        )}

        {technologies.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-3 text-sm">
            {technologies.map((t, i) => (
              <span
                key={`${t.name}-${i}`}
                data-slot="badge"
                className="inline-flex items-center justify-center rounded-lg border px-3 py-1 text-sm w-fit whitespace-nowrap shrink-0 gap-2 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-black dark:text-white font-mono border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2"
              >
                {t.icon ?? null}
                {t.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
