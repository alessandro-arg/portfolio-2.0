import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function AnnotationNote({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "pointer-events-none font-handwritten absolute text-base tracking-normal text-muted-foreground select-none flex-col",
        className,
      )}
      {...props}
    />
  );
}

export function AnnotationArrow({
  className,
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("size-8 shrink-0 text-muted-foreground", className)}
      {...props}
    >
      <path d="M6 5c0 14 6 25 25 29" />
      <path d="m24 27 7 7-9 1" />
    </svg>
  );
}
