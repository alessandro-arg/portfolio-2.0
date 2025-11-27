import { Project } from "./types";

export const projectsData: Project[] = [
  {
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
      angle: 10,
      stops: [
        { color: "#4FCBFF", at: "30%" },
        { color: "#66D4FF", at: "60%" },
        { color: "#80DDFF", at: "90%" },
        { color: "#99E5FF", at: "115%" },
      ],
      primary: "#4FCBFF",
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
  },
  {
    title: "DABubble",
    smallDescription:
      "Slack-style team chat with channels, DMs, threads, reactions, and real-time presence.",
    description:
      "DABubble is a modern chat application. It offers real-time messaging across public channels, private channels, and direct messages, plus threads, emoji reactions, mentions, and presence indicators. The app uses Firebase (Firestore, RTDB, Auth, Storage) with AngularFire to deliver live updates, secure authentication, and a responsive, accessible UI that feels at home on both desktop and mobile.",
    src: "/images/dabubble_mockup.webp",
    href: "/projects/dabubble",
    liveLink: "https://dabubble.alessandro-argenziano.com",
    slug: "dabubble",
    github: "https://github.com/alessandro-arg/da-bubble",
    technologies: ["angular", "ts", "tailwind", "firebase"],
    techDesc: [
      {
        name: "Angular 17",
        description:
          "- Standalone components, typed routing, and SSR support power the workspace shell, channel layout, and auth-guarded routes.",
        link: "https://angular.dev/",
      },
      {
        name: "TypeScript",
        description:
          "- Strong typing for users, channels, messages, threads, and presence models keeps chat logic predictable and refactors safe.",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Tailwind CSS",
        description:
          "- Utility-first styling for the Slack-like layout, responsive sidebar + content area, and accessible focus/hover states.",
        link: "https://tailwindcss.com/",
      },
      {
        name: "Firebase",
        description:
          "- Auth, Firestore, RTDB, and Storage provide secure login, real-time messages, presence tracking, and avatar/file uploads.",
        link: "https://firebase.google.com/",
      },
      {
        name: "AngularFire",
        description:
          "- Bridges Angular and Firebase with typed observables for streams, simplifying real-time listeners and auth state handling.",
        link: "https://github.com/angular/angularfire",
      },
    ],
    year: "2025",
    date: "2025-07-14",
    points: [
      {
        title: "Channels & Direct Messages",
        description:
          "Organize conversations into public/private channels and one-to-one DMs, with a familiar Slack-style sidebar and headers.",
      },
      {
        title: "Threads & In-Context Replies",
        description:
          "Reply to specific messages in dedicated threads, keeping busy channels clean while preserving full context.",
      },
      {
        title: "Emoji Reactions & Message Editing",
        description:
          "React with emojis, edit sent messages, and keep the conversation expressive without sending extra chat spam.",
      },
      {
        title: "Mentions & Presence",
        description:
          "Use @user and #channel mentions, with online/offline/last-seen indicators backed by Firebase presence data.",
      },
      {
        title: "Responsive, Accessible UI",
        description:
          "Tailwind-driven layout, keyboard navigation, and ARIA roles make DABubble usable on laptops, tablets, and phones.",
      },
    ],
    theme: {
      angle: 10,
      stops: [
        { color: "#7E22CE", at: "49.9%" },
        { color: "#7E22CE", at: "81.7%" },
        { color: "#C084FC", at: "99.88%" },
        { color: "#F9D793", at: "113.5%" },
      ],
      primary: "#6366F1",
    },
    calloutTitle:
      "💬 Real-time team chat with channels, DMs, threads, and reactions",
    calloutDescription:
      "DABubble brings a smooth experience to the browser: create channels, send direct messages, reply in threads, react with emojis, and see who's online, all powered by Angular and Firebase.",
    whyBuilt:
      "I wanted to deeply understand what it takes to build a modern, real-time messaging app: presence, threads, reactions, and secure multi-user data flows. DABubble became my playground for Angular 17, Firebase, Tailwind, and real-time UX patterns, while recreating the collaboration flow of tools like Slack and Discord.",
    useCases: [
      "Create workspaces for small teams and organize conversations into topic-based channels.",
      "Use direct messages and group channels to coordinate quickly without email.",
      "Keep busy channels readable by moving detailed discussions into threads.",
      "Rely on presence indicators and last-seen times to know who's available.",
      "Run the app during coding sessions, study groups, or side-project collabs.",
    ],
    learnings: [
      "Designing Firestore collections for users, groups, private chats, messages, and threads upfront avoids painful migrations later.",
      "Combining AngularFire streams with local UI state provides smooth real-time updates without over-complicating global state management.",
      "Implementing mentions and reactions cleanly requires a clear separation between message content, metadata, and aggregated reaction counts.",
      "Presence tracking with Firebase RTDB + heartbeats is powerful but needs careful timeouts and cleanup to stay accurate.",
      "Investing early in accessibility (focus management, ARIA roles, keyboard shortcuts) makes a dense chat UI feel much more polished.",
    ],
  },
  {
    title: "Chess²",
    smallDescription:
      "Online chess game with real-time multiplayer against friends, Stockfish AI, and Elo ratings.",
    description:
      "Chess² is a modern web-based chess game where you can play against friends in real time or challenge a Stockfish-powered bot. It features authenticated accounts, friend lists, an Elo rating system, and detailed game recaps. Under the hood, it uses Firebase Realtime Database for live games, Firestore for user data, and a dedicated Stockfish worker deployed on Render for fast, realistic AI play, all wrapped in a responsive, polished UI.",
    src: "/images/chess_mockup.webp",
    href: "/projects/chess",
    liveLink: "https://chess2.alessandro-argenziano.com",
    slug: "chess",
    github: "https://github.com/alessandro-arg/chess",
    technologies: ["angular", "ts", "tailwind", "firebase"],
    techDesc: [
      {
        name: "Angular 17",
        description:
          "- Standalone components, typed routing, and SSR provide a structured dashboard shell, smooth navigation, and fast initial loads.",
        link: "https://angular.dev/",
      },
      {
        name: "TypeScript",
        description:
          "- Strong typing for moves, boards, games, and users keeps chess logic deterministic and refactors safe as the codebase grows.",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Tailwind CSS",
        description:
          "- Utility-first styling for the board, dashboard, and modals, enabling a clean, responsive layout and quick design iterations.",
        link: "https://tailwindcss.com/",
      },
      {
        name: "Firebase",
        description:
          "- Auth, Firestore, Realtime Database, and Storage power accounts, friend lists, live games, and secure per-user data.",
        link: "https://firebase.google.com/",
      },
      {
        name: "Stockfish",
        description:
          "- A strong open-source chess engine accessed via a Render-hosted worker to provide fast, realistic AI opponents in the browser.",
        link: "https://stockfishchess.org/",
      },
    ],
    year: "2025",
    date: "2025-09-24",
    points: [
      {
        title: "Real-time Multiplayer",
        description:
          "Challenge friends to live games backed by Firebase Realtime Database, with synchronized clocks, turns, and game states.",
      },
      {
        title: "Stockfish Bot Integration",
        description:
          "Play against a Stockfish-powered AI via a dedicated engine server, with moves validated both by chess.js and the engine.",
      },
      {
        title: "Accounts, Friends & Invitations",
        description:
          "Sign in with Firebase Auth, add friends, send invites, and keep all games tied to your profile and history.",
      },
      {
        title: "Elo Rating System",
        description:
          "Win or lose rating points after rated games using a custom Elo service, encouraging fair matchmaking and progression.",
      },
      {
        title: "Game Recap & Responsive UI",
        description:
          "Review your recent games from the dashboard and enjoy a mobile-friendly layout built with Angular 17 and TailwindCSS.",
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
      "Create an account, add friends, and start real-time games—or sharpen your tactics versus a fast, Stockfish-powered bot directly in the browser.",
    whyBuilt:
      "I wanted to build more than a simple chess board: a complete multiplayer platform with accounts, ratings, and a strong AI opponent. Chess² became a way to combine my love for chess with modern Angular, Firebase, and SSR patterns and to push myself to ship a polished, real-world app in just a few weeks.",
    useCases: [
      "Play casual or rated games with friends in the browser.",
      "Practice vs a Stockfish bot to explore openings and tactics.",
      "Share a game link and start playing instantly, no installs.",
      "Track your recent games and see how your Elo evolves over time.",
      "Use it on desktop or mobile for quick games during breaks.",
    ],
    learnings: [
      "Designing a deterministic game loop with chess.js and validating moves server-side helps prevent illegal positions and desyncs.",
      "Separating UI state from canonical game state avoids animation glitches and keeps reconnections stable during live games.",
      "Using Firebase Realtime Database for games and Firestore for profiles/friends keeps reads efficient and data modeling clear.",
      "Integrating a remote Stockfish worker requires careful timeouts, error handling, and rate limiting to keep the UI responsive.",
      "Building an Elo system on top of Firebase data taught me how to handle concurrency, retries, and edge cases like aborted games.",
    ],
  },
  {
    title: "Join",
    smallDescription:
      "Kanban-style project board for visual task management and collaboration.",
    description:
      "Join is a task manager built with vanilla JavaScript, HTML, and CSS. It provides a drag-and-drop Kanban board where tasks move between different stages. Each task can have details such as description, due date, priority, category, and assigned contacts. The app was created as a team project and focuses on solid fundamentals.",
    src: "/images/join_mockup.webp",
    href: "/projects/join",
    liveLink: "https://join.alessandro-argenziano.com",
    slug: "join",
    github: "https://github.com/alessandro-arg/join",
    technologies: ["js", "sass", "firebase"],
    techDesc: [
      {
        name: "JavaScript",
        description:
          "- Vanilla JS powers the entire app: drag-and-drop interactions, task creation flows, board filtering, and state handling without a framework.",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "HTML",
        description:
          "- Semantic multi-page structure for login, board, add-task, contacts, summary, and help views, forming the backbone of the UI.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        description:
          "- Custom styling for the Kanban board, modals, responsive layout, and hover/focus states, giving the app a polished, app-like feel.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "Firebase",
        description:
          "- Backend for persisting tasks, users, and board data with real-time syncing between clients.",
        link: "https://firebase.google.com/",
      },
    ],
    year: "2024",
    date: "2024-01-15",
    points: [
      {
        title: "Drag-and-Drop Kanban Board",
        description:
          "Move tasks between stages like To Do, In Progress, Feedback, and Done using an intuitive drag-and-drop interface.",
      },
      {
        title: "Rich Task Details",
        description:
          "Add descriptions, due dates, priorities, categories, and assigned contacts so every task carries the context it needs.",
      },
      {
        title: "Contact Management",
        description:
          "Maintain a list of contacts and assign them to tasks to clarify responsibility and ownership across the board.",
      },
      {
        title: "Multi-Page App Structure",
        description:
          "Dedicated views for creating tasks, viewing the board, managing contacts, reading a summary dashboard, and accessing help/legal pages.",
      },
      {
        title: "Responsive Layout & Keyboard-Friendly UX",
        description:
          "Custom CSS layout that works across screen sizes, with clear focus states and accessible interactions for everyday use.",
      },
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
    calloutTitle: "🧩 Visual Kanban board for organizing tasks and workflows",
    calloutDescription:
      "Join lets you create tasks, assign them to contacts, and drag them across a Kanban board—so you always see what's pending, in progress, and done at a glance.",
    learnings: [
      "Modeling tasks, statuses, categories, and contacts upfront makes later features like filtering and searching much easier to implement.",
      "Implementing drag-and-drop with the native HTML5 API requires careful handling of indices, drop zones, and visual feedback states.",
      "Keeping a single source of truth for task state and re-rendering from that state avoids subtle DOM desync bugs.",
      "Splitting logic into smaller script modules (board, add-task, contacts, summary) keeps a growing vanilla JS codebase maintainable.",
      "Working in a 5-person team reinforced the importance of Git workflows, consistent coding conventions, and clear UI/UX decisions.",
    ],
  },
];
