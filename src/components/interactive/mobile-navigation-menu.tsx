"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { homepageNavigation } from "@/content/navigation";

export function MobileNavigationMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen} modal>
      <PopoverTrigger asChild>
        <MobileNavigationTrigger />
      </PopoverTrigger>

      <PopoverContent
        side="top"
        align="center"
        sideOffset={8}
        className="w-48 rounded-xl p-1 dark:bg-accent dark:ring-1 dark:ring-foreground/20"
      >
        <nav aria-label="Mobile navigation" className="flex flex-col">
          {homepageNavigation.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              className="rounded-lg px-3 py-1.5 text-base text-foreground hover:bg-accent"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </PopoverContent>
    </Popover>
  );
}

function MobileNavigationTrigger(
  props: Omit<React.ComponentProps<typeof Button>, "children">,
) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      aria-label="Toggle navigation"
      className="group relative flex touch-manipulation flex-col gap-1 border-none active:scale-100 aria-expanded:bg-accent"
      {...props}
    >
      <span className="h-0.5 w-4 rounded-full bg-foreground transition-transform group-aria-expanded:translate-y-0.75 group-aria-expanded:rotate-45" />

      <span className="h-0.5 w-4 rounded-full bg-foreground transition-transform group-aria-expanded:-translate-y-0.75 group-aria-expanded:-rotate-45" />
    </Button>
  );
}
