import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function Kbd({ className, ...props }: ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "pointer-events-none inline-flex h-5 min-w-6 items-center justify-center rounded-sm px-1",
        "font-sans text-sm/none font-normal tracking-tight select-none",
        "bg-black/5 text-muted-foreground shadow-[inset_0_0_1px] shadow-black/10",
        "dark:bg-white/10 dark:shadow-white/20",
        "in-data-[slot=tooltip-content]:bg-white/20 in-data-[slot=tooltip-content]:text-background",
        "dark:in-data-[slot=tooltip-content]:bg-black/10",
        className,
      )}
      {...props}
    />
  );
}
