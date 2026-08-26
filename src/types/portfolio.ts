export type Profile = {
  name: string;
  role: string;
  location: string;
  timeZone: string;
  heroSentences: readonly string[];
  about: readonly string[];
  contact: {
    email: string;
    phone: string;
    website: string;
    github: string;
    githubUsername: string;
    linkedin: string;
  };
};

export type Project = {
  slug?: string;
  title: string;
  year: number;
  summary: string;
  technologies: readonly string[];
  logo?: string;
  mockup?: {
    light: string;
    dark: string;
  };
  repositoryUrl?: string;
  liveUrl?: string;
  featured: boolean;
};

export type ExperienceLocationType = "remote" | "hybrid" | "on-site";

export type ExperiencePosition = {
  id: string;
  title: string;
  type?: string;
  startDate: string;
  endDate?: string;
  highlights?: readonly string[];
  technologies?: readonly string[];
  skills?: readonly string[];
};

export type ExperienceOrganization = {
  id: string;
  name: string;
  website?: string;
  logo?: string;
  logoDark?: string;
  location: string;
  locationType?: ExperienceLocationType;
  positions: readonly ExperiencePosition[];
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
