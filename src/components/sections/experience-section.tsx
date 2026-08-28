import Image from "next/image";
import { BriefcaseBusiness, Building2, Code2 } from "lucide-react";
import { differenceInCalendarMonths, format, parseISO } from "date-fns";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TechnologyBadge } from "@/components/ui/technology-badge";

import { experience } from "@/content/experience";
import { technologies } from "@/content/technologies";

import type {
  ExperienceOrganization,
  ExperiencePosition,
} from "@/types/portfolio";

const locationTypeLabels = {
  remote: "Remote",
  hybrid: "Hybrid",
  "on-site": "On-site",
} as const;

function parseExperienceDate(value: string) {
  return parseISO(`${value}-01`);
}

function formatExperienceDate(value: string) {
  return format(parseExperienceDate(value), "MM.yyyy");
}

function formatDuration(startDate: string, endDate?: string) {
  const start = parseExperienceDate(startDate);
  const end = endDate ? parseExperienceDate(endDate) : new Date();

  const totalMonths = Math.max(1, differenceInCalendarMonths(end, start));

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return [years > 0 ? `${years}y` : null, months > 0 ? `${months}m` : null]
    .filter(Boolean)
    .join(" ");
}

function getTechnologyName(technologyId: string) {
  const technology = technologies[technologyId as keyof typeof technologies];

  return technology?.name ?? technologyId;
}

function OrganizationMark({
  organization,
}: {
  organization: ExperienceOrganization;
}) {
  return (
    <span className="grid size-9 shrink-0 place-items-center rounded-md border border-border bg-surface-elevated text-muted-foreground">
      {organization.logo ? (
        organization.logoDark ? (
          <>
            <Image
              src={organization.logo}
              alt=""
              width={24}
              height={24}
              className="size-6 object-contain dark:hidden"
            />

            <Image
              src={organization.logoDark}
              alt=""
              width={24}
              height={24}
              className="hidden size-6 object-contain dark:block"
            />
          </>
        ) : (
          <Image
            src={organization.logo}
            alt=""
            width={24}
            height={24}
            className="size-6 object-contain"
          />
        )
      ) : (
        <Building2 className="size-5" strokeWidth={1.75} aria-hidden="true" />
      )}
    </span>
  );
}

function PositionMark({ position }: { position: ExperiencePosition }) {
  const Icon = position.technologies?.length ? Code2 : BriefcaseBusiness;

  return (
    <span className="relative z-10 grid size-7 shrink-0 place-items-center rounded-md border border-border bg-surface-elevated text-muted-foreground">
      <Icon className="size-4" strokeWidth={1.75} aria-hidden="true" />
    </span>
  );
}

