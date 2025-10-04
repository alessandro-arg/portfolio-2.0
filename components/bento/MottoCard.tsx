"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

type MottoCardProps = {
  lines?: (string | number)[];
  className?: string;
  heading?: string | null;
};

export default function MottoCard({
  heading = null,
  lines = [
    "Build fast. Stay curious.",
    1800,
    "Design beautifully. Code elegantly.",
    1800,
    "Always learning. Always improving.",
    1800,
  ],
  className = "",
}: MottoCardProps) {
  return (
    <div className="absolute inset-0 group">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={[
          "relative flex h-full w-full items-center justify-center overflow-hidden",
          "rounded-2xl border border-white/10",
          "bg-gradient-to-br from-zinc-900 via-zinc-900/60 to-black",
          "backdrop-blur-sm",
          className,
        ].join(" ")}
        role="region"
        aria-label="Motto card"
      >
        {/* animated gradient aura */}
        <div
          className="pointer-events-none absolute -inset-40 rounded-[40px] opacity-30 blur-3xl"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, #60a5fa 0deg, #22d3ee 120deg, #34d399 240deg, #a78bfa 360deg)",
            animation: "spin 16s linear infinite",
          }}
          aria-hidden="true"
        />
        <style jsx>{`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>

        <div className="relative z-10 flex max-w-[90%] flex-col items-center text-center">
          {heading && (
            <div className="mb-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
              {heading}
            </div>
          )}
          <div className="text-white text-xl sm:text-2xl font-medium leading-snug">
            <TypeAnimation
              sequence={lines}
              speed={50}
              repeat={Infinity}
              cursor
              style={{ display: "inline-block", whiteSpace: "pre-wrap" }}
            />
          </div>
          <div className="mt-3 h-px w-24 bg-white/10" />
        </div>

        {/* glossy highlight */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent"
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}
