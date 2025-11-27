"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Magnet from "@/components/ui/magnet";
import { cn } from "@/lib/utils";
import { useContactModal } from "./ContactModalProvider";
import { Logo } from "@/components/ui/logo";

type ContactSectionProps = {
  /** If true, removes the default top margin */
  noTopMargin?: boolean;
  /** Override the top margin utility (e.g. 'mt-0', 'mt-16', 'mt-[120px]') */
  mtClassName?: string;
  /** Extra classes from the parent */
  className?: string;
};

export default function ContactSection({
  noTopMargin = false,
  mtClassName,
  className,
}: ContactSectionProps) {
  const { openModal } = useContactModal();

  return (
    <section
      id="contact"
      className={cn(
        "relative z-0 flex w-full justify-center overflow-x-hidden bg-cover bg-center px-4 py-20",
        noTopMargin ? null : "mt-40",
        mtClassName,
        className
      )}
    >
      <div className="absolute inset-0 bg-[url('/images/cta-bg.webp')] bg-cover bg-center opacity-40 -z-10"></div>
      <div className="pointer-events-none absolute inset-0">
        {/* Top shadow */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background/50 via-background/25 to-background/10 dark:from-background/70 dark:via-background/40 dark:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/10 to-background"></div>
        {/* Bottom shadow */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background/50 via-background/25 to-background/10 dark:from-background/70 dark:via-background/40 dark:to-transparent"></div>
      </div>
      <div className="relative z-10 mx-auto flex w-full container flex-col items-center justify-center gap-y-2 py-10 text-center ">
        <Logo className="w-20 h-20 select-none" />
        <span className="mt-4 text-2xl font-light tracking-wide text-black sm:text-4xl lg:text-5xl dark:text-white">
          <motion.h3
            className="text-nowrap text-2xl font-light tracking-wide sm:text-4xl lg:text-5xl"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
              mass: 0.6,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            FROM CONCEPT TO <span className="font-extrabold">CREATION</span>
          </motion.h3>
          <motion.h3
            className="text-nowrap text-2xl font-light tracking-wide sm:text-4xl lg:text-5xl"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
              mass: 0.6,
              delay: 0.05,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            LET&apos;s MAKE IT <span className="font-extrabold">HAPPEN!</span>
          </motion.h3>
        </span>
        <Magnet>
          <button
            onClick={openModal}
            className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-black/30 bg-black/20 py-[3px] pr-[3px] pl-2 text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3 dark:border-white/10 dark:bg-white/10 my-10 group-hover:scale-125"
          >
            {/* The animated fill */}
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-neutral-300 dark:bg-white scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
            {/* Content stays above the fill */}
            <span className="z-10 px-3 text-black transition-colors duration-300 dark:text-white dark:group-hover:text-black">
              Let's Connect
            </span>
            <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-black p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5 dark:bg-white">
              <ArrowRight
                className="w-5 h-5 text-white transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0 dark:text-black"
                aria-hidden="true"
              />{" "}
              <ArrowRight
                className="absolute -translate-x-5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-black"
                aria-hidden="true"
              />
            </span>
          </button>
        </Magnet>
        <p className="text-base font-semibold lg:text-2xl">
          I&apos;m available for full-time roles.
        </p>
        <p className="my-2 text-sm font-extralight tracking-wide text-balance opacity-75 lg:text-xl">
          I create dynamic web applications, and <br />
          deliver smooth user experiences.
        </p>
      </div>
    </section>
  );
}
