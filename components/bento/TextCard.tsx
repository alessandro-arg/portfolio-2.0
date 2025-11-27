"use client";

import { motion } from "framer-motion";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export default function TextCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute inset-0 group items-center justify-center overflow-hidden"
      aria-label="Text reveal card"
    >
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-3xl lg:text-4xl font-bold w-full bg-linear-to-b from-black to-[#5db6e3] dark:to-[#83d6ff90] bg-clip-text px-4 tracking-normal text-transparent select-none dark:from-white">
            Every pixel tells a story. Every line of code shapes the experience.
            Together, they define how ideas become beautiful art.
          </p>
        }
        className="h-full text-white dark:text-black"
      >
        Discover the power of{" "}
        <span className="text-[#16b1ff]">creative engineering</span> <br /> and
        <span className="text-[#16b1ff]"> fluid animations</span> powered by my{" "}
        <br /> creative workflow.
      </MaskContainer>
    </motion.div>
  );
}
