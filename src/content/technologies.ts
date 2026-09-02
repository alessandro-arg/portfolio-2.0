import type { Technology, TechnologyCategory } from "@/types/portfolio";

export const stackTechnologies = {
  typescript: {
    id: "typescript",
    name: "TypeScript",
    category: "language",
    website: "https://www.typescriptlang.org/",
  },
  javascript: {
    id: "javascript",
    name: "JavaScript",
    category: "language",
    website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  python: {
    id: "python",
    name: "Python",
    category: "language",
    website: "https://www.python.org/",
  },

  react: {
    id: "react",
    name: "React",
    category: "frontend",
    website: "https://react.dev/",
  },
  nextjs: {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    website: "https://nextjs.org/",
  },
  angular: {
    id: "angular",
    name: "Angular",
    category: "frontend",
    website: "https://angular.dev/",
  },
  tailwindcss: {
    id: "tailwindcss",
    name: "Tailwind CSS",
    category: "frontend",
    website: "https://tailwindcss.com/",
  },
  "shadcn-ui": {
    id: "shadcn-ui",
    name: "shadcn/ui",
    category: "frontend",
    website: "https://ui.shadcn.com/",
  },

  nodejs: {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    website: "https://nodejs.org/",
  },

  postgresql: {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    website: "https://www.postgresql.org/",
  },
  mysql: {
    id: "mysql",
    name: "MySQL",
    category: "database",
    website: "https://www.mysql.com/",
  },
  mongodb: {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    website: "https://www.mongodb.com/",
  },

  git: {
    id: "git",
    name: "Git",
    category: "workflow",
    website: "https://git-scm.com/",
  },
  npm: {
    id: "npm",
    name: "npm",
    category: "workflow",
    website: "https://www.npmjs.com/",
  },
  docker: {
    id: "docker",
    name: "Docker",
    category: "workflow",
    website: "https://www.docker.com/",
  },
  vercel: {
    id: "vercel",
    name: "Vercel",
    category: "workflow",
    website: "https://vercel.com/",
  },

  claude: {
    id: "claude",
    name: "Claude",
    category: "ai",
    website: "https://claude.ai/",
  },
  chatgpt: {
    id: "chatgpt",
    name: "ChatGPT",
    category: "ai",
    website: "https://chatgpt.com/",
  },
  coderabbit: {
    id: "coderabbit",
    name: "CodeRabbit",
    category: "ai",
    website: "https://www.coderabbit.ai/",
  },

  linux: {
    id: "linux",
    name: "Linux",
    category: "tools",
    website: "https://www.kernel.org/",
  },
  neovim: {
    id: "neovim",
    name: "Neovim",
    category: "tools",
    website: "https://neovim.io/",
  },
  vscode: {
    id: "vscode",
    name: "VS Code",
    category: "tools",
    website: "https://code.visualstudio.com/",
  },
} satisfies Record<string, Technology>;

export const projectTechnologies = {
  fastapi: {
    id: "fastapi",
    name: "FastAPI",
    category: "backend",
    website: "https://fastapi.tiangolo.com/",
  },
  prometheus: {
    id: "prometheus",
    name: "Prometheus",
    category: "tools",
    website: "https://prometheus.io/",
  },
  grafana: {
    id: "grafana",
    name: "Grafana",
    category: "tools",
    website: "https://grafana.com/oss/grafana/",
  },
  tailscale: {
    id: "tailscale",
    name: "Tailscale",
    category: "tools",
    website: "https://tailscale.com/",
  },
  hono: {
    id: "hono",
    name: "Hono",
    category: "backend",
    website: "https://hono.dev/",
  },
  nextauth: {
    id: "nextauth",
    name: "NextAuth.js",
    category: "backend",
    website: "https://authjs.dev/",
  },
  motion: {
    id: "motion",
    name: "Motion",
    category: "frontend",
    website: "https://motion.dev/",
  },
  radixui: {
    id: "radixui",
    name: "Radix UI",
    category: "frontend",
    website: "https://www.radix-ui.com/",
  },
} satisfies Record<string, Technology>;

export const experienceTechnologies = {
  java: {
    id: "java",
    name: "Java",
    category: "language",
    website: "https://www.java.com/",
  },
  firebase: {
    id: "firebase",
    name: "Firebase",
    category: "database",
    website: "https://firebase.google.com/",
  },
} satisfies Record<string, Technology>;

export const technologies = {
  ...stackTechnologies,
  ...projectTechnologies,
  ...experienceTechnologies,
};

export const stackGroups = [
  {
    id: "language",
    label: "Language",
    categories: ["language"],
  },
  {
    id: "frontend",
    label: "Frontend",
    categories: ["frontend"],
  },
  {
    id: "backend-and-database",
    label: "Backend & Database",
    categories: ["backend", "database"],
  },
  {
    id: "workflow-and-ai",
    label: "Workflow & AI",
    categories: ["ai", "workflow"],
  },
  {
    id: "tools",
    label: "Tools",
    categories: ["tools"],
  },
] satisfies readonly {
  id: string;
  label: string;
  categories: readonly TechnologyCategory[];
}[];
