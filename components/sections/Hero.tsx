"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

import { ArrowRight } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

export default function Hero() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ringRef.current) return;
    gsap.fromTo(
      ringRef.current,
      { scale: 0.9, opacity: 0.6 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="relative h-[800px] lg:h-[900px] w-full overflow-hidden z-0 pb-30 sm:pb-20">
      <div className="absolute inset-0 size-[520px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-blue-600/5 shadow-[0_0_80px_inset] shadow-blue-600/5"></div>
      <div className="absolute inset-0 size-[820px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-blue-600/5 shadow-[0_0_80px_inset] shadow-blue-600/5"></div>
      <div className="absolute inset-0 size-[1120px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-blue-600/5 shadow-[0_0_80px_inset] shadow-blue-600/5"></div>
      <div
        ref={ringRef}
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(600px_circle_at_50%_50%,#000_10%,transparent_60%)]"
      />

      {/*Hero*/}
      <div className="relative z-20 mx-auto mt-20 sm:mt-40 mb-2 pt-20 flex max-w-full flex-col items-center justify-center px-3 md:mt-36 md:max-w-4xl lg:max-w-5xl">
        {/*Small CTA Button*/}
        <motion.div
          className="flex cursor-pointer items-center rounded-full border border-black/5 bg-black/10 text-sm backdrop-blur-xs lg:text-base dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
        >
          <span className="mx-1 rounded-full bg-blue-800 px-1.5 text-xs leading-relaxed text-white">
            New
          </span>
          <AnimatedShinyText className="px-1 py-0.5 flex items-center gap-1">
            Chess² is now live! Try it out
            <ArrowRight
              size={24}
              strokeWidth={3}
              absoluteStrokeWidth
              className="mr-1 mt-0.5 size-3.5 text-black transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 hover:duration-300 dark:text-neutral-100/70"
            />
          </AnimatedShinyText>
        </motion.div>

        {/* Text*/}
        <motion.h2
          className="font-instrument tracking-normal my-2 w-full py-px text-center text-3xl sm:text-4xl leading-snug! text-balance text-zinc-700 opacity-90 md:text-5xl lg:text-6xl dark:text-zinc-100"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60 }}
        >
          I design and develop apps <br />
          that are{" "}
          <span className="tracking-normal ml-1 bg-linear-to-b from-zinc-500 via-zinc-600 to-zinc-900 bg-clip-text font-normal text-transparent italic dark:from-zinc-600 dark:via-zinc-200 dark:to-white">
            fast, responsive, and scalable
          </span>
        </motion.h2>
        <motion.h1
          className="font-normal tracking-normal relative z-20 mt-4 mb-7 flex flex-col items-center justify-center text-center text-xl sm:flex-row md:text-xl lg:mt-7 lg:text-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60 }}
        >
          <span className="grad-white flex items-center justify-center">
            Hello, I’m Alessandro
          </span>
          <div className="mx-2 w-16 cursor-pointer overflow-hidden rounded-3xl md:w-20 h-12 lg:mx-3">
            <Image
              src="/images/profile-img.jpg"
              alt="Alessandro"
              loading="lazy"
              draggable="false"
              width={854}
              height={425}
              className="transition-transform duration-300 hover:rotate-6 hover:scale-110"
            />
          </div>
          <span className="grad-white leading-relaxed">
            a Fullstack Developer
          </span>
        </motion.h1>
        <motion.div
          className="mt-8 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Button asChild size="lg">
            <a href="/projects">View Projects</a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href="/contact">Contact Me</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
