export type GradientStop = { color: string; at: string };

export type ProjectTheme = {
  angle?: number;
  stops: GradientStop[];
  primary?: string;
};

export type Technology = {
  name: string;
  description?: string;
  link?: string;
};

export type TechKey =
  | "angular"
  | "ts"
  | "tailwind"
  | "firebase"
  | "js"
  | "sass";

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
  technologies?: TechKey[];
  techDesc?: Technology[];
  year?: string;
  date?: string;
  theme?: ProjectTheme;
  points?: ProjectPoint[];
  slug?: string;
  calloutTitle?: string;
  calloutDescription?: string;
  useCases?: string[];
  whyBuilt?: string;
  learnings?: string[];
};
