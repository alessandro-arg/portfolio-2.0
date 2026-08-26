import Image from "next/image";
import Link from "next/link";

import { ThemeToggle } from "@/components/interactive/theme-toggle";
import { PageFrame } from "@/components/layout/page-frame";

export function SiteHeader() {
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
              priority
            />
          </Link>

          <ThemeToggle />
        </div>
      </PageFrame>
    </header>
  );
}
