import type { Project } from "../../types";

export const altair: Project = {
  title: "Altair",
  smallDescription:
    "AI-powered browser IDE with live code execution, terminal tooling, and multi-model assistance for building directly on the web.",
  description:
    "Altair is an AI-supported browser IDE designed to help developers build, edit, run, and iterate on projects directly in the browser. It combines a full coding workspace with CodeMirror-based editing, WebContainers for in-browser execution, Xterm terminal integration, and multi-model AI support through the AI SDK. Inngest workflows handle background automation and agent tasks, while Clerk manages authentication.",
  src: "/images/altair_mockup.webp",
  href: "/projects/altair",
  slug: "altair",
  github: "https://github.com/alessandro-arg/altair",
  liveLink: "https://altair.alessandro-argenziano.com",
  technologies: ["next", "react", "ts", "tailwind", "clerk", "codemirror"],

  techDesc: [
    {
      name: "Next.js",
      description:
        "- App Router foundation for structuring the IDE shell, route-based workspaces, server logic, and a fast modern web app experience.",
      link: "https://nextjs.org/",
    },
    {
      name: "React",
      description:
        "- Component-driven architecture for the editor layout, panels, terminal UI, AI interactions, and all workspace-level interactivity.",
      link: "https://react.dev/",
    },
    {
      name: "TypeScript",
      description:
        "- Strong typing across editor state, AI responses, file structures, and UI logic to keep the IDE maintainable as complexity grows.",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Tailwind CSS",
      description:
        "- Utility-first styling for a clean, responsive IDE interface with fast iteration on spacing, layout, and theming.",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Radix UI",
      description:
        "- Accessible low-level UI primitives for menus, dialogs, popovers, tabs, tooltips, and other interactive IDE controls.",
      link: "https://www.radix-ui.com/",
    },
    {
      name: "Clerk",
      description:
        "- Authentication and account handling so user sessions, workspaces, and personalized experiences can be managed securely.",
      link: "https://clerk.com/",
    },
    {
      name: "AI SDK",
      description:
        "- Unified interface for integrating LLM capabilities into the IDE, making it easier to support chat, code generation, and assistant workflows.",
      link: "https://sdk.vercel.ai/",
    },
    {
      name: "Anthropic + Google AI",
      description:
        "- Multi-model provider support gives Altair flexibility for different assistant behaviors, code tasks, and prompt workflows.",
      link: "https://ai.google.dev/",
    },
    {
      name: "Inngest",
      description:
        "- Event-driven background workflows and agent orchestration for long-running AI tasks, retries, and observable async processing.",
      link: "https://www.inngest.com/",
    },
    {
      name: "CodeMirror 6",
      description:
        "- Core editor engine powering syntax-aware editing, language support, search, theming, minimap, and a true IDE-like writing experience.",
      link: "https://codemirror.net/",
    },
    {
      name: "WebContainers",
      description:
        "- In-browser runtime environment that lets projects execute directly inside the app, enabling live previews and real dev workflows without leaving the browser.",
      link: "https://webcontainers.io/",
    },
    {
      name: "Xterm.js",
      description:
        "- Embedded terminal support so users can run commands and interact with the development environment from inside the IDE.",
      link: "https://xtermjs.org/",
    },
    {
      name: "Zustand",
      description:
        "- Lightweight state management for handling editor state, workspace panels, and interactive IDE data without heavy boilerplate.",
      link: "https://zustand-demo.pmnd.rs/",
    },
    {
      name: "Zod",
      description:
        "- Schema validation for safer runtime data handling, especially useful when AI output, user input, and dynamic config all meet in one system.",
      link: "https://zod.dev/",
    },
    {
      name: "Sentry",
      description:
        "- Error monitoring and observability tooling to help track failures and improve reliability in a complex interactive app.",
      link: "https://sentry.io/",
    },
  ],

  year: "2026",
  date: "2026-03-02",
  points: [
    {
      title: "AI-Native Browser IDE",
      description:
        "Altair is built around AI-assisted development, making generation, editing, and iteration part of the core coding experience instead of an extra feature.",
    },
    {
      title: "Real In-Browser Execution",
      description:
        "With WebContainers and terminal support, projects can run directly inside the browser, giving the IDE a real development environment feel.",
    },
    {
      title: "Advanced Editing Experience",
      description:
        "CodeMirror 6 powers a modern editor setup with syntax support, search, theming, minimap, and productivity-focused extensions.",
    },
    {
      title: "Workflow Automation with Agents",
      description:
        "Inngest and agent tooling handle async AI operations cleanly, which is especially useful for complex or long-running coding tasks.",
    },
    {
      title: "Polished Developer UX",
      description:
        "Resizable panels, accessible UI primitives, motion, flows, and interactive tooling make the workspace feel closer to a real desktop IDE.",
    },
  ],
  theme: {
    angle: 135,
    stops: [
      { color: "#6D5EF5", at: "20%" },
      { color: "#4F46E5", at: "50%" },
      { color: "#8B7CFF", at: "85%" },
      { color: "#B7ADFF", at: "115%" },
    ],
    primary: "#4F46E5",
  },
  calloutTitle:
    "🧠 Code, run, and iterate with AI inside a full browser-based IDE",
  calloutDescription:
    "Altair combines live execution, terminal tooling, AI assistance, and workflow automation into a modern in-browser developer workspace built for rapid iteration.",
  whyBuilt:
    "I wanted to build an AI product that feels closer to a real developer tool than a simple chat interface. Altair is my take on an AI-native IDE: an environment where code editing, execution, terminal access, and intelligent assistance all live in one place. The goal was to create something that feels powerful, modern, and genuinely useful for real development workflows.",

  useCases: [
    "Generate or refine code with AI while working inside a real browser-based development environment.",
    "Run projects directly in the browser and validate changes quickly without leaving the workspace.",
    "Prototype developer tools, UI ideas, or app concepts in an IDE that combines editing, runtime, and assistant workflows.",
  ],
  learnings: [
    "AI features become much more useful when they are embedded directly into the developer workflow instead of isolated in a separate chat surface.",
    "A browser IDE needs strong layout and state decisions early, because editor panels, terminals, and assistant tools all compete for space and responsiveness.",
    "WebContainers unlock a much more convincing IDE experience, but they also require careful thinking around runtime orchestration and UX feedback.",
    "Event-driven workflows are a strong fit for AI-heavy products, especially when tasks are multi-step, slow, or need retries.",
    "Accessible UI primitives and structured component systems make a huge difference in keeping a complex tool feeling polished and predictable.",
  ],
};
