"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils"; // optional if you have it; otherwise remove cn and className={...}

export function MoreMenu() {
  return (
    <NavigationMenu
      // keeps the menu as small as the trigger so it sits nicely among your links
      className="relative"
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* Trigger styled like the rest of your header links */}
          <NavigationMenuTrigger
            className={cn(
              "bg-transparent px-0 py-0 h-auto",
              "text-sm text-gray-600 dark:text-gray-300",
              "hover:text-black dark:hover:text-white",
              "font-medium"
            )}
          >
            More
          </NavigationMenuTrigger>

          {/* The dropdown panel */}
          <NavigationMenuContent
            // shadcn already animates with data-[motion] attributes; these classes add a soft feel
            className={cn(
              "rounded-lg border border-black/10 dark:border-white/10",
              "bg-white/90 dark:bg-neutral-900/90 backdrop-blur",
              "shadow-xl"
            )}
          >
            <ul className="grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {/* Hero tile (left column on lg) */}
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>

              {/* Right column list items */}
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

/** Small helper copied from shadcn docs (kept here to avoid extra files) */
function ListItem({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 transition-colors",
            "hover:bg-accent hover:text-accent-foreground",
            "focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
