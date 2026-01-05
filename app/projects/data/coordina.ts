import type { Project } from "../types";

export const coordina: Project = {
  title: "Coordina",
  smallDescription:
    "Modern project & task management with Kanban boards, calendar views, analytics, and collaborative workspaces.",
  description:
    "Coordina is a sleek, opinionated project & task management platform. It combines Kanban boards, full-calendar scheduling, analytics dashboards, and multi-workspace collaboration into a single, fast Next.js app. Users can create projects, invite members, prioritize work with labels and due dates, and track progress over time via charts.",
  src: "/images/coordina_mockup.webp",
  href: "/projects/coordina",
  liveLink: "https://coordina.alessandro-argenziano.com",
  slug: "coordina",
  github: "https://github.com/alessandro-arg/coordina",
  technologies: [
    "next",
    "react",
    "ts",
    "tailwind",
    "appwrite",
    "shadcn-ui",
    "react-query",
  ],
  techDesc: [
    {
      name: "Next.js",
      description:
        "- App Router-based React framework for routing, layouts, and API routes, giving Coordina a structured dashboard shell and smooth navigation.",
      link: "https://nextjs.org/",
    },
    {
      name: "React",
      description:
        "- Component-driven UI with hooks for interactive Kanban boards, forms, and real-time feedback in the workspace experience.",
      link: "https://react.dev/",
    },
    {
      name: "TypeScript",
      description:
        "- Strongly typed models for workspaces, projects, and tasks, reducing runtime errors and keeping the data layer predictable.",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Tailwind CSS",
      description:
        "- Utility-first styling for the modern dashboard look, responsive layouts, and consistent spacing, typography, and theming.",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Appwrite",
      description:
        "- Handles auth, databases, and storage for multi-workspace data, permissions, and secure project/task persistence.",
      link: "https://appwrite.io/",
    },
    {
      name: "shadcn/ui",
      description:
        "- Prebuilt accessible UI primitives (dialogs, buttons, dropdowns, tables) to keep the interface polished without heavy custom components.",
      link: "https://ui.shadcn.com/",
    },
    {
      name: "React Query",
      description:
        "- Data fetching and caching layer powering optimistic updates, background refetching, and a snappy UX across boards and calendars.",
      link: "https://tanstack.com/query/latest",
    },
  ],
  year: "2025",
  date: "2025-11-25",
  points: [
    {
      title: "Kanban Boards for Every Project",
      description:
        "Drag & drop tasks between columns using a modern board UI with priorities, labels, due dates, and assignees.",
    },
    {
      title: "Workspaces, Projects & Members",
      description:
        "Organize work into workspaces and projects, invite collaborators, and keep responsibilities scoped to the right context.",
    },
    {
      title: "Calendar & Scheduling Views",
      description:
        "Visualize tasks and deadlines on a full calendar view to spot overloads, upcoming milestones, and gaps in planning.",
    },
    {
      title: "Analytics & Insights",
      description:
        "Charts for workload, status distribution, and progress over time help teams understand how projects are evolving.",
    },
    {
      title: "Polished, Responsive UI with Themes",
      description:
        "A clean dashboard layout built with Tailwind, Radix UI, and dark/light mode for a pleasant experience on desktop and mobile.",
    },
  ],
  theme: {
    angle: 10,
    stops: [
      { color: "#0F4CD8", at: "25%" },
      { color: "#155DFB", at: "55%" },
      { color: "#3B7BFF", at: "90%" },
      { color: "#6FA0FF", at: "115%" },
    ],
    primary: "#155DFB",
  },
  calloutTitle:
    "📋 Plan, prioritize, and track your projects in one cohesive workspace",
  calloutDescription:
    "Coordina lets you structure work into projects, visualize tasks on Kanban boards and calendars, and keep teams aligned with analytics and a polished, responsive UI.",
  whyBuilt:
    "I wanted a project management tool that felt as polished as Linear but was fully under my control, both as a real-world productivity app and as a playground for modern React, Next.js, Appwrite, and React Query patterns. Coordina is my take on a focused, opinionated project & task manager that I would happily use for personal and client work.",
  useCases: [
    "Plan sprints with Kanban boards and track progress across multiple projects.",
    "Manage personal tasks, side projects, and long-running initiatives in one dashboard.",
    "Organize client work in separate workspaces and keep deliverables clearly scoped.",
    "Use the calendar view to align deadlines, avoid overload, and plan upcoming weeks.",
    "Review analytics to see where tasks get stuck and how workload is distributed.",
  ],
  learnings: [
    "Designing a workspace → project → task hierarchy with Appwrite collections keeps permissions manageable and scales better than a flat task model.",
    "Combining React Query with optimistic updates makes drag-and-drop interactions feel instant while still respecting backend validation.",
    "Building a Kanban board with @hello-pangea/dnd requires careful handling of indices and IDs to avoid flicker and inconsistent ordering.",
    "Integrating react-big-calendar with typed task data surfaces calendar edge cases (time zones, all-day vs timed events) early in the design.",
    "Centralizing validation with Zod on both the client and Hono API routes reduces duplicated logic and prevents invalid task states from leaking into the UI.",
  ],
};
