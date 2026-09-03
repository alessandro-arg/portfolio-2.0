import type { Project } from "@/types/portfolio";

export const projects = [
  {
    slug: "homelab-platform",
    title: "Homelab Platform",
    year: 2026,
    summary:
      "A self-hosted homelab platform running on a Raspberry Pi, combining an internship tracker with containerized services, monitoring, CI/CD, network security, and private Tailscale access.",
    technologies: [
      "python",
      "fastapi",
      "postgresql",
      "docker",
      "prometheus",
      "grafana",
      "tailscale",
    ],
    mockup: {
      light: "/projects/homelab-platform/mockup-light.webp",
      dark: "/projects/homelab-platform/mockup-dark.webp",
    },
    repositoryUrl: "https://github.com/alessandro-arg/homelab-platform",
    featured: true,
  },
  {
    slug: "coordina",
    title: "Coordina",
    year: 2025,
    summary:
      "Modern task and project management app with Kanban boards, calendar views, analytics, and workspace collaboration.",
    technologies: [
      "nextjs",
      "react",
      "typescript",
      "mongodb",
      "authjs",
      "hono",
      "tailwindcss",
      "shadcn-ui",
    ],
    logo: "/projects/coordina-logo.svg",
    mockup: {
      light: "/projects/coordina/mockup-light.webp",
      dark: "/projects/coordina/mockup-dark.webp",
    },
    repositoryUrl: "https://github.com/alessandro-arg/coordina",
    liveUrl: "https://coordina.alessandro-argenziano.com/sign-in",
    featured: true,
  },
  {
    title: "Portfolio",
    year: 2026,
    summary:
      "A well-structured and modern developer portfolio showcasing my work as a Software Developer.",
    technologies: [
      "nextjs",
      "react",
      "typescript",
      "tailwindcss",
      "motion",
      "shadcn-ui",
      "radixui",
    ],
    logo: "/projects/portfolio-logo.svg",
    mockup: {
      light: "/projects/portfolio/mockup.webp",
      dark: "/projects/portfolio/mockup.webp",
    },
    repositoryUrl: "https://github.com/alessandro-arg/portfolio",
    featured: true,
  },
] satisfies readonly Project[];
