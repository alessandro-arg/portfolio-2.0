import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpenText,
  Milestone,
  Network,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { TechnologyBadge } from "@/components/ui/technology-badge";
import { technologies } from "@/content/technologies";
import { TechnologyIcon } from "@/components/ui/technology-icon";
import { StripeDivider } from "@/components/layout/stripe-divider";
import type {
  Project,
  ProjectOverview as ProjectOverviewType,
} from "@/types/portfolio";

const resourceIcons: Record<string, LucideIcon> = {
  README: BookOpenText,
  Architecture: Network,
  Roadmap: Milestone,
};

type ProjectOverviewProps = {
  project: Project;
  overview: ProjectOverviewType;
};

function ProjectCover({ project }: { project: Project }) {
  if (!project.mockup) {
    return null;
  }

  return (
    <figure className="overflow-hidden border-y border-border bg-surface">
      <div className="relative mx-auto max-w-2xl">
        <Image
          src={project.mockup.light}
          alt={`${project.title} project preview`}
          width={1600}
          height={1018}
          sizes="(max-width: 768px) calc(100vw - 1rem), 48rem"
          fetchPriority="high"
          className="h-auto w-full object-contain dark:hidden"
        />

        <Image
          src={project.mockup.dark}
          alt={`${project.title} project preview`}
          width={1600}
          height={1018}
          sizes="(max-width: 768px) calc(100vw - 1rem), 48rem"
          fetchPriority="high"
          className="hidden h-auto w-full object-contain dark:block"
        />
      </div>
    </figure>
  );
}

export function ProjectOverview({ project, overview }: ProjectOverviewProps) {
  return (
    <article>
      <header>
        <div className="screen-line-bottom p-4 py-3">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to projects
          </Link>
        </div>

        <div className="screen-line-bottom p-4 py-2">
          <p className="mb-1 font-mono text-xs uppercase tracking-wide text-muted-foreground">
            /Project
          </p>

          <div className="flex items-baseline gap-2">
            <h1 className="text-3xl font-medium tracking-tight">
              {project.title}
            </h1>

            <span className="font-mono text-xs text-muted-foreground">
              {project.year}
            </span>
          </div>
        </div>

        <ProjectCover project={project} />

        <div className="space-y-5 p-4">
          <p className="max-w-2xl text-base leading-7 text-foreground/90">
            {project.summary}
          </p>

          <ul
            className="flex flex-wrap gap-1.5"
            aria-label={`${project.title} technologies`}
          >
            {project.technologies.map((technologyId) => {
              const technology =
                technologies[technologyId as keyof typeof technologies];

              return (
                <li key={technologyId} className="flex">
                  <TechnologyBadge
                    href={technology?.website}
                    icon={
                      technology ? (
                        <TechnologyIcon technologyId={technology.id} />
                      ) : undefined
                    }
                  >
                    {technology?.name ?? technologyId}
                  </TechnologyBadge>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-wrap gap-2">
            {project.repositoryUrl && (
              <Button asChild variant="secondary" size="sm" className="group">
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none"
                    data-icon="inline-end"
                    aria-hidden="true"
                  />
                </a>
              </Button>
            )}

            {project.liveUrl && (
              <Button asChild variant="outline" size="sm" className="group">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live Demo
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none"
                    data-icon="inline-end"
                    aria-hidden="true"
                  />
                </a>
              </Button>
            )}
          </div>
        </div>
      </header>

      <StripeDivider />

      <section aria-labelledby="project-context-heading">
        <header className="screen-line-bottom p-4 py-2">
          <p className="mb-1 font-mono text-xs uppercase tracking-wide text-muted-foreground">
            /Context
          </p>

          <h2
            id="project-context-heading"
            className="text-2xl font-medium tracking-tight"
          >
            {overview.contextTitle}
          </h2>
        </header>

        <div className="space-y-4 p-4 screen-line-bottom">
          {overview.context.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-2xl text-base leading-7 text-foreground/90"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section aria-labelledby="project-architecture-heading">
        <header className="screen-line-bottom p-4 py-2">
          <p className="mb-1 font-mono text-xs uppercase tracking-wide text-muted-foreground">
            /Architecture
          </p>

          <h2
            id="project-architecture-heading"
            className="text-2xl font-medium tracking-tight"
          >
            How the system fits together
          </h2>
        </header>

        <div className="space-y-4 p-4">
          {overview.architecture.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-2xl text-base leading-7 text-foreground/90"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <StripeDivider />

      <section aria-labelledby="project-decisions-heading">
        <header className="screen-line-bottom p-4 py-2">
          <p className="mb-1 font-mono text-xs uppercase tracking-wide text-muted-foreground">
            /Engineering Decisions
          </p>

          <h2
            id="project-decisions-heading"
            className="text-2xl font-medium tracking-tight"
          >
            Key technical decisions
          </h2>
        </header>

        <ol>
          {overview.decisions.map((decision, index) => (
            <li
              key={decision.title}
              className="p-4 border-b border-border last:border-b-0"
            >
              <h3 className="flex items-baseline gap-2 text-base font-medium">
                <span
                  aria-hidden="true"
                  className="shrink-0 font-mono text-xs text-muted-foreground"
                >
                  /{String(index + 1).padStart(2, "0")}
                </span>

                <span>{decision.title}</span>
              </h3>

              <p className="ml-7 mt-2 max-w-2xl text-base leading-7 text-foreground/80">
                {decision.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <StripeDivider />

      <section aria-labelledby="project-outcome-heading">
        <header className="screen-line-bottom p-4 py-2">
          <p className="mb-1 font-mono text-xs uppercase tracking-wide text-muted-foreground">
            /Outcome
          </p>

          <h2
            id="project-outcome-heading"
            className="text-2xl font-medium tracking-tight"
          >
            Outcome & lessons
          </h2>
        </header>

        <div className="space-y-4 p-4">
          {overview.outcome.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-2xl text-base leading-7 text-foreground/90"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <ul className="grid screen-line-top pb-4">
          {overview.lessons.map((lesson) => (
            <li
              key={lesson}
              className="screen-line-bottom px-4 py-4 text-sm text-foreground/80"
            >
              {lesson}
            </li>
          ))}
        </ul>
      </section>

      <StripeDivider />

      <section aria-labelledby="project-resources-heading">
        <header className="screen-line-bottom p-4 py-2">
          <p className="mb-1 font-mono text-xs uppercase tracking-wide text-muted-foreground">
            /Resources
          </p>

          <h2
            id="project-resources-heading"
            className="text-2xl font-medium tracking-tight"
          >
            Explore the project
          </h2>
        </header>

        <ul>
          {overview.resources.map((resource) => {
            const Icon = resourceIcons[resource.label];

            return (
              <li
                key={resource.href}
                className="border-b border-border last:border-none"
              >
                <a
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 p-4 transition-colors hover:bg-accent/40"
                >
                  <span className="flex items-center gap-3">
                    {Icon && (
                      <span className="grid size-8 place-items-center rounded-md border border-border bg-surface-elevated text-muted-foreground">
                        <Icon
                          className="size-4"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </span>
                    )}
                    <span>{resource.label}</span>
                  </span>

                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </section>

      <StripeDivider />
    </article>
  );
}
