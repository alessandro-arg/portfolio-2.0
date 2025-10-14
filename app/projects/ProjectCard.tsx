"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Project } from "./types";
import { makeGradient } from "@/lib/theme";
import Link from "next/link";

function projectHref(project: Project) {
  if (project.href) return project.href;
  if (project.slug) return `/projects/${project.slug}`;
  return "/projects";
}

export function ProjectCard({ project }: { project: Project }) {
  const { title, smallDescription, src, technologies = [] } = project;
  const href = projectHref(project);

  return (
    <div
      role="article"
      aria-label={title}
      className="flex w-full flex-row will-change-auto"
    >
      <div className="flex flex-col w-full lg:mx-10">
        <Link
          draggable="false"
          href={href}
          className="border-white-3 group relative block cursor-pointer overflow-hidden rounded-2xl border bg-[#f2f2f20c] p-1 shadow-2xl lg:rounded-3xl lg:p-2 dark:border-white/15"
        >
          {/* gradient line top */}
          <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(0,0,0,0)_5%,rgba(255,255,255,0.8)_35%,rgb(255,255,255)_50%,rgba(255,255,255,0.8)_65%,rgba(0,0,0,0)_95%)]"></div>

          <div className="relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl max-lg:pt-2 from-black/20 lg:from-black/35 hover:from-black/20 to-black/45 transition-colors duration-300 dark:bg-linear-to-b">
            {/* background gradient */}
            <div
              className="absolute inset-0 -z-10 transition-transform duration-500 ease-in-out group-hover:scale-105"
              style={{ background: makeGradient(project.theme) }}
            ></div>
            <div className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70 bg-[linear-gradient(90deg,rgba(0,0,0,0)_20%,rgb(255,255,255)_50%,rgba(0,0,0,0)_80%)]"></div>
            {/* top section (desktop view) */}
            <div className="hidden w-full flex-row items-center justify-between gap-8 px-10 py-8 text-white/70 lg:flex">
              <h3 className="text-xl xl:text-2xl tracking-tight">
                {smallDescription}
              </h3>
              <ArrowRight
                className="size-6 shrink-0 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                aria-hidden="true"
              />
            </div>

            {/* project image */}
            <Image
              src={src}
              alt={title}
              width={1203}
              height={753}
              decoding="async"
              className="w-full max-w-[85%] translate-y-5 rounded-t-lg will-change-transform lg:block transition-transform duration-500 ease-in-out -rotate-3 lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 shadow-[0px_40px_50px_10px_rgba(0,0,0,0.22)]"
            />
          </div>
        </Link>

        {/* mobile view */}
        <Link
          href={href}
          className="mt-6 mb-12 flex flex-col lg:hidden cursor-pointer"
        >
          <div className="flex items-center">
            <h2 className="my-auto line-clamp-1 text-base text-black/85 dark:text-white/80">
              {title}
            </h2>
          </div>
          <div className="w-full flex-row gap-8 items-center justify-between flex text-black dark:text-white text-base mt-1">
            <h3>{smallDescription}</h3>
            <ArrowRight className="size-6 shrink-0" />
          </div>
          {technologies.length > 0 && (
            <div className="my-4 flex max-w-fit flex-wrap items-center gap-1">
              {technologies.map((t, i) => (
                <span
                  data-slot="badge"
                  key={`${t.name}-${i}`}
                  className="inline-flex items-center justify-center border w-fit whitespace-nowrap shrink-0 gap-2 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-black dark:text-white font-mono border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2 [a&]:hover:bg-primary/90 text-xs p-0.5 px-1.5 rounded"
                >
                  {t.name}
                </span>
              ))}
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}
