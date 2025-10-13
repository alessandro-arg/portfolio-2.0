"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

import type { SimpleIcon } from "simple-icons";
import {
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siAngular,
  siTailwindcss,
  siFirebase,
  siGit,
  siGithub,
  siClerk,
  siShadcnui,
  siDjango,
  siVercel,
  siStripe,
  siBetterauth,
  siFramer,
  siPrisma,
  siFigma,
  siPython,
} from "simple-icons/icons";

type SkillItem = {
  img: SimpleIcon;
  colorClass?: string;
};

export function SmallTerminal() {
  return (
    <div className="w-[300px] h-50 absolute -bottom-15 group-hover:-bottom-10 group-hover:scale-105 transition-all duration-500">
      <Terminal>
        <TypingAnimation delay={0}>$ ls</TypingAnimation>
        <AnimatedSpan delay={800} className="text-blue-500">
          Also learning MongoDB
        </AnimatedSpan>
        <TypingAnimation delay={1600}>$ cd Documents</TypingAnimation>
        <AnimatedSpan delay={3200} className="text-green-500">
          /home/user/alessandro
        </AnimatedSpan>
      </Terminal>
    </div>
  );
}

const skillsRow1: SkillItem[] = [
  { img: siTypescript },
  { img: siReact },
  { img: siNextdotjs, colorClass: "text-black dark:text-white" },
  { img: siAngular, colorClass: "text-[#DD1100]" },
  { img: siTailwindcss },
  { img: siFramer },
  { img: siGithub, colorClass: "text-black dark:text-white" },
];

const skillsRow2: SkillItem[] = [
  { img: siDjango, colorClass: "dark:text-white" },
  { img: siJavascript },
  { img: siPrisma },
  { img: siPython },
  { img: siGit },
  { img: siStripe },
];

const skillsRow3: SkillItem[] = [
  { img: siClerk },
  { img: siBetterauth },
  { img: siShadcnui },
  { img: siVercel, colorClass: "text-black dark:text-white" },
  { img: siFirebase },
  { img: siFigma },
];

function SkillPill({
  icon,
  colorClass,
}: {
  icon: SimpleIcon;
  colorClass?: string;
}) {
  const label = icon.title;
  const brandHex = icon.hex || "000000";
  const useOverride = Boolean(colorClass);

  return (
    <div
      className="inline-flex items-center justify-center rounded-lg border px-3 py-1.5 text-sm w-fit whitespace-nowrap shrink-0 gap-2 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-black dark:text-white font-mono border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2 [a&]:hover:bg-primary/90"
      aria-label={label}
      title={label}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        role="img"
        viewBox="0 0 24 24"
        className={cn("h-5 w-5 shrink-0", useOverride && colorClass)}
      >
        <path
          d={icon.path}
          fill={useOverride ? "currentColor" : `#${brandHex}`}
        />
      </svg>
      <span className="text-sm">{label}</span>
    </div>
  );
}

export default function TechCard() {
  return (
    <div className="absolute inset-0 group">
      <div className="flex h-full flex-col gap-10 py-12">
        {/* Top: title */}
        <h3 className="w-full bg-linear-to-b from-black to-[#83d6ff90] bg-clip-text px-4 text-center text-2xl sm:text-3xl font-semibold tracking-normal text-transparent select-none dark:from-white">
          Technologies I use <br /> and love
        </h3>

        {/* Middle: marquees */}
        <div className="pt-4 cursor-default flex flex-col gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          {/* Row 1 – left → right */}
          <Marquee className="[--duration:40s] [--gap:1.5rem]">
            {skillsRow1.map(({ img, colorClass }, idx) => (
              <div key={`${img.slug}-${idx}`}>
                <SkillPill icon={img} colorClass={colorClass} />
              </div>
            ))}
          </Marquee>

          {/* Row 2 – right → left */}
          <Marquee reverse className="[--duration:40s] [--gap:1.5rem]">
            {skillsRow2.map(({ img, colorClass }, idx) => (
              <div key={`${img.slug}-${idx}`}>
                <SkillPill icon={img} colorClass={colorClass} />
              </div>
            ))}
          </Marquee>

          {/* Row 3 – left → right */}
          <Marquee className="[--duration:40s] [--gap:1.5rem]">
            {skillsRow3.map(({ img, colorClass }, idx) => (
              <div key={`${img.slug}-${idx}`}>
                <SkillPill icon={img} colorClass={colorClass} />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Bottom: animated terminal */}
        <div className="flex items-center justify-center py-2 overflow-hidden">
          <div className="absolute h-70 w-70 rounded-full bg-blue-500 blur-3xl -bottom-40"></div>
          <SmallTerminal />
        </div>
      </div>
    </div>
  );
}
