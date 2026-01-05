import type { Project } from "../types";

export const vibe: Project = {
  title: "Vibe",
  smallDescription:
    "AI website builder that generates Next.js apps from a simple prompt and save them in your personal space.",
  description:
    "Vibe is an AI website builder that creates modern Next.js apps. Users describe the site they want, then Vibe generates pages/components, refines them through guided iterations, and keeps everything reproducible via background workflows. A project preview sandbox runs the generated code safely, while a type-safe API layer (tRPC) and Prisma-backed database persist projects, revisions, and publishing metadata.",
  src: "/images/vibe_mockup.webp",
  href: "/projects/vibe",
  slug: "vibe",
  github: "https://github.com/alessandro-arg/vibe",
  liveLink: "https://vibe.alessandro-argenziano.com",
  technologies: [
    "next",
    "react",
    "ts",
    "tailwind",
    "shadcn-ui",
    "trpc",
    "prisma",
    "clerk",
    "react-query",
    "code-rabbit",
  ],

  techDesc: [
    {
      name: "Next.js",
      description:
        "- App Router architecture for a structured product shell (builder, preview, project routing), plus server components/actions where they make the UX feel instant.",
      link: "https://nextjs.org/",
    },
    {
      name: "React",
      description:
        "- Component-driven UI for the builder workspace, editing flows, and interactive preview panels.",
      link: "https://react.dev/",
    },
    {
      name: "TypeScript",
      description:
        "- End-to-end types for builder entities (projects, pages, revisions) and a safer, more maintainable codebase as the feature set grows.",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Tailwind CSS",
      description:
        "- Utility-first styling for a crisp, responsive dashboard UI with consistent spacing, typography, and theming.",
      link: "https://tailwindcss.com/",
    },
    {
      name: "shadcn/ui",
      description:
        "- Prebuilt accessible UI primitives (dialogs, buttons, dropdowns, tables) to keep the interface polished without heavy custom components.",
      link: "https://ui.shadcn.com/",
    },
    {
      name: "tRPC",
      description:
        "- Type-safe API layer connecting the Next.js app to server logic without codegen—ideal for complex builder flows and strongly typed mutations.",
      link: "https://trpc.io/",
    },
    {
      name: "Prisma",
      description:
        "- ORM layer for persisting projects, revisions, and publishing metadata with predictable migrations and a clean data model.",
      link: "https://www.prisma.io/",
    },
    {
      name: "Inngest",
      description:
        "- Background workflows for AI/agent jobs (generation, iteration steps, long-running tasks) with retries and observable execution.",
      link: "https://www.inngest.com/",
    },
    {
      name: "Clerk",
      description:
        "- Authentication and user management to keep projects scoped per account with a smooth sign-in experience.",
      link: "https://clerk.com/",
    },
    {
      name: "TanStack Query",
      description:
        "- Client caching and async state management for a snappy builder UX (optimistic updates, refetching, and stable loading states).",
      link: "https://tanstack.com/query/latest",
    },
    {
      name: "CodeRabbit",
      description:
        "- AI-powered code review assistant that analyzes pull requests, suggests improvements, flags potential bugs, and helps maintain consistent code quality across the project.",
      link: "https://coderabbit.ai/",
    },
  ],

  year: "2026",
  date: "2026-01-05",

  points: [
    {
      title: "Simple prompt to website generation",
      description:
        "Generate a multi-section website from a short prompt, then iterate on copy, layout, and components with fast feedback loops.",
    },
    {
      title: "E2B Preview Sandbox",
      description:
        "Run generated code in an isolated preview environment so users can see changes without risking the main app runtime.",
    },
    {
      title: "Revisions & Safe Iteration",
      description:
        "Treat generations as revisions—making it easy to experiment, compare results, and roll back to a stable version.",
    },
    {
      title: "Type-Safe Builder API",
      description:
        "tRPC + TypeScript keeps builder mutations predictable (create page, regenerate section, publish) while avoiding runtime mismatch bugs.",
    },
    {
      title: "Background Agent Workflows",
      description:
        "Inngest powers long-running generation steps with retries, logging, and a clean separation between UI actions and async processing.",
    },
  ],
  theme: {
    angle: 10,
    stops: [
      { color: "#FF7A45", at: "25%" },
      { color: "#C96342", at: "55%" },
      { color: "#FF9A6A", at: "90%" },
      { color: "#FFC2A3", at: "115%" },
    ],
    primary: "#C96342",
  },
  calloutTitle:
    "⚡ Build and iterate websites with AI, then use the templates and create your own app",
  calloutDescription:
    "Vibe turns prompts into editable websites with a preview, background generation workflows, and a type-safe stack that keeps the builder reliable as features scale.",
  whyBuilt:
    "I wanted to build a real AI product with a strong engineering foundation: fast UI, safe code execution, observable background jobs, and end-to-end type safety. Vibe is my take on a practical AI website builder, focused on rapid iteration and a polished builder experience, while staying maintainable with tRPC, Prisma, and structured workflows.",

  useCases: [
    "Generate a landing page from a short prompt and iterate on sections in minutes.",
    "Create multiple variants of a site (copy/layout) and keep revisions you can roll back to.",
    "Prototype marketing pages quickly with a clean, responsive UI out of the box.",
  ],
  learnings: [
    "Long-running AI features feel much more reliable when modeled as background workflows with retries and clear state transitions.",
    "A type-safe API (tRPC) reduces friction when the UI needs lots of fine-grained mutations (regen section, update page, etc.).",
    "Keeping preview execution isolated is essential for stability when you're generating and running code dynamically.",
    "Designing the data model around projects + pages + revisions makes iteration a first-class feature instead of an afterthought.",
    "A builder UI benefits massively from accessible primitives (menus/dialogs/tooltips) to keep interactions predictable and keyboard-friendly.",
  ],
};
