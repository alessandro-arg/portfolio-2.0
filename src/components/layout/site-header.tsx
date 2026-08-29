import Image from "next/image";
import Link from "next/link";

import { ThemeToggle } from "@/components/interactive/theme-toggle";
import { PageFrame } from "@/components/layout/page-frame";
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
      <PageFrame className="screen-line-bottom max-sm:border-x-0">
        <div className="flex min-h-14 items-center justify-between px-page sm:px-4">
          <Link
            href="/"
            aria-label="Alessandro Argenziano Home"
            className="inline-flex items-center focus-visible:outline-offset-4"
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

          <nav
            aria-label="Primary navigation"
            className="ml-auto hidden items-center md:flex"
          >
            {desktopNavigation.map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                className="rounded-md px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-1">
            <ThemeToggle />
          </div>
        </div>
      </PageFrame>
    </header>
  );
}
