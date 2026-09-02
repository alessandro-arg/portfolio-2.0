export type Profile = {
  name: string;
  role: string;
  location: string;
  timeZone: string;
  heroSentences: readonly string[];
  about: readonly string[];
  contact: {
    heading: string;
    description: string;
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

export type ProjectOverview = {
  projectSlug: string;
  contextTitle: string;
  context: readonly string[];
  architecture: readonly string[];
  decisions: readonly {
    title: string;
    description: string;
  }[];
  outcome: readonly string[];
  lessons: readonly string[];
  resources: readonly {
    label: string;
    href: string;
  }[];
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

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  issuedOn: string;
  credentialUrl: string;
  credentialId?: string;
  logo?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};
