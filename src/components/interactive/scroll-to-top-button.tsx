"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { useMotionValueEvent, useScroll } from "motion/react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SHOW_AFTER = 400;

type ScrollDirection = "up" | "down";

export function ScrollToTopButton() {
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(false);
  const [scrollDirection, setScrollDirection] =
    useState<ScrollDirection>("down");

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= SHOW_AFTER);

    const previousValue = scrollY.getPrevious() ?? 0;
    const difference = latestValue - previousValue;

    setScrollDirection(difference > 0 ? "down" : "up");
  });

  function scrollToTop() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <Button
      type="button"
      variant="secondary"
      size="icon"
      data-visible={visible}
      data-scroll-direction={scrollDirection}
      aria-label="Scroll to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={scrollToTop}
      className={cn(
        "[--bottom:0.5rem] sm:[--bottom:1rem] lg:[--bottom:2rem]",
        "fixed right-4 bottom-[calc(var(--bottom)+env(safe-area-inset-bottom,0px))] z-50 lg:right-8",
        "rounded-xl border border-border",
        "transition-[background-color,opacity] duration-300",
        "data-[scroll-direction=down]:opacity-50",
        "data-[scroll-direction=up]:opacity-100",
        "data-[visible=false]:pointer-events-none data-[visible=false]:opacity-0",
        "data-[scroll-direction=down]:hover:opacity-100",
        "focus-visible:opacity-100",
        "motion-reduce:transition-none",
      )}
    >
      <ArrowUp className="size-4" strokeWidth={1.75} aria-hidden="true" />
    </Button>
  );
}
