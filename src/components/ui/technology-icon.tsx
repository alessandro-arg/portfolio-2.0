import Image from "next/image";

import { cn } from "@/lib/utils";
import { technologyIcons } from "@/lib/technology-icons";

type TechnologyIconProps = {
  technologyId: string;
  className?: string;
};

export function TechnologyIcon({
  technologyId,
  className,
}: TechnologyIconProps) {
  const definition = technologyIcons[technologyId];

  if (!definition) {
    return null;
  }

  if (definition.type === "asset") {
    return (
      <Image
        src={definition.src}
        alt=""
        width={14}
        height={14}
        aria-hidden="true"
        className={cn(
          "shrink-0",
          definition.monochrome && "dark:invert",
          className,
        )}
      />
    );
  }

  const { icon, monochrome } = definition;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={cn("shrink-0", monochrome && "text-foreground", className)}
      style={
        monochrome
          ? undefined
          : {
              color: `#${icon.hex}`,
            }
      }
    >
      <path d={icon.path} />
    </svg>
  );
}
