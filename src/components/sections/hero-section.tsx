import Image from "next/image";
import { BadgeCheck } from "lucide-react";

import { SpotlightLogo } from "@/components/interactive/spotlight-logo";
import { RotatingSentence } from "@/components/interactive/rotating-sentence";
import {
  AnnotationArrow,
  AnnotationNote,
} from "@/components/ui/annotation-note";

import { profile } from "@/content/profile";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="grid grid-cols-[auto_minmax(0,1fr)] grid-rows-[minmax(0,1fr)_auto] overflow-y-clip"
    >
      <figure className="relative z-10 col-span-2 row-start-1 m-0 min-w-0 p-2 sm:col-span-1 sm:col-start-2 sm:p-4">
        <div className="aspect-[556/354] w-full sm:-translate-x-20">
          <SpotlightLogo />
        </div>

        <AnnotationNote
          aria-hidden="true"
          className="bottom-20 left-full hidden w-36 flex-col items-start pointer-fine:xl:flex motion-reduce:xl:hidden!"
        >
          <AnnotationArrow className="rotate-180" />

          <span className="ml-1 -rotate-6">
            follows your cursor
            <span className="block" />
            click for a sound
          </span>
        </AnnotationNote>

        <figcaption className="absolute right-4 bottom-3 font-mono text-[0.7rem] tracking-[0.05em] text-muted-foreground">
          Fig. 01
        </figcaption>
      </figure>

      <div className="relative col-start-1 row-start-2 flex flex-col overflow-visible sm:row-start-1 sm:row-span-2">
        <div className="screen-line-top mt-auto shrink-0 border-r border-border">
          <div className="relative z-30 p-0.5 m-[3px_2px] h-[7.5rem] w-[7.5rem] min-[384px]:h-32 min-[384px]:w-32 sm:h-40 sm:w-40">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/profile.webp"
                alt={profile.name}
                fill
                sizes="(min-width: 640px) 144px, (min-width: 384px) 112px, 104px"
                className="object-cover dark:hidden"
                fetchPriority="high"
              />

              <Image
                src="/profile-dark.webp"
                alt={profile.name}
                fill
                sizes="(min-width: 640px) 144px, (min-width: 384px) 112px, 104px"
                className="hidden object-cover dark:block"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 col-start-2 row-start-2 flex min-w-0 flex-col">
        <div className="mt-auto border-t border-border bg-background">
          <div className="flex items-center gap-2 pl-2 min-w-xs:pl-4">
            <h1
              id="hero-heading"
              className="translate-y-[-1px] text-[2rem] leading-none font-medium tracking-[-0.04em]"
            >
              {profile.name}
            </h1>
            <BadgeCheck
              className="size-5 select-none text-muted-foreground hidden sm:block"
              aria-hidden="true"
            />
          </div>

          <div className="flex h-[3.125rem] items-start overflow-hidden border-t border-border py-1 pl-2 min-w-xs:pl-4 font-mono text-[0.82rem] text-muted-foreground sm:h-7">
            <RotatingSentence sentences={profile.heroSentences} />
          </div>
        </div>
      </div>
    </section>
  );
}
