"use client";

import { useId, type PointerEvent } from "react";
import type { Transition } from "motion/react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

import { metalClickSound } from "@/lib/metal-click";
import { playSound } from "@/lib/sound-engine";

const VIEWBOX_WIDTH = 556;
const VIEWBOX_HEIGHT = 354;
const PRESS_OFFSET = 12;

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
};

const topFaces = [
  "M257.25 218.82 L242.35 241.34 L293.79 271.04 L308.33 248.31 Z",
  "M306.91 113.96 L300.88 114.57 L97.97 157.99 L149.41 187.69 L154.73 186.66 L275.34 160.86 Z",
  "M546 62.34 L427.52 88.15 L398.08 134.23 L435.32 127.47 L373.6 223.32 L278.89 169.05 L216.1 182.36 L350.19 259.78 L329.97 291.93 L381.76 321.83 Z",
  "M459.09 12.17 L453.77 12.37 L10 107.2 L61.44 136.89 L117.13 125.22 L143.02 139.76 L205.1 126.45 L180.98 111.29 L347 76.07 L292.37 162.9 L343.45 192.81 Z",
] as const;

function translatePathY(path: string, offset: number) {
  let coordinateIndex = 0;

  return path.replace(/-?\d*\.?\d+/g, (value) => {
    const number = Number(value);

    // Every second number is a Y coordinate because all our paths
    // consist only of M/L coordinate pairs.
    const result =
      coordinateIndex % 2 === 1
        ? Math.round((number + offset) * 100) / 100
        : number;

    coordinateIndex++;

    return String(result);
  });
}

const animatedTopFaces = topFaces.map((normal) => ({
  normal,
  pressed: translatePathY(normal, PRESS_OFFSET),
}));

// Visible extrusion walls. During a press, the top plane moves down while
// the bottom edge stays fixed, so the logo appears to physically compress.
const sideFaces = [
  {
    normal: "M97.97 157.99 L149.41 187.69 L149.41 207.69 L97.97 177.99 Z",
    pressed: "M97.97 169.99 L149.41 199.69 L149.41 207.69 L97.97 177.99 Z",
  },
  {
    normal: "M149.41 187.69 L275.34 160.86 L275.34 180.86 L149.41 207.69 Z",
    pressed: "M149.41 199.69 L275.34 172.86 L275.34 180.86 L149.41 207.69 Z",
  },
  {
    normal: "M275.34 160.86 L306.91 113.96 L306.91 133.96 L275.34 180.86 Z",
    pressed: "M275.34 172.86 L306.91 125.96 L306.91 133.96 L275.34 180.86 Z",
  },
  {
    normal: "M398.08 134.23 L435.32 127.47 L435.32 147.47 L398.08 154.23 Z",
    pressed: "M398.08 146.23 L435.32 139.47 L435.32 147.47 L398.08 154.23 Z",
  },
  {
    normal: "M216.1 182.36 L350.19 259.78 L350.19 279.78 L216.1 202.36 Z",
    pressed: "M216.1 194.36 L350.19 271.78 L350.19 279.78 L216.1 202.36 Z",
  },
  // nub walls moved here — now drawn AFTER the big diagonal wall in every pass
  {
    normal: "M242.35 241.34 L293.79 271.04 L293.79 291.04 L242.35 261.34 Z",
    pressed: "M242.35 253.34 L293.79 283.04 L293.79 291.04 L242.35 261.34 Z",
  },
  {
    normal: "M293.79 271.04 L308.33 248.31 L308.33 268.31 L293.79 291.04 Z",
    pressed: "M293.79 283.04 L308.33 260.31 L308.33 268.31 L293.79 291.04 Z",
  },
  {
    normal: "M329.97 291.93 L381.76 321.83 L381.76 341.83 L329.97 311.93 Z",
    pressed: "M329.97 303.93 L381.76 333.83 L381.76 341.83 L329.97 311.93 Z",
  },
  {
    normal: "M381.76 321.83 L546 62.34 L546 82.34 L381.76 341.83 Z",
    pressed: "M381.76 333.83 L546 74.34 L546 82.34 L381.76 341.83 Z",
  },
  {
    normal: "M10 107.2 L61.44 136.89 L61.44 156.89 L10 127.2 Z",
    pressed: "M10 119.2 L61.44 148.89 L61.44 156.89 L10 127.2 Z",
  },
  {
    normal: "M61.44 136.89 L117.13 125.22 L117.13 145.22 L61.44 156.89 Z",
    pressed: "M61.44 148.89 L117.13 137.22 L117.13 145.22 L61.44 156.89 Z",
  },
  {
    normal: "M117.13 125.22 L143.02 139.76 L143.02 159.76 L117.13 145.22 Z",
    pressed: "M117.13 137.22 L143.02 151.76 L143.02 159.76 L117.13 145.22 Z",
  },
  {
    normal: "M143.02 139.76 L205.1 126.45 L205.1 146.45 L143.02 159.76 Z",
    pressed: "M143.02 151.76 L205.1 138.45 L205.1 146.45 L143.02 159.76 Z",
  },
  {
    normal: "M180.98 111.29 L347 76.07 L347 96.07 L180.98 131.29 Z",
    pressed: "M180.98 123.29 L347 88.07 L347 96.07 L180.98 131.29 Z",
  },
  {
    normal: "M292.37 162.9 L343.45 192.81 L343.45 212.81 L292.37 182.9 Z",
    pressed: "M292.37 174.9 L343.45 204.81 L343.45 212.81 L292.37 182.9 Z",
  },
  {
    normal: "M343.45 192.81 L459.09 12.17 L459.09 32.17 L343.45 212.81 Z",
    pressed: "M343.45 204.81 L459.09 24.17 L459.09 32.17 L343.45 212.81 Z",
  },
] as const;

