"use client";

import { CalendarIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
import { AnimatedBeam } from "../ui/animated-beam";
import { AnimatedList } from "@/components/ui/animated-list";
import { BentoCard, BentoGrid } from "../ui/bento-grid";
import { Globe } from "../ui/globe";
import { useRef } from "react";
import TechCard from "../bento/TechCard";

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
    background: <TechCard />,
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className:
      "md:row-start-1 md:row-end-2 lg:row-1 lg:col-start-2 lg:col-end-4",
    background: "",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "md:row-3 lg:row-2 lg:col-2",
    background: "",
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
    background: (
      <div className="absolute size-full flex items-center justify-end">
        <Globe />
      </div>
    ),
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
