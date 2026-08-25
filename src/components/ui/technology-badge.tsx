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
    "bg-surface-elevated px-2 font-mono text-xs text-muted-foreground",
    "inset-ring-1 inset-ring-border",
    "[&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0",
    "[&_img]:pointer-events-none [&_img]:size-3.5 [&_img]:shrink-0",
    href
      ? "cursor-pointer transition-colors hover:bg-accent"
      : "cursor-default",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
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
