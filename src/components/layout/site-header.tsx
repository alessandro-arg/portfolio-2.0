import Image from "next/image";
import Link from "next/link";

import { ThemeToggle } from "@/components/interactive/theme-toggle";
import { PageFrame } from "@/components/layout/page-frame";
import { CommandMenuTrigger } from "@/components/interactive/command-menu";

import { homepageNavigation } from "@/content/navigation";

const desktopNavigationIds: readonly string[] = [
  "projects",
  "about",
  "experience",
  "contact",
];

export function SiteHeader() {
  const desktopNavigation = homepageNavigation.filter((item) =>
    desktopNavigationIds.includes(item.id),
  );

  return (
    <header className="sticky top-0 z-50 isolate w-full bg-background">
      <PageFrame className="screen-line-bottom">
        <div className="flex min-h-14 items-center gap-2 pl-4 pr-2 sm:gap-4">
          <Link
            href="/"
            aria-label="Alessandro Argenziano Home"
            className="inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <Image
              src="/icons/icon0.svg"
              alt=""
              width={28}
              height={28}
              className="dark:invert"
              priority
            />
          </Link>

          <div className="flex-1" />

          <nav
            aria-label="Primary navigation"
            className="flex items-center gap-4 max-sm:hidden"
          >
            {desktopNavigation.map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                className="rounded-md text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            <span
              aria-hidden="true"
              className="mr-2 h-5 w-px shrink-0 self-center bg-border max-sm:hidden"
            />

            <CommandMenuTrigger className="max-sm:hidden" />

            <span
              aria-hidden="true"
              className="mx-2 h-5 w-px shrink-0 self-center bg-border max-sm:hidden"
            />

            <ThemeToggle />
          </div>
        </div>
      </PageFrame>
    </header>
  );
}
