import { ComponentPropsWithoutRef, CSSProperties, FC } from "react";

import { cn } from "@/lib/utils";

export interface AnimatedShinyTextProps
  extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number;
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 50,
  ...props
}) => {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "mx-auto max-w-md text-neutral-600/70 dark:text-neutral-200/80",
        "animate-shiny-text [background-size:var(--shiny-width)_100%] bg-clip-text [background-position:0_0] bg-no-repeat [transition:background-position_50ms_cubic-bezier(.6,.6,0,1)_infinite]",
        "bg-gradient-to-r from-transparent via-black/80 via-30% to-transparent dark:via-white",

        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
