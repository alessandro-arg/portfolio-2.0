"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ArrowRight } from "lucide-react";
import StarIcon from "@/components/icons/star.svg";
import Image from "next/image";
import { ProjectCard } from "./ProjectCard";
import { ProjectInfoPanel } from "./ProjectInfoPanel";
import { Project } from "./types";

import type { SimpleIcon } from "simple-icons";
import {
  siNextdotjs,
  siReact,
  siAngular,
  siTypescript,
  siTailwindcss,
  siFirebase,
} from "simple-icons/icons";

export function IconInline({
  icon,
  size = 16,
}: {
  icon: SimpleIcon;
  size?: number;
}) {
  return (
    <div aria-label={icon.title} title={icon.title}>
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        aria-hidden="true"
      >
        <path d={icon.path} fill={`#${icon.hex || "000000"}`} />
      </svg>
    </div>
  );
}

const projectsData: Project[] = [
  {
    title: "DABubble",
    smallDescription:
      "A space for entrepreneurs to pitch ideas, explore others,and gain exposure with clean design",
    description:
      " A space for entrepreneurs to pitch ideas, explore others,and gain exposure with clean design sdfagsdfgasjdhfgkajshdgfajshdgfkjahsdgf asdfjhgasdfkjhg sADJFHGASDF KJHSdGFJh ",
    src: "/images/dabubble_mockup.jpg",
    href: "/projects/dabubble",
    slug: "dabubble",
    github: "https://github.com/alessandro-arg/dabubble",
    technologies: [
      {
        name: siNextdotjs.title,
        icon: <IconInline icon={siNextdotjs} size={16} />,
      },
      {
        name: siTypescript.title,
        icon: <IconInline icon={siTypescript} size={16} />,
      },
      {
        name: siTailwindcss.title,
        icon: <IconInline icon={siTailwindcss} size={16} />,
      },
      {
        name: siFirebase.title,
        icon: <IconInline icon={siFirebase} size={16} />,
      },
    ],
    year: "2025",
    points: [
      "Built with Next.js, React, and TypeScript for scalability.",
      "Real-time messaging and presence with Firebase.",
      "Accessible UI with Tailwind CSS and motion effects.",
    ],
    theme: {
      angle: 10,
      stops: [
        { color: "#7E22CE", at: "49.9%" },
        { color: "#7E22CE", at: "81.7%" },
        { color: "#C084FC", at: "99.88%" },
        { color: "#F9D793", at: "113.5%" },
      ],
    },
  },
  {
    title: "Join",
    smallDescription:
      "A space for entrepreneurs to pitch ideas, explore others,and gain exposure with clean design",
    description:
      " A space for entrepreneurs to pitch ideas, explore others,and gain exposure with clean design",
    src: "/images/dabubble_mockup.jpg",
    href: "/projects/dabubble",
    slug: "join",
    github: "https://github.com/alessandro-arg/dabubble",
    technologies: [
      {
        name: siNextdotjs.title,
        icon: <IconInline icon={siNextdotjs} size={16} />,
      },
      {
        name: siTypescript.title,
        icon: <IconInline icon={siTypescript} size={16} />,
      },
      {
        name: siTailwindcss.title,
        icon: <IconInline icon={siTailwindcss} size={16} />,
      },
      {
        name: siFirebase.title,
        icon: <IconInline icon={siFirebase} size={16} />,
      },
    ],
    year: "2025",
    points: [
      "Built with Next.js, React, and TypeScript for scalability.",
      "Real-time messaging and presence with Firebase.",
      "Accessible UI with Tailwind CSS and motion effects.",
    ],
    theme: {
      angle: 10,
      stops: [
        { color: "#2932CB", at: "49.9%" },
        { color: "#2932CB", at: "81.7%" },
        { color: "#7980FF", at: "99.88%" },
        { color: "#F9D793", at: "113.5%" },
      ],
    },
  },
  {
    title: "Chess²",
    smallDescription:
      "A space for entrepreneurs to pitch ideas, explore others,and gain exposure with clean design",
    description:
      " A space for entrepreneurs to pitch ideas, explore others,and gain exposure with clean design",
    src: "/images/dabubble_mockup.jpg",
    href: "/projects/dabubble",
    slug: "chess2",
    github: "https://github.com/alessandro-arg/dabubble",
    technologies: [
      {
        name: siNextdotjs.title,
        icon: <IconInline icon={siNextdotjs} size={16} />,
      },
      {
        name: siTypescript.title,
        icon: <IconInline icon={siTypescript} size={16} />,
      },
      {
        name: siTailwindcss.title,
        icon: <IconInline icon={siTailwindcss} size={16} />,
      },
      {
        name: siFirebase.title,
        icon: <IconInline icon={siFirebase} size={16} />,
      },
    ],
    year: "2025",
    points: [
      "Built with Next.js, React, and TypeScript for scalability.",
      "Real-time messaging and presence with Firebase.",
      "Accessible UI with Tailwind CSS and motion effects.",
    ],
    theme: {
      angle: 10,
      stops: [
        { color: "#14B8A6", at: "49.9%" },
        { color: "#14B8A6", at: "81.7%" },
        { color: "#5EEAD4", at: "99.88%" },
        { color: "#F9D793", at: "113.5%" },
      ],
    },
  },
];

