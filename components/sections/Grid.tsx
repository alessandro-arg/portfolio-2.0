"use client";

import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../ui/animated-beam";
import { AnimatedList } from "@/components/ui/animated-list";
import { BentoCard, BentoGrid } from "../ui/bento-grid";
import { Marquee } from "../ui/marquee";
import { Globe } from "../ui/globe";
import { useRef } from "react";
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
  siNodedotjs,
  siFirebase,
  siGit,
  siGithub,
  siClerk,
  siShadcnui,
  siMaterialdesign,
  siDjango,
  siVercel,
  siStripe,
  siMysql,
  siBetterauth,
  siChartdotjs,
  siFramer,
  siPrisma,
  siFigma,
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
  { img: siMaterialdesign },
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

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

function BeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <div
        ref={fromRef}
        className="absolute left-6 top-1/3 rounded-full border px-3 py-1 text-xs bg-background/70 backdrop-blur"
      >
        App A
      </div>
      <div
        ref={toRef}
        className="absolute right-6 bottom-1/3 rounded-full border px-3 py-1 text-xs bg-background/70 backdrop-blur"
      >
        App B
      </div>

      <AnimatedBeam
        className="pointer-events-none"
        containerRef={containerRef}
        fromRef={fromRef}
        toRef={toRef}
        curvature={120}
        pathColor="gray"
        pathWidth={3}
        pathOpacity={0.25}
        gradientStartColor="#ffaa40"
        gradientStopColor="#9c40ff"
        duration={5}
      />
    </div>
  );
}

const features = [
  {
    Icon: null,
    className:
      "relative overflow-hidden row-start-1 row-end-3 lg:row-start-1 lg:row-end-3 lg:col-1",
    background: (
      <div className="absolute inset-0 group">
        <div className="flex h-full flex-col gap-10 py-12">
          {/* Top: title */}
          <h3 className="w-full bg-linear-to-b from-black to-[#16b1ff70] bg-clip-text px-4 text-center text-3xl font-semibold tracking-normal text-transparent select-none dark:from-white">
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
    ),
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className:
      "md:row-start-1 md:row-end-2 lg:row-1 lg:col-start-2 lg:col-end-4",
    background: (
      <AnimatedList className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90">
        {files.map((f, i) => (
          <div
            key={`notif-${i}`}
            className="w-full max-w-sm rounded-lg border bg-background/60 p-3 text-xs shadow-sm backdrop-blur"
          >
            <div className="font-medium">{f.name}</div>
            <div className="text-muted-foreground">{f.body}</div>
          </div>
        ))}
      </AnimatedList>
    ),
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "md:row-3 lg:row-2 lg:col-2",
    background: (
      <AnimatedList className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90">
        {files.map((f, i) => (
          <div
            key={`notif-${i}`}
            className="w-full max-w-sm rounded-lg border bg-background/60 p-3 text-xs shadow-sm backdrop-blur"
          >
            <div className="font-medium">{f.name}</div>
            <div className="text-muted-foreground">{f.body}</div>
          </div>
        ))}
      </AnimatedList>
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className:
      "md:col-start-1 md:col-end-7 lg:row-3 lg:col-start-1 lg:col-end-3",
    background: <BeamDemo />,
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className:
      "md:row-start-2 md:row-end-4 lg:row-start-2 lg:row-end-4 lg:col-3",
    href: "#",
    cta: "Learn more",
    background: <Globe />,
  },
];

export function Grid() {
  return (
    <div className="w-full max-w-7xl px-4">
      <div className="mx-auto w-full gap-4 md:max-w-full mb-30 sm:mb-20">
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
