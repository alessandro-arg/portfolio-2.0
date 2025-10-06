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
};

export type Project = {
  title: string;
  smallDescription: string;
  description: string;
  src: string;
  href?: string;
  github?: string;
  technologies?: Technology[];
  year?: string;
  theme?: ProjectTheme;
  points?: string[];
  slug?: string;
};