export default function ProjectsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const ids = useMemo(() => projectsData.map((p, i) => p.slug ?? `p-${i}`), []);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -50% 0px", // triggers when the card passes midpoint
      threshold: 0.3,
    };

    const handler: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLDivElement;
          const idxAttr = el.getAttribute("data-index");
          if (idxAttr) setActiveIdx(parseInt(idxAttr, 10));
        }
      });
    };

    const observer = new IntersectionObserver(handler, options);
    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="relative mx-auto mt-28 w-full container py-10 cursor-default"
    >
      <h2 className="relative z-2 text-5xl font-medium tracking-tight text-balance sm:text-5xl md:text-6xl text-center mb-20 md:mb-24 [text-shadow:rgba(255,255,255,0.05)_0_4px_8px,rgba(255,255,255,0.25)_0_8px_30px]">
        <p className="mb-3 font-mono text-xs font-normal tracking-widest text-black/80 uppercase md:text-sm dark:text-white/70">
          FEATURED CASE STUDIES
        </p>
        <span className="font-instrument">
          <span>Curated </span>
          <AnimatedGradientText
            colorFrom="#4aeedd"
            colorTo="#16b1ff"
            className="pe-2 tracking-tight italic"
          >
            work
          </AnimatedGradientText>
        </span>
      </h2>
      <div
        role="main"
        aria-label="Projects list"
        className="relative flex w-full max-lg:max-w-xl mx-auto"
      >
        {/* Here loop all the projects like -> for every project, create an article like under */}
        <div className="mx-auto gap-y-6 flex lg:max-w-[65%] flex-col lg:gap-y-28">
          {projectsData.map((project, i) => (
            <div
              key={ids[i]}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              data-index={i}
              className="flex w-full flex-row will-change-auto"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <div className="hidden py-4 lg:sticky lg:block lg:w-[35%]">
          <div className="sticky top-40">
            <ProjectInfoPanel project={projectsData[activeIdx] ?? null} />
          </div>
        </div>
      </div>

      {/* CTA for the other projects */}
      <a
        href="/projects"
        className="group dark:text-white-1 flex w-fit items-center justify-center gap-2 font-mono text-neutral-800 transition-colors hover:text-black mx-auto md:mt-20"
      >
        See more projects
        <div className="bg-white-1/50 size-[25px] overflow-hidden rounded-full border border-neutral-300 transition-all duration-500 group-hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:group-hover:bg-white/10">
          <div className="flex w-12 -translate-x-1/2 transition-transform duration-500 ease-in-out group-hover:translate-x-0">
            <span className="flex size-6">
              <ArrowRight className="m-auto size-[14px]" aria-hidden="true" />
            </span>
            <span className="flex size-6">
              <ArrowRight className="m-auto size-[14px]" aria-hidden="true" />
            </span>
          </div>
        </div>
      </a>
    </section>
  );
}
