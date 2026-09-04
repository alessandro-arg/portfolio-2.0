"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type RotatingSentenceProps = {
  sentences: readonly string[];
  interval?: number;
};

export function RotatingSentence({
  sentences,
  interval = 4000,
}: RotatingSentenceProps) {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || sentences.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % sentences.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, sentences.length, shouldReduceMotion]);

  const currentSentence = sentences[index] ?? sentences[0] ?? "";
  const accessibleSentence = sentences[0] ?? "";

  return (
    <>
      <motion.span
        key={index}
        aria-hidden="true"
        className="line-clamp-2"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 3 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {currentSentence}
      </motion.span>

      <span className="sr-only">{accessibleSentence}</span>
    </>
  );
}