function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePosition;
}) {
  const period = `${formatExperienceDate(position.startDate)}-${position.endDate ? formatExperienceDate(position.endDate) : "Present"}`;

  const duration = formatDuration(position.startDate, position.endDate);

  const badges = [
    ...(position.technologies?.map((technologyId) => ({
      id: `technology-${technologyId}`,
      label: getTechnologyName(technologyId),
    })) ?? []),
    ...(position.skills?.map((skill) => ({
      id: `skill-${skill}`,
      label: skill,
    })) ?? []),
  ];

  return (
    <AccordionItem
      value={position.id}
      className="group/experience-position relative border-b-0"
    >
      <AccordionTrigger className="relative z-10 -m-1 w-[calc(100%+0.5rem)] items-start gap-3 rounded-md p-1 text-left transition-colors hover:bg-accent/40 hover:no-underline">
        <PositionMark position={position} />

        <div className="min-w-0 flex-1">
          <h4 className="font-medium text-balance">{position.title}</h4>

          <dl className="mt-1 flex flex-wrap items-center gap-2 font-mono text-sm text-muted-foreground">
            {position.type && (
              <>
                <div>
                  <dt className="sr-only">Employment type</dt>
                  <dd>{position.type}</dd>
                </div>

                <span
                  aria-hidden="true"
                  className="h-4 w-px shrink-0 bg-border"
                />
              </>
            )}

            <div>
              <dt className="sr-only">Employment period</dt>
              <dd>{period}</dd>
            </div>

            <span aria-hidden="true" className="h-4 w-px shrink-0 bg-border" />

            <div>
              <dt className="sr-only">Duration</dt>
              <dd>{duration}</dd>
            </div>
          </dl>
        </div>
      </AccordionTrigger>

      {position.highlights?.length ? (
        <AccordionContent className="pb-0">
          <ul className="grid gap-2 pt-3 pl-12 text-sm leading-relaxed text-foreground">
            {position.highlights.map((highlight) => (
              <li
                key={highlight}
                className="relative pl-5 before:absolute before:top-[0.65em] before:left-0 before:size-1 before:rounded-full before:bg-muted-foreground/60"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </AccordionContent>
      ) : null}

      {badges.length > 0 && (
        <ul
          className="flex flex-wrap gap-1.5 pt-4 pl-10"
          aria-label={`${position.title} technologies and skills`}
        >
          {badges.map((badge) => (
            <li key={badge.id} className="flex">
              <TechnologyBadge>{badge.label}</TechnologyBadge>
            </li>
          ))}
        </ul>
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-2 left-3.5 hidden size-4 bg-background group-last/experience-position:flex"
      >
        <span className="size-full rounded-bl-sm border-b border-l border-border" />
      </div>
    </AccordionItem>
  );
}

function ExperienceOrganizationItem({
  organization,
}: {
  organization: ExperienceOrganization;
}) {
  const isCurrent = organization.positions.some(
    (position) => !position.endDate,
  );

  return (
    <div className="border-b border-border last:border-b-0">
      <header className="flex items-start gap-3 p-4 sm:items-center">
        <OrganizationMark organization={organization} />

        <div className="flex min-w-0 flex-1 flex-col gap-x-3 gap-y-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-xl/6 font-medium">
            {organization.website ? (
              <a
                href={organization.website}
                target="_blank"
                rel="noreferrer"
                className="hover:underline underline-offset-3"
              >
                {organization.name}
              </a>
            ) : (
              organization.name
            )}
          </h3>

          <dl className="flex min-w-0 items-center gap-2 text-sm font-mono text-muted-foreground">
            <dt className="sr-only">Location</dt>
            <dd className="truncate">{organization.location}</dd>

            {organization.locationType && (
              <>
                <dt className="sr-only">Location type</dt>
                <dd>({locationTypeLabels[organization.locationType]})</dd>
              </>
            )}

            {isCurrent && (
              <>
                <dt className="sr-only">Employment status</dt>
                <dd>
                  <span className="sr-only">Current</span>

                  <span className="relative flex size-2.5 translate-x-px translate-y-px items-center justify-center">
                    <span
                      aria-hidden="true"
                      className="absolute inline-flex size-2.5 animate-ping rounded-full bg-sky-500 opacity-40"
                    />
                    <span
                      aria-hidden="true"
                      className="relative inline-flex size-1.5 rounded-full bg-sky-500"
                    />
                  </span>
                </dd>
              </>
            )}
          </dl>
        </div>
      </header>

      <Accordion
        type="multiple"
        defaultValue={
          organization.id === experience[0]?.id && organization.positions[0]
            ? [organization.positions[0].id]
            : []
        }
        className="relative space-y-4 p-4 before:absolute before:top-11 before:bottom-6 before:left-7.5 before:w-px before:bg-border"
      >
        {organization.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </Accordion>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <header className="screen-line-bottom border-border p-4 py-1 pt-2">
        <p className="mb-1 font-mono text-xs uppercase tracking-wide text-muted-foreground">
          /Background
        </p>

        <h2
          id="experience-heading"
          className="text-3xl font-medium tracking-tight"
        >
          My Experience
        </h2>
      </header>

      <div>
        {experience.map((organization) => (
          <ExperienceOrganizationItem
            key={organization.id}
            organization={organization}
          />
        ))}
      </div>
    </section>
  );
}
