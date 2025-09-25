"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { CircleArrowRight } from "lucide-react";

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
    <section className="relative overflow-hidden px-6 py-24 md:px-10 h-[300vh]">
      <div
        ref={ringRef}
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(600px_circle_at_50%_50%,#000_10%,transparent_60%)]"
      />
      <motion.div
        className="mx-auto mb-6 w-fit rounded-full flex items-center justify-center gap-2 py-2 px-4 bg-background-100 border-1 border-[#ffffff25] text-[#a0a0a0] text-base font-medium"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
      >
        <span className="text-gray-300">Want to work toghether?</span>
        <CircleArrowRight size={20} />
      </motion.div>
      <div className="mx-auto max-w-4xl text-center">
        <motion.h1
          className="text-4xl font-bold tracking-tight md:text-6xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60 }}
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-[#ff6d92] to-[#45b2ff] bg-clip-text text-transparent">
            Alessandro
          </span>
          .
        </motion.h1>
        <motion.p
          className="mt-4 text-muted-foreground md:text-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 70 }}
        >
          I build fast, accessible web experiences with Next.js, Tailwind, and
          delightful motion.
        </motion.p>
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
