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
} from "simple-icons/icons";

const ICONS: Record<TechKey, { title: string; hex: string; path: string }> = {
  angular: { title: siAngular.title, hex: siAngular.hex, path: siAngular.path },
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
  sass: { title: siSass.title, hex: siSass.hex, path: siSass.path },
};

export const TECH_LABELS: Record<TechKey, string> = {
  angular: ICONS.angular.title,
  ts: ICONS.ts.title,
  tailwind: ICONS.tailwind.title,
  firebase: ICONS.firebase.title,
  js: ICONS.js.title,
  sass: ICONS.sass.title,
};

export const TechIcon: FC<{
  tech: TechKey;
  size?: number;
  color?: string; // pass "currentColor" if you want it to inherit
  className?: string;
}> = ({ tech, size = 16, color, className }) => {
  const icon = ICONS[tech];
  const fill = color ?? `#${icon.hex}`;
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
