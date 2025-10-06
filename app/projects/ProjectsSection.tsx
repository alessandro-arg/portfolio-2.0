"use client";

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ArrowRight } from "lucide-react";
import StarIcon from "@/components/icons/star.svg";
import Image from "next/image";

import type { SimpleIcon } from "simple-icons";
import { siNextdotjs, siReact, siAngular } from "simple-icons/icons";

const icons: SimpleIcon[] = [siNextdotjs, siReact, siAngular];

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

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];

export default function ProjectsSection() {
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
        <div className="mx-auto gap-y-6 flex lg:max-w-[65%] flex-col lg:gap-y-28">
          {/* Here loop all the projects like -> for every project, create an article like under */}
          <div
            role="article"
            aria-label="Project X variable"
            className="flex w-full flex-row will-change-auto"
          >
            <div className="flex flex-col w-full lg:mx-10">
              <a
                draggable="false"
                href="#/projects/project-name"
                className="border-white-3 group relative block cursor-pointer overflow-hidden rounded-2xl border bg-[#f2f2f20c] p-1 shadow-2xl lg:rounded-3xl lg:p-2 dark:border-white/15"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(0,0,0,0)_5%,rgba(255,255,255,0.8)_35%,rgb(255,255,255)_50%,rgba(255,255,255,0.8)_65%,rgba(0,0,0,0)_95%)]"></div>
                <div className="relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl max-lg:pt-2 from-black/20 lg:from-black/35 hover:from-black/20 to-black/45 transition-colors duration-300 dark:bg-linear-to-b">
                  <div className="absolute inset-0 -z-10 transition-transform duration-500 ease-in-out group-hover:scale-105 bg-[linear-gradient(10deg,rgb(219,39,119)_49.9%,rgb(219,39,119)_81.7%,rgb(244,114,182)_99.88%)]">
                    {" "}
                  </div>
                  <div className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70 bg-[linear-gradient(90deg,rgba(0,0,0,0)_20%,rgb(255,255,255)_50%,rgba(0,0,0,0)_80%)]"></div>
                  <div className="hidden w-full flex-row items-center justify-between gap-8 px-10 py-8 text-white/70 lg:flex">
                    <h3 className="text-xl xl:text-2xl Afont-mono tracking-tightA">
                      A space for entrepreneurs to pitch ideas, explore others,
                      and gain exposure with clean design
                    </h3>
                    <ArrowRight
                      className="size-6 shrink-0 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                  <Image
                    src="/images/dabubble_mockup.jpg"
                    alt="X Project"
                    width={1203}
                    height={753}
                    decoding="async"
                    className="w-full max-w-[85%] translate-y-5 rounded-t-lg will-change-transform lg:block transition-transform duration-500 ease-in-out -rotate-3 lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 shadow-[0px_40px_50px_10px_rgba(0,0,0,0.22)]"
                  />
                </div>
              </a>
              <a
                href="#/projects/project-name"
                className="mt-6 mb-12 flex flex-col lg:hidden cursor-pointer"
              >
                <div className="flex items-center">
                  <h2 className="my-auto line-clamp-1 text-base text-black/85 dark:text-white/80">
                    Project Title
                  </h2>
                </div>
                <div className="w-full flex-row gap-8 items-center justify-between flex text-black dark:text-white text-base mt-1">
                  <h3>Project description (like in the big view)</h3>
                  <ArrowRight className="size-6 shrink-0" />
                </div>
                <div className="my-4 flex max-w-fit flex-wrap items-center gap-1">
                  Here need to be displayed all the technologies used for the
                  project for mobile (Watch aayush website)
                </div>
              </a>
            </div>
          </div>
          {/* Here ends a single article */}
        </div>
        <div className="hidden py-4 lg:sticky lg:block lg:w-[35%]">
          <div className="sticky top-32">
            <div className="flex">
              <div
                className="my-4 mr-4 h-[2px] min-w-6 bg-blue-500"
                aria-hidden="true"
              ></div>
              <div className="flex flex-col items-start lg:h-[500px]">
                <div className="flex items-center gap-3">
                  <h3 className="text-foreground font-instrument text-3xl font-bold">
                    Project Title
                  </h3>
                </div>
                <p className="text-primary/90 my-2 text-base font-light">
                  Project Description
                </p>
                <ul className="text-primary/90 mt-4 flex flex-col gap-y-2 text-base">
                  <li className="flex items-center text-sm">
                    <StarIcon className="mt-1 mr-2 size-6 shrink-0 fill-blue-600 text-blue-600 dark:text-blue-400 bg-transparent" />
                    Some points to list up the projects, here some examples:
                  </li>
                  <li className="flex items-center text-sm">
                    <StarIcon className="mt-1 mr-2 size-6 shrink-0 fill-blue-600 text-blue-600 dark:text-blue-400 bg-transparent" />
                    Built with Next.js, React, and TypeScript for scalability.
                  </li>
                  <li className="flex items-center text-sm">
                    <StarIcon className="mt-1 mr-2 size-6 shrink-0 fill-blue-600 text-blue-600 dark:text-blue-400 bg-transparent" />
                    Styled using Tailwind CSS with animations by Motion.dev.
                  </li>
                </ul>
                <div className="mt-10 flex flex-wrap gap-3 text-sm">
                  <div className="opacity-100 transform-none">
                    {/* Here all the small cards of the technologies we used for it, here some examples:*/}
                    <span
                      data-slot="badge"
                      className="inline-flex items-center justify-center rounded-lg border px-3 py-1 text-sm w-fit whitespace-nowrap shrink-0 gap-2 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-black dark:text-white font-mono border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2 [a&]:hover:bg-primary/90"
                    >
                      <IconInline icon={siNextdotjs} size={16} />
                      {siNextdotjs.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
