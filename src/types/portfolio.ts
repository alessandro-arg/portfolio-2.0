export type Profile = {
  name: string;
  role: string;
  location: string;
  heroSentences: readonly string[];
  about: readonly string[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
};

export type Project = {
  slug?: string;
  title: string;
  year: number;
  summary: string;
  technologies: readonly string[];
  repositoryUrl?: string;
  liveUrl?: string;
  featured: boolean;
};

export type TechnologyCategory =
  | "language"
  | "frontend"
  | "backend"
  | "database"
  | "workflow"
  | "ai"
  | "tools";

export type Technology = {
  id: string;
  name: string;
  category: TechnologyCategory;
  website: string;
};
