import { TechnologyBadge } from "@/components/ui/technology-badge";
import { TechnologyIcon } from "@/components/ui/technology-icon";
import { stackGroups, stackTechnologies } from "@/content/technologies";
import type { TechnologyCategory } from "@/types/portfolio";

const stackTechnologyList = Object.values(stackTechnologies);

function getTechnologiesForGroup(categories: readonly TechnologyCategory[]) {
  return stackTechnologyList.filter((technology) =>
    categories.includes(technology.category),
  );
}

export function StackSection() {
  return (
    <section id="stack" aria-labelledby="stack-heading">
      <header className="screen-line-bottom p-4 border-border py-1 pt-2">
        <p className="mb-1 font-mono text-xs uppercase tracking-wide text-muted-foreground">
          /Skills
        </p>

        <h2
          id="stack-heading"
          tabIndex={-1}
          className="text-3xl font-medium tracking-tight"
        >
          My Stack
        </h2>
      </header>

      <div className="relative [--stack-label-width:--spacing(48)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-(--stack-label-width) hidden border-r border-dashed border-border sm:block"
        />
        {stackGroups.map((group, index) => {
          const groupTechnologies = getTechnologiesForGroup(group.categories);

          const headingId = `stack-${group.id}`;

          return (
            <div
              key={group.id}
              className="grid items-start gap-y-2 border-b border-border py-4 last:border-b-0 sm:grid-cols-[var(--stack-label-width)_minmax(0,1fr)]"
            >
              <div
                id={headingId}
                className="whitespace-nowrap px-4 text-sm leading-6"
              >
                <span
                  aria-hidden="true"
                  className="mr-1.5 font-mono text-muted-foreground"
                >
                  /{String(index + 1).padStart(2, "0")}
                </span>

                {group.label}
              </div>

              <ul
                aria-labelledby={headingId}
                className="flex min-w-0 flex-wrap gap-1.5 px-4"
              >
                {groupTechnologies.map((technology) => (
                  <li key={technology.id} className="flex">
                    <TechnologyBadge
                      href={technology.website}
                      icon={<TechnologyIcon technologyId={technology.id} />}
                    >
                      {technology.name}
                    </TechnologyBadge>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
