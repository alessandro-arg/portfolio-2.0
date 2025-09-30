"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

import StarIcon from "@/components/icons/star.svg";
import SparkleIcon from "@/components/icons/sparkle.svg";
import { ArrowRight, Copy, CheckCheck } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { HeroOrbit } from "../ui/hero-orbit";
import { toast } from "sonner";

const EMAIL = "contact@alessandro-argenziano.com";

export default function Hero() {
  const ringRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

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
          onClick: () => {
            window.open(mailtoUrl, "_blank", "noopener,noreferrer");
          },
        },
      });
    } catch {
      toast.warning("Something went wrong.");
    }
  };

  useEffect(() => {
    if (!ringRef.current) return;
    gsap.fromTo(
      ringRef.current,
      { scale: 0.9, opacity: 0.6 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="relative h-[800px] lg:h-[900px] w-full overflow-x-clip z-0 pb-30 sm:pb-20">
      {/*Background rings and orbs*/}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="size-[350px] sm:size-[450px] hero-ring"></div>
        <div className="size-[550px] sm:size-[750px] hero-ring"></div>
        <div className="size-[750px] sm:size-[1050px] hero-ring"></div>
        <div className="size-[950px] sm:size-[1350px] hero-ring"></div>
        <HeroOrbit size={430} rotation={-25}>
          <SparkleIcon className="size-8 text-[#16b1ff50] dark:text-[#16b1ff20]" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={80}>
          <SparkleIcon className="size-5 text-[#16b1ff50] dark:text-[#16b1ff40]" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-60}>
          <div className="size-2 rounded-full bg-[#16b1ff50] dark:bg-[#16b1ff20]"></div>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={180}>
          <SparkleIcon className="size-10 text-[#16b1ff50] dark:text-[#16b1ff30]" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="80s"
          spinDuration="7s"
        >
          <StarIcon className="size-12 text-[#16b1ff50] dark:text-[#16b1ff90]" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="100s"
          spinDuration="10s"
        >
          <StarIcon className="size-8 text-[#16b1ff50] dark:text-[#16b1ff80]" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-2 rounded-full bg-[#16b1ff50] dark:bg-[#16b1ff20]"></div>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <SparkleIcon className="size-14 text-[#16b1ff50] dark:text-[#16b1ff20]" />
        </HeroOrbit>
        <HeroOrbit size={770} rotation={90}>
          <div className="size-3 rounded-full bg-[#16b1ff50] dark:bg-[#16b1ff20]"></div>
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-82}
          shouldOrbit
          orbitDuration="120s"
          spinDuration="14s"
        >
          <StarIcon className="size-20 text-[#16b1ff50] dark:text-[#16b1ff90]" />
        </HeroOrbit>
      </div>

      <div
        ref={ringRef}
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(600px_circle_at_50%_50%,#000_10%,transparent_60%)]"
      />

      {/*Hero*/}
      <div className="relative z-20 mx-auto mt-20 sm:mt-40 mb-2 pt-20 flex max-w-full flex-col items-center justify-center px-3 md:mt-36 md:max-w-4xl lg:max-w-5xl">
        {/*Small CTA Button*/}
        <Link
          href="https://www.chess2.alessandro-argenziano.com"
          target="__blank"
        >
          <motion.div
            className="mb-2 sm:mb-0 flex cursor-pointer items-center rounded-full border border-black/5 bg-black/10 text-sm backdrop-blur-xs lg:text-base dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
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
        </Link>

        {/* Text*/}
        <motion.h2
          className="font-instrument tracking-normal my-2 w-full py-px text-center text-3xl sm:text-4xl leading-snug! text-balance text-zinc-700 opacity-90 md:text-5xl lg:text-7xl dark:text-zinc-100"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60 }}
        >
          I design and develop apps <br />
          that are{" "}
          <span className="tracking-normal bg-linear-to-b from-zinc-500 via-zinc-600 to-zinc-900 bg-clip-text font-normal text-transparent italic dark:from-zinc-600 dark:via-zinc-200 dark:to-white">
            fast, responsive, and scalable
          </span>
        </motion.h2>
        <motion.h1
          className="grad-white font-semibold tracking-normal relative z-20 mt-4 mb-7 flex flex-col gap-2 items-center justify-center text-center text-xl sm:flex-row md:text-xl lg:mt-7 lg:text-2xl"
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
          className="z-100 mt-4 flex flex-col items-center sm:min-w-[500px] justify-center gap-6 sm:flex-row md:gap-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60 }}
        >
          {/* Left: "Let's Connect" — outline pill that fills to white on hover */}
          <a
            href="mailto:contact@alessandro-argenziano.com"
            target="__blank"
            className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-black/30 bg-black/20 py-[3px] pr-[3px] pl-2 text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3 dark:border-white/10 dark:bg-white/10"
          >
            {/* The animated fill */}
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-white scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
            {/* Content stays above the fill */}
            <span className="z-10 px-3 text-black transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
              Let’s Connect
            </span>
            <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-black p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5 dark:bg-white">
              <ArrowRight
                className="w-5 h-5 text-white transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0 dark:text-black"
                aria-hidden="true"
              />{" "}
              <ArrowRight
                className="absolute -translate-x-5 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:text-black"
                aria-hidden="true"
              />
            </span>
          </a>

          {/* Right: Copy-to-clipboard button */}
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-2 py-2 text-base font-normal text-black dark:text-white/75 outline-hidden transition-all duration-300 cursor-pointer hover:text-black/60 dark:hover:text-white/90"
            aria-live="polite"
          >
            {copied ? (
              <CheckCheck className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Copy className="h-5 w-5" aria-hidden="true" />
            )}
            {copied ? "Copied to clipboard" : EMAIL}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
