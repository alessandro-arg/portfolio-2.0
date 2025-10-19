import { ReactNode } from "react";

export type GradientStop = { color: string; at: string };

export type ProjectTheme = {
  angle?: number;
  stops: GradientStop[];
  primary?: string;
};

export type Technology = {
  name: string;
  icon?: ReactNode;
  description?: string;
  link?: string;
};

/** New: supports both legacy string points and rich points with description */
export type ProjectPoint =
  | string
  | {
      title: string;
      description?: string;
    };

export type Project = {
  title: string;
  smallDescription: string;
  description: string;
  src: string;
  href?: string;
  github?: string;
  liveLink?: string;
  technologies?: Technology[];
  year?: string;
  date?: string;
  theme?: ProjectTheme;
  points?: ProjectPoint[];
  slug?: string;
  calloutTitle?: string;
  calloutDescription?: string;
  useCases?: string[];
  whyBuilt?: string;
  learnings?: string;
};
