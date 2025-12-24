"use client";

export function TechBadge({ children }: { children: string }) {
  return (
    <span
      data-slot="badge"
      className="inline-flex items-center justify-center border w-fit whitespace-nowrap shrink-0 gap-2 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-black dark:text-white font-mono border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2 [a&]:hover:bg-primary/90 rounded-sm px-1.5 py-0.5 text-x"
    >
      {children}
    </span>
  );
}
