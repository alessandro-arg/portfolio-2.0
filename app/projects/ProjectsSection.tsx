"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ArrowRight } from "lucide-react";
import { projectsData } from "./projects.data";
import { ProjectCard } from "./ProjectCard";
import { ProjectInfoPanel } from "./ProjectInfoPanel";
import Link from "next/link";

type ProjectsSectionProps = {
  showCTA?: boolean;
};

export default function ProjectsSection({
  showCTA = true,
}: ProjectsSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const displayedProjects = useMemo(
    () => (showCTA ? projectsData.slice(0, 3) : projectsData),
    [showCTA]
  );

  const ids = useMemo(
    () => displayedProjects.map((p, i) => p.slug ?? `p-${i}`),
    [displayedProjects]
  );

  useEffect(() => {
    setActiveIdx(0);
  }, [displayedProjects.length]);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -50% 0px",
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
  }, [displayedProjects.length]);

  return (
    <section
      id="projects"
      className={
        showCTA
          ? "relative mx-auto mt-28 w-full container py-10 cursor-default"
          : "relative mx-auto w-full container mt-0 px-4 py-36"
      }
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
        {/* Here loop all the projects like -> for every project, create an article */}
        <div className="mx-auto gap-y-6 flex lg:max-w-[65%] flex-col lg:gap-y-28">
          {displayedProjects.map((project, i) => (
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
            <ProjectInfoPanel project={displayedProjects[activeIdx] ?? null} />
          </div>
        </div>
      </div>

      {/* Only render CTA if showCTA = true */}
      {showCTA && (
        <Link
          href="/projects"
          className="group dark:text-white flex w-fit items-center justify-center gap-2 font-mono text-neutral-800 transition-colors hover:text-black mx-auto md:mt-20"
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
        </Link>
      )}
    </section>
  );
}
