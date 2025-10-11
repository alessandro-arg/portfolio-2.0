"use client";

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { MapPin, Briefcase } from "lucide-react";
import TimelineRail from "./ui/timeline-rail";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative px-4 pt-24 pb-12 md:pt-32 md:pb-20"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto w-full max-w-6xl md:px-10">
        <h2 className="relative z-2 text-5xl font-medium tracking-tight sm:text-5xl md:text-6xl text-center mb-4 md:mb-0 max-w-lg mx-auto text-balance [text-shadow:rgba(255,255,255,0.05)_0px_4px_8px,rgba(255,255,255,0.25)_0px_8px_30px]">
          <p className="mb-3 font-mono text-xs font-normal tracking-widest text-black/80 uppercase md:text-sm dark:text-white/70">
            The experience
          </p>
          <span className="font-instrument">
            <span>Experience that brings </span>
            <AnimatedGradientText
              colorFrom="#4aeedd"
              colorTo="#16b1ff"
              className="pe-2 tracking-tight italic"
            >
              Ideas to life
            </AnimatedGradientText>
          </span>
        </h2>
        <div className="relative mx-auto mt-20 mb-20 max-w-7xl">
          <div className="flex w-full flex-col max-md:ps-16 md:gap-10">
            <article className="grid grid-cols-1 gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr_1fr_4fr]">
              <div className="w-full lg:max-w-sm">
                <div className="flex flex-col items-start gap-y-3 text-sm font-light">
                  <time
                    className="text-muted-foreground text-xs font-medium tracking-wide uppercase"
                    dateTime="OCT 2025 - Present"
                  >
                    OCT 2025 - Present
                  </time>
                  <div className="flex items-center gap-2">
                    <h2 className="font-instrument text-2xl font-bold text-neutral-900 md:text-3xl dark:text-neutral-100 tracking-wide">
                      GFN
                    </h2>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-muted-foreground flex items-center gap-1.5">
                      <MapPin />
                      <span className="text-sm">Donaueschingen, Germany</span>
                    </div>
                    <div className="text-muted-foreground flex items-center gap-1.5">
                      <Briefcase />
                      <span className="text-sm font-medium">Hybrid Work</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block"></div>
              <div className="relative w-full">
                <div className="flex flex-col gap-y-6 text-xs leading-relaxed md:text-sm">
                  <header>
                    <h3 className="font-instrument text-2xl font-bold text-neutral-900 md:text-3xl dark:text-neutral-100 tracking-wide">
                      Ausbildung Fachinformatiker - Anwendungsentwickler
                    </h3>
                  </header>
                  <section aria-label="Key achievements">
                    <ul className="flex list-none flex-col gap-y-4 text-neutral-700 dark:text-neutral-300/90">
                      <li className="leading-relaxed">
                        key and{" "}
                        <span className="font-semibold text-neutral-900 dark:text-neutral-200">
                          important
                        </span>
                      </li>
                      <li className="leading-relaxed">
                        Architected enterprise-scale, CMS-driven reusable
                        pagebuilder blocks with dynamic configurability using
                        Sanity and Contentful, enabling non-technical teams to
                        manage content across 6+ production websites. Designed
                        custom schemas and optimized GROQ queries, resulting in
                        40% faster content delivery.
                      </li>
                      <li className="leading-relaxed">key</li>
                      <li className="leading-relaxed">key</li>
                    </ul>
                  </section>
                  <section aria-label="Technologies used">
                    <div className="flex flex-wrap gap-2">
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-lg border px-3 py-1 w-fit whitespace-nowrap shrink-0 gap-2 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-black dark:text-white font-mono border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2 [a&]:hover:bg-primary/90 text-xs md:text-sm"
                      >
                        TypeScript
                      </span>
                    </div>
                  </section>
                </div>
              </div>
            </article>
            <article className="grid grid-cols-1 gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr_1fr_4fr]">
              <div className="w-full lg:max-w-sm">
                <div className="flex flex-col items-start gap-y-3 text-sm font-light">
                  <time
                    className="text-muted-foreground text-xs font-medium tracking-wide uppercase"
                    dateTime="OCT 2025 - Present"
                  >
                    OCT 2025 - Present
                  </time>
                  <div className="flex items-center gap-2">
                    <h2 className="font-instrument text-2xl font-bold text-neutral-900 md:text-3xl dark:text-neutral-100 tracking-wide">
                      GFN
                    </h2>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-muted-foreground flex items-center gap-1.5">
                      <MapPin />
                      <span className="text-sm">Donaueschingen, Germany</span>
                    </div>
                    <div className="text-muted-foreground flex items-center gap-1.5">
                      <Briefcase />
                      <span className="text-sm font-medium">Hybrid Work</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block"></div>
              <div className="relative w-full">
                <div className="flex flex-col gap-y-6 text-xs leading-relaxed md:text-sm">
                  <header>
                    <h3 className="font-instrument text-2xl font-bold text-neutral-900 md:text-3xl dark:text-neutral-100 tracking-wide">
                      Ausbildung Fachinformatiker - Anwendungsentwickler
                    </h3>
                  </header>
                  <section aria-label="Key achievements">
                    <ul className="flex list-none flex-col gap-y-4 text-neutral-700 dark:text-neutral-300/90">
                      <li className="leading-relaxed">
                        key and{" "}
                        <span className="font-semibold text-neutral-900 dark:text-neutral-200">
                          important
                        </span>
                      </li>
                      <li className="leading-relaxed">key</li>
                      <li className="leading-relaxed">key</li>
                      <li className="leading-relaxed">key</li>
                    </ul>
                  </section>
                  <section aria-label="Technologies used">
                    <div className="flex flex-wrap gap-2">
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-lg border px-3 py-1 w-fit whitespace-nowrap shrink-0 gap-2 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-black dark:text-white font-mono border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2 [a&]:hover:bg-primary/90 text-xs md:text-sm"
                      >
                        TypeScript
                      </span>
                    </div>
                  </section>
                </div>
              </div>
            </article>
          </div>
          <TimelineRail />
        </div>
      </div>
    </section>
  );
}
