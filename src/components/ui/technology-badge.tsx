import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type TechnologyBadgeProps = {
  children: ReactNode;
  icon?: ReactNode;
  href?: string;
  className?: string;
};

export function TechnologyBadge({
  children,
  icon,
  href,
  className,
}: TechnologyBadgeProps) {
  const classes = cn(
    "inline-flex h-6 items-center justify-center gap-1.25 rounded-full",
    "bg-zinc-50/80 px-2 font-mono text-xs text-foreground cursor-default",
    "inset-ring-1 inset-ring-border dark:bg-zinc-900/80",
    "[&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0",
    "[&_svg]:text-muted-foreground/80",
    href && "transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/80",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <span className={classes}>
      {icon}
      {children}
    </span>
  );
}
