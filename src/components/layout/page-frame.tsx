import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type PageFrameProps = ComponentProps<"div">;

export function PageFrame({ className, children, ...props }: PageFrameProps) {
  return (
    <div
      className={cn(
        "page-frame border-x border-border bg-background",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
