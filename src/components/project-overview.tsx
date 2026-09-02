import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TechnologyBadge } from "@/components/ui/technology-badge";
import { technologies } from "@/content/technologies";
import type {
  Project,
  ProjectOverview as ProjectOverviewType,
} from "@/types/portfolio";
import { StripeDivider } from "@/components/layout/stripe-divider";

type ProjectOverviewProps = {
  project: Project;
  overview: ProjectOverviewType;
};

function getTechnologyName(technologyId: string) {
  const technology = technologies[technologyId as keyof typeof technologies];

  return technology?.name ?? technologyId;
}

export function ProjectOverview({ project, overview }: ProjectOverviewProps) {
  return (
    <article>
      <header className="p-4">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Projects
        </Link>

        <p className="mb-1 font-mono text-xs text-muted-foreground">/Project</p>

        <div className="flex items-baseline justify-between gap-4">
          <h1 className="text-3xl font-medium tracking-tight">
            {project.title}
          </h1>

          <span className="font-mono text-sm text-muted-foreground">
            {project.year}
          </span>
        </div>

        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <ul
          className="mt-5 flex flex-wrap gap-1.5"
          aria-label={`${project.title} technologies`}
        >
          {project.technologies.map((technologyId) => (
            <li key={technologyId}>
              <TechnologyBadge>
                {getTechnologyName(technologyId)}
              </TechnologyBadge>
            </li>
          ))}
        </ul>

        {project.repositoryUrl && (
          <Button asChild variant="secondary" size="sm" className="mt-5">
            <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
              Source Code
              <ArrowUpRight
                className="size-4"
                data-icon="inline-end"
                aria-hidden="true"
              />
            </a>
          </Button>
        )}
      </header>

      <StripeDivider />

      <section
        aria-labelledby="project-context-heading"
        className="screen-line-bottom p-4 py-8"
      >
        <p className="mb-1 font-mono text-xs text-muted-foreground">/Context</p>

        <h2
          id="project-context-heading"
          className="text-2xl font-medium tracking-tight"
        >
          From spreadsheet to self-hosted platform
        </h2>

        <div className="mt-5 max-w-2xl space-y-4 leading-relaxed">
          {overview.context.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="project-architecture-heading"
        className="p-4 py-8"
      >
        <p className="mb-1 font-mono text-xs text-muted-foreground">
          /Architecture
        </p>

        <h2
          id="project-architecture-heading"
          className="text-2xl font-medium tracking-tight"
        >
          How the system fits together
        </h2>

        <div className="mt-5 max-w-2xl space-y-4 leading-relaxed">
          {overview.architecture.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <StripeDivider />

      <section
        aria-labelledby="project-decisions-heading"
        className="screen-line-bottom"
      >
        <header className="p-4 py-8">
          <p className="mb-1 font-mono text-xs text-muted-foreground">
            /Engineering Decisions
          </p>

          <h2
            id="project-decisions-heading"
            className="text-2xl font-medium tracking-tight"
          >
            Key technical decisions
          </h2>
        </header>

        <ol className="border-t border-border">
          {overview.decisions.map((decision, index) => (
            <li
              key={decision.title}
              className="grid gap-3 border-b border-border p-4 last:border-b-0 sm:grid-cols-[3rem_minmax(0,1fr)]"
            >
              <span
                aria-hidden="true"
                className="font-mono text-xs text-muted-foreground"
              >
                /{String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="font-medium">{decision.title}</h3>

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {decision.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="project-outcome-heading"
        className="screen-line-bottom p-4 py-8"
      >
        <p className="mb-1 font-mono text-xs text-muted-foreground">/Outcome</p>

        <h2
          id="project-outcome-heading"
          className="text-2xl font-medium tracking-tight"
        >
          Outcome & lessons
        </h2>

        <div className="mt-5 max-w-2xl space-y-4 leading-relaxed">
          {overview.outcome.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <ul className="mt-6 max-w-2xl space-y-3">
          {overview.lessons.map((lesson) => (
            <li
              key={lesson}
              className="border-l border-border pl-4 text-sm leading-relaxed text-muted-foreground"
            >
              {lesson}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="project-resources-heading">
        <header className="p-4 py-8">
          <p className="mb-1 font-mono text-xs text-muted-foreground">
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
          {overview.resources.map((resource) => (
            <li
              key={resource.href}
              className="border-b border-border last:border-none first:border-t"
            >
              <a
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 p-4 hover:bg-accent/40"
              >
                <span>{resource.label}</span>

                <ArrowUpRight
                  className="size-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-45"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <StripeDivider />
    </article>
  );
}
