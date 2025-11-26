import { Project } from "./types";

export const projectsData: Project[] = [
  {
    title: "Coordina",
    smallDescription:
      "Modern project & task management with Kanban boards, calendar views, analytics, and collaborative workspaces.",
    description:
      "Coordina is a sleek, opinionated project & task management platform inspired by tools like Linear, Jira, and Trello. It combines Kanban boards, full-calendar scheduling, analytics dashboards, and multi-workspace collaboration into a single, fast Next.js app. Users can create projects, invite members, prioritize work with labels and due dates, and track progress over time via charts.",
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
      angle: 135,
      stops: [
        { color: "#0EA5E9", at: "30%" },
        { color: "#6366F1", at: "60%" },
        { color: "#A855F7", at: "90%" },
        { color: "#F97316", at: "115%" },
      ],
      primary: "#6366F1",
    },
    calloutTitle:
      "📋 Plan, prioritize, and track your projects in one cohesive workspace",
    calloutDescription:
      "Coordina lets you structure work into projects, visualize tasks on Kanban boards and calendars, and keep teams aligned with analytics and a polished, responsive UI.",
    whyBuilt:
      "I wanted a project management tool that felt as polished as Linear but was fully under my control—both as a real-world productivity app and as a playground for modern React, Next.js, Appwrite, and React Query patterns. Coordina is my take on a focused, opinionated project & task manager that I would happily use for personal and client work.",
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
  },
  {
    title: "DABubble",
    smallDescription:
      "Seamless team communication with real-time chat, channels, and user presence.",
    description:
      "DA Bubble is a Slack-inspired chat that enables real-time messaging across public and private channels...",
    src: "/images/dabubble_mockup.jpg",
    href: "/projects/dabubble",
    liveLink: "https://dabubble.alessandro-argenziano.com",
    slug: "dabubble",
    github: "https://github.com/alessandro-arg/da-bubble",
    technologies: ["angular", "ts", "tailwind", "firebase"],
    year: "2025",
    points: [
      "Built with Angular 17 and TypeScript for modular and scalable architecture.",
      "Powered by Firebase for authentication, storage, and real-time data sync.",
      "Supports private chats, group channels, threads, and emoji reactions.",
      "Responsive design with Tailwind CSS for a clean, modern user experience.",
    ],
    theme: {
      angle: 10,
      stops: [
        { color: "#7E22CE", at: "49.9%" },
        { color: "#7E22CE", at: "81.7%" },
        { color: "#C084FC", at: "99.88%" },
        { color: "#F9D793", at: "113.5%" },
      ],
    },
    calloutTitle: "Chat online with friends and organize your work",
    calloutDescription:
      "Chat with your friends in real time, open threads and use the shortcuts to enjoy a mouse-less experience.",
  },
  {
    title: "Join",
    smallDescription:
      "A Kanban-style project board app for visual task management and collaboration.",
    description:
      "Join is a web application inspired by Trello / Jira boards...",
    src: "/images/join_mockup.jpg",
    href: "/projects/join",
    liveLink: "https://join.alessandro-argenziano.com",
    slug: "join",
    github: "https://github.com/alessandro-arg/join",
    technologies: ["js", "sass", "firebase"],
    year: "2024",
    points: [
      "Drag-and-drop board interface for intuitive task movement across stages",
      "Customizable columns (e.g. To Do, In Progress, Done, Review)",
      "Task details including description, due date, labels, and assignees",
      "Real-time updates and syncing via Firebase",
    ],
    theme: {
      angle: 10,
      stops: [
        { color: "#2932CB", at: "49.9%" },
        { color: "#2932CB", at: "81.7%" },
        { color: "#7980FF", at: "99.88%" },
        { color: "#F9D793", at: "113.5%" },
      ],
    },
  },
  {
    title: "Chess²",
    smallDescription:
      "Online chess with real-time multiplayer, Stockfish AI, and Elo ratings.",
    description:
      "Chess² is a modern web chess app built with heart and an eye for details...",
    src: "/images/chess_mockup.webp",
    href: "/projects/chess",
    liveLink: "https://chess2.alessandro-argenziano.com",
    slug: "chess",
    github: "https://github.com/alessandro-arg/chess",
    technologies: ["angular", "ts", "tailwind", "firebase"],
    techDesc: [
      {
        name: "Angular",
        description:
          "- Modern frontend framework with standalone components, SSR, and powerful reactive forms.",
        link: "https://angular.dev/",
      },
      {
        name: "TypeScript",
        description:
          "- Strongly typed JavaScript enabling safer refactors and reliable game logic.",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Tailwind CSS",
        description:
          "- Utility-first styling for responsive UI, dark mode, and consistent spacing.",
        link: "https://tailwindcss.com/",
      },
      {
        name: "Firebase",
        description:
          "- Auth + RTDB/Firestore for secure accounts, presence, and real-time games.",
        link: "https://firebase.google.com/",
      },
    ],
    year: "2025",
    date: "2025-09-12",
    points: [
      {
        title: "Real-time Multiplayer",
        description: "Challenge friends and play live...",
      },
      {
        title: "Stockfish Bot Integration",
        description: "Battle an in-browser Stockfish...",
      },
      {
        title: "Accounts, Profiles & Friends",
        description: "Firebase Auth for email/Google...",
      },
      {
        title: "Elo Ratings",
        description: "Earn or lose Elo after rated games...",
      },
      {
        title: "Responsive UI & Premove",
        description: "Mobile-first layout, keyboard shortcuts...",
      },
    ],
    theme: {
      angle: 10,
      stops: [
        { color: "#14B8A6", at: "49.9%" },
        { color: "#14B8A6", at: "81.7%" },
        { color: "#5EEAD4", at: "99.88%" },
        { color: "#F9D793", at: "113.5%" },
      ],
      primary: "#14B8A6",
    },
    calloutTitle: "♟️ Play online with friends or against Stockfish AI bots",
    calloutDescription:
      "Challenge friends in real time, or sharpen tactics vs a fast, in-browser Stockfish—no install needed.",
    whyBuilt:
      "I've always loved chess and wanted a fast, modern app that feels instant...",
    useCases: [
      "Play casual or rated games with friends in the browser.",
      "Practice vs Stockfish at adjustable strength levels.",
      "Share a game link and start instantly—no app store.",
      "Review openings and blunders with the quick recap.",
      "Use on mobile or desktop during breaks or commutes.",
    ],
    learnings: [
      "Designing a deterministic game loop and validating moves on both client and server reduces desyncs.",
      "Separating UI state from canonical game state avoids animation jank during fast sequences.",
      "Firebase RTDB presence + heartbeats creates reliable online/offline indicators.",
      "Web Worker integration keeps the UI snappy while Stockfish thinks.",
      "Careful rate-limiting and security rules prevent malicious move injections.",
    ],
  },
];
