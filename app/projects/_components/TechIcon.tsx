"use client";

import { type FC } from "react";
import type { TechKey } from "../types";
import {
  siAngular,
  siTypescript,
  siTailwindcss,
  siFirebase,
  siJavascript,
  siSass,
  siNextdotjs,
  siReact,
  siAppwrite,
  siReactquery,
  siFramer,
  siGsap,
  siVercel,
  siShadcnui,
} from "simple-icons/icons";

// Define each icon and optionally override its default color
const ICONS: Record<
  TechKey,
  { title: string; hex: string; path: string; overrideColor?: string }
> = {
  angular: {
    title: siAngular.title,
    hex: siAngular.hex,
    path: siAngular.path,
    // Angular red is very saturated — use currentColor so it adapts to theme
    overrideColor: "currentColor",
  },
  ts: {
    title: siTypescript.title,
    hex: siTypescript.hex,
    path: siTypescript.path,
  },
  tailwind: {
    title: siTailwindcss.title,
    hex: siTailwindcss.hex,
    path: siTailwindcss.path,
  },
  firebase: {
    title: siFirebase.title,
    hex: siFirebase.hex,
    path: siFirebase.path,
  },
  js: {
    title: siJavascript.title,
    hex: siJavascript.hex,
    path: siJavascript.path,
  },
  sass: {
    title: siSass.title,
    hex: siSass.hex,
    path: siSass.path,
  },
  next: {
    title: siNextdotjs.title,
    hex: siNextdotjs.hex,
    path: siNextdotjs.path,
    overrideColor: "currentColor",
  },
  react: {
    title: siReact.title,
    hex: siReact.hex,
    path: siReact.path,
  },
  appwrite: {
    title: siAppwrite.title,
    hex: siAppwrite.hex,
    path: siAppwrite.path,
  },
  "react-query": {
    title: siReactquery.title,
    hex: siReactquery.hex,
    path: siReactquery.path,
  },
  framer: {
    title: siFramer.title,
    hex: siFramer.hex,
    path: siFramer.path,
  },
  gsap: {
    title: siGsap.title,
    hex: siGsap.hex,
    path: siGsap.path,
  },
  vercel: {
    title: siVercel.title,
    hex: siVercel.hex,
    path: siVercel.path,
  },
  "shadcn-ui": {
    title: siShadcnui.title,
    hex: siShadcnui.hex,
    path: siShadcnui.path,
  },
};

export const TECH_LABELS: Record<TechKey, string> = Object.fromEntries(
  Object.entries(ICONS).map(([key, value]) => [key, value.title])
) as Record<TechKey, string>;

export const TechIcon: FC<{
  tech: TechKey;
  size?: number;
  color?: string; // optional manual override
  className?: string;
}> = ({ tech, size = 16, color, className }) => {
  const icon = ICONS[tech];
  // Priority: explicit prop → overrideColor → official brand color
  const fill = color ?? icon.overrideColor ?? `#${icon.hex}`;

  return (
    <svg
      role="img"
      aria-label={icon.title}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden="false"
    >
      <path d={icon.path} fill={fill} />
    </svg>
  );
};
