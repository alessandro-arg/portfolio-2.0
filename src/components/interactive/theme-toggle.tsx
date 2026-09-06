"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          aria-label="Dark mode"
          aria-pressed={isDark}
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="rounded-md text-foreground hover:bg-muted"
        >
          <Sun className="size-4 dark:hidden" aria-hidden="true" />
          <Moon className="hidden size-4 dark:block" aria-hidden="true" />
        </Button>
      </TooltipTrigger>

      <TooltipContent side="bottom" className="rounded-xl text-sm py-1.5 px-2">
        Toggle mode
      </TooltipContent>
    </Tooltip>
  );
}
