import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CircleArrowOutUpRight, Server } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { TechnologyBadge } from "@/components/ui/technology-badge";

import type { Project } from "@/types/portfolio";

import { projects } from "@/content/projects";
import { technologies } from "@/content/technologies";

function getTechnologyName(technologyId: string) {
  const technology = technologies[technologyId as keyof typeof technologies];

  return technology?.name ?? technologyId;
}

type ProjectMarkProps = {
  project: Project;
};

function ProjectMark({ project }: ProjectMarkProps) {
  return (
    <span className="grid size-9 shrink-0 place-items-center rounded-md border border-border bg-surface text-muted-foreground">
      {project.logo ? (
        <Image
          src={project.logo}
          alt=""
          width={20}
          height={20}
          className={
            project.logo === "/projects/portfolio-logo.svg"
              ? "size-5 object-contain dark:invert"
              : "size-5 object-contain"
          }
        />
      ) : (
        <Server className="size-5" strokeWidth={1.75} aria-hidden="true" />
      )}
    </span>
  );
}

type ProjectMockupProps = {
  project: Project;
};

function ProjectMockup({ project }: ProjectMockupProps) {
  if (!project.mockup) {
    return null;
  }

  const imageClassName = "h-auto w-full object-contain";

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-surface">
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-0 top-0 z-0 h-24
          bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.06),transparent_70%)]
          dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_70%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-xl">
        <Image
          src={project.mockup.light}
          alt={`${project.title} project preview`}
          width={1600}
          height={1018}
          className={`${imageClassName} dark:hidden`}
          sizes="(max-width: 768px) calc(100vw - 3rem), 36rem"
        />

        <Image
          src={project.mockup.dark}
          alt={`${project.title} project preview`}
          width={1600}
          height={1018}
          className={`${imageClassName} hidden dark:block`}
          sizes="(max-width: 768px) calc(100vw - 3rem), 36rem"
        />
      </div>
    </div>
  );
}

export function ProjectSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <header className="screen-line-bottom border-border p-4 py-1 pt-2">
        <p className="mb-1 font-mono text-xs uppercase tracking-wide text-muted-foreground">
          /Selected Work
        </p>

        <h2
          id="projects-heading"
          tabIndex={-1}
          className="text-3xl font-medium tracking-tight"
        >
          Projects
        </h2>
      </header>

      <Accordion
        type="single"
        collapsible
        defaultValue={featuredProjects[0]?.slug ?? featuredProjects[0]?.title}
      >
        {featuredProjects.map((project, index) => {
          const value = project.slug ?? project.title;

          return (
            <AccordionItem key={value} value={value}>
              <div className="relative grid grid-cols-[auto_minmax(0,1fr)_auto] items-center hover:bg-accent/40">
                <div className="mx-4 shrink-0">
                  <ProjectMark project={project} />
                </div>

                <AccordionTrigger className="min-w-0 px-4 py-3 hover:no-underline flex items-center border-dashed border-l border-l-border">
                  <span className="min-w-0 flex-1 text-left mr-9">
                    <span className="flex min-w-0 items-baseline gap-2">
                      <span className="shrink-0 font-mono text-xs text-muted-foreground">
                        /{String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="truncate text-sm font-medium">
                        {project.title}
                      </span>
                    </span>

                    <span className="mt-1 ml-7.5 block font-mono text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </span>
                </AccordionTrigger>

                {project.slug && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={`/projects/${project.slug}`}
                        aria-label={`View ${project.title} project overview`}
                        className="absolute top-1/2 right-9 z-10 grid size-8 -translate-y-1/2 place-items-center text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <CircleArrowOutUpRight
                          className="size-4"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </Link>
                    </TooltipTrigger>

                    <TooltipContent side="top" sideOffset={8}>
                      Project Overview
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>

              <AccordionContent>
                <div className="space-y-4 border-t border-border p-4">
                  <ProjectMockup project={project} />

                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>

                  {(project.liveUrl || project.repositoryUrl) && (
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                      {project.repositoryUrl && (
                        <Button
                          asChild
                          variant="secondary"
                          size="sm"
                          className="group"
                        >
                          <a
                            href={project.repositoryUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="no-underline!"
                          >
                            Source Code
                            <ArrowUpRight
                              className="size-4 group-hover:rotate-45 transition-transform duration-300 motion-reduce:transition-none"
                              data-icon="inline-end"
                              aria-hidden="true"
                            />
                          </a>
                        </Button>
                      )}

                      {project.liveUrl && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="group"
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="no-underline!"
                          >
                            Live Demo
                            <ArrowUpRight
                              className="size-4 group-hover:rotate-45 transition-transform duration-300 motion-reduce:transition-none"
                              data-icon="inline-end"
                              aria-hidden="true"
                            />
                          </a>
                        </Button>
                      )}
                    </div>
                  )}

                  <ul
                    className="flex flex-wrap gap-1.5"
                    aria-label={`${project.title} technologies`}
                  >
                    {project.technologies.map((technologyId) => (
                      <li key={technologyId} className="flex">
                        <TechnologyBadge>
                          {getTechnologyName(technologyId)}
                        </TechnologyBadge>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
