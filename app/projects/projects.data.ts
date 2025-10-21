import { Project } from "./types";

export const projectsData: Project[] = [
  {
    title: "DABubble",
    smallDescription:
      "Seamless team communication with real-time chat, channels, and user presence.",
    description:
      "DA Bubble is a Slack-inspired chat that enables real-time messaging across public and private channels...",
    src: "/images/dabubble_mockup.jpg",
    href: "/projects/dabubble",
    slug: "dabubble",
    github: "https://github.com/alessandro-arg/dabubble",
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
  },
  {
    title: "Join",
    smallDescription:
      "A Kanban-style project board app for visual task management and collaboration.",
    description:
      "Join is a web application inspired by Trello / Jira boards...",
    src: "/images/join_mockup.jpg",
    href: "/projects/join",
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
      "I’ve always loved chess and wanted a fast, modern app that feels instant...",
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
