"use client";

import { CalendarIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
import { AnimatedBeam } from "../ui/animated-beam";
import { AnimatedList } from "@/components/ui/animated-list";
import { BentoCard, BentoGrid } from "../ui/bento-grid";
import { Globe } from "../ui/globe";
import { useRef } from "react";
import TechCard from "../bento/TechCard";
import { SparklesCore } from "../ui/sparkles";
import React from "react";
import { toast } from "sonner";
import { Copy, CheckCheck } from "lucide-react";

const EMAIL = "contact@alessandro-argenziano.com";

function CopyEmailCard() {
  const [copied, setCopied] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 3000);

      const body = encodeURIComponent(
        "Hi Alessandro,\n\nI’d like to connect about..."
      );
      const mailtoUrl = `mailto:${EMAIL}?body=${body}`;

      toast("Copied to clipboard!", {
        description: "Email address copied successfully.",
        action: {
          label: "Send Email",
          onClick: () =>
            window.open(mailtoUrl, "_blank", "noopener,noreferrer"),
        },
      });
    } catch {
      toast.warning("Something went wrong.");
    }
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 group">
      <div className="flex h-full w-full flex-col items-center justify-center bg-cover bg-center">
        <div className="h-40 w-full bg-blue absolute inset-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.3}
            maxSize={1}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <span className="w-full bg-linear-to-b from-black to-[#83d6ff90] bg-clip-text px-4 text-center text-3xl font-semibold tracking-normal text-transparent select-none dark:from-white max-w-80 -translate-y-4 py-2">
          Let's work together on your next project
        </span>
        <div className="relative flex">
          <button
            type="button"
            onClick={handleCopy}
            className="items-center gap-2 py-2 text-base font-light text-black dark:text-white/75 outline-hidden transition-all duration-300 cursor-pointer hover:text-black/60 dark:hover:text-white/90 flex w-full justify-center rounded-sm dark:bg-white/10 bg-black/10 px-8 border dark:border-white/10 border-black/10 translate-y-4"
            aria-live="polite"
          >
            {copied ? (
              <CheckCheck className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Copy className="h-5 w-5" aria-hidden="true" />
            )}
            {copied ? "Copied to clipboard" : EMAIL}
          </button>
        </div>
      </div>
    </div>
  );
}

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
    background: <CopyEmailCard />,
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
      <div className="flex h-full flex-col gap-10 py-12">
        <h3 className="w-full bg-linear-to-b from-black to-[#83d6ff90] bg-clip-text px-4 text-center text-3xl font-semibold tracking-normal text-transparent select-none dark:from-white">
          I'm very flexible, <br /> i like Switzerland
        </h3>
        <div className="size-full flex items-center -left-35 -bottom-50">
          <Globe />
        </div>
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