export function SpotlightLogo() {
  const shouldReduceMotion = useReducedMotion();

  const id = useId();
  const ids = {
    facePattern: `spotlight-logo-face-pattern-${id}`,
    radialGradient: `spotlight-logo-radial-gradient-${id}`,
  };

  const handleTap = () => {
    void playSound(metalClickSound.dataUri, {
      volume: 0.3,
    }).catch(() => {
      // Audio feedback is optional, so playback failures can be ignored.
    });
  };

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const cx = useSpring(useTransform(mouseX, [0, 1], [0, VIEWBOX_WIDTH]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  });

  const cy = useSpring(useTransform(mouseY, [0, 1], [0, VIEWBOX_HEIGHT]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  });

  const handlePointerMove = (event: PointerEvent<SVGSVGElement>) => {
    if (shouldReduceMotion || event.pointerType === "touch") {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    mouseX.set(Math.min(Math.max(x, 0), 1));
    mouseY.set(Math.min(Math.max(y, 0), 1));
  };

  const handlePointerLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.svg
      className="block h-auto w-full touch-manipulation overflow-visible z-40"
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      initial="normal"
      whileTap={shouldReduceMotion ? undefined : "pressed"}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onTap={handleTap}
    >
      <defs>
        <pattern
          id={ids.facePattern}
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2"
            stroke="color-mix(in oklab, var(--foreground) 15%, transparent)"
            strokeWidth="1"
          />
        </pattern>

        <motion.radialGradient
          id={ids.radialGradient}
          cx={cx}
          cy={cy}
          r="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--foreground)" stopOpacity="0.9" />

          <stop offset="1" stopColor="var(--foreground)" stopOpacity="0" />
        </motion.radialGradient>
      </defs>

      {/* Isometric construction guides derived from the logo geometry */}
      <g
        fill="none"
        stroke="var(--border)"
        strokeWidth="1"
        strokeDasharray="4 2"
        pointerEvents="none"
      >
        <path d="M-300 -54 L856 618" />
        <path d="M-300 -426 L1156 448" />
        <path d="M-300 468 L856 -198" />
      </g>

      {/* Extruded side faces — fill, outline, spotlight grouped per-face so array order = paint order */}
      {sideFaces.map((face, index) => (
        <g key={`side-face-${index}`} strokeLinejoin="round">
          <motion.path
            fill="var(--surface)"
            variants={{
              normal: { d: face.normal },
              pressed: { d: face.pressed },
            }}
            transition={transition}
          />

          <motion.path
            fill="none"
            stroke="color-mix(in oklab, var(--foreground) 20%, transparent)"
            strokeWidth="1"
            variants={{
              normal: { d: face.normal },
              pressed: { d: face.pressed },
            }}
            transition={transition}
          />

          <motion.path
            fill="none"
            stroke={`url(#${ids.radialGradient})`}
            strokeWidth="1"
            variants={{
              normal: { d: face.normal },
              pressed: { d: face.pressed },
            }}
            transition={transition}
          />
        </g>
      ))}

      {/* Top surface */}
      {animatedTopFaces.map((face, index) => (
        <g key={`top-face-${index}`} strokeLinejoin="round">
          {/* Solid surface */}
          <motion.path
            fill="var(--surface)"
            variants={{
              normal: { d: face.normal },
              pressed: { d: face.pressed },
            }}
            transition={transition}
          />

          {/* Hatch */}
          <motion.path
            fill={`url(#${ids.facePattern})`}
            variants={{
              normal: { d: face.normal },
              pressed: { d: face.pressed },
            }}
            transition={transition}
          />

          {/* Base outline */}
          <motion.path
            fill="none"
            stroke="color-mix(in oklab, var(--foreground) 20%, transparent)"
            strokeWidth="1"
            variants={{
              normal: { d: face.normal },
              pressed: { d: face.pressed },
            }}
            transition={transition}
          />

          {/* Spotlight outline */}
          <motion.path
            fill="none"
            stroke={`url(#${ids.radialGradient})`}
            strokeWidth="1"
            variants={{
              normal: { d: face.normal },
              pressed: { d: face.pressed },
            }}
            transition={transition}
          />
        </g>
      ))}
    </motion.svg>
  );
}
