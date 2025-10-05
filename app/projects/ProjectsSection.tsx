"use client";

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
