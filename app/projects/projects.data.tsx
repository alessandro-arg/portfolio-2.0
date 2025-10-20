import { Project } from "./types";
import type { SimpleIcon } from "simple-icons";
import {
  siTypescript,
  siTailwindcss,
  siFirebase,
  siAngular,
  siJavascript,
  siSass,
} from "simple-icons/icons";

export function IconInline({
  icon,
  size = 16,
  color,
}: {
  icon: SimpleIcon;
  size?: number;
  color?: string;
}) {
  const fill = color ?? `#${icon.hex}`;

  return (
    <div aria-label={icon.title} title={icon.title}>
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        aria-hidden="true"
      >
        <path d={icon.path} fill={fill} />
      </svg>
    </div>
  );
}

export const projectsData: Project[] = [
  {
    title: "DABubble",
    smallDescription:
      "Seamless team communication with real-time chat, channels, and user presence.",
    description:
      "DA Bubble is a Slack-inspired chat that enables real-time messaging across public and private channels, supports threaded replies, emoji reactions, mentions, and live user status. Designed with a responsive, intuitive UI, DA Bubble makes team collaboration fast, organized, and enjoyable.",
    src: "/images/dabubble_mockup.jpg",
    href: "/projects/dabubble",
    slug: "dabubble",
    github: "https://github.com/alessandro-arg/dabubble",
    technologies: [
      {
        name: siAngular.title,
        icon: <IconInline icon={siAngular} size={16} color="currentColor" />,
      },
      {
        name: siTypescript.title,
        icon: <IconInline icon={siTypescript} size={16} />,
      },
      {
        name: siTailwindcss.title,
        icon: <IconInline icon={siTailwindcss} size={16} />,
      },
      {
        name: siFirebase.title,
        icon: <IconInline icon={siFirebase} size={16} />,
      },
    ],
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
      "Join is a web application inspired by Trello / Jira boards, built to help teams organize tasks, track progress, and collaborate. With drag-and-drop cards, customizable columns, task details, and member assignments, Join makes project workflows transparent and efficient.",
    src: "/images/join_mockup.jpg",
    href: "/projects/join",
    slug: "join",
    github: "https://github.com/alessandro-arg/join",
    technologies: [
      {
        name: siJavascript.title,
        icon: <IconInline icon={siJavascript} size={16} />,
      },
      {
        name: siSass.title,
        icon: <IconInline icon={siSass} size={16} />,
      },
      {
        name: siFirebase.title,
        icon: <IconInline icon={siFirebase} size={16} />,
      },
    ],
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
      "Chess² is a modern web chess app built with heart and an eye for details. Play live vs friends or a Stockfish-powered bot, track your Elo, and review recent games—all in a responsive, polished UI with elegant animations and a clean analysis board.",
    src: "/images/chess_mockup.webp",
    href: "/projects/chess",
    liveLink: "https://chess2.alessandro-argenziano.com",

    slug: "chess",
    github: "https://github.com/alessandro-arg/chess",

    technologies: [
      {
        name: siAngular.title,
        icon: <IconInline icon={siAngular} size={16} color="currentColor" />,
        description:
          "- Modern frontend framework with standalone components, SSR, and powerful reactive forms.",
        link: "https://angular.dev/",
      },
      {
        name: siTypescript.title,
        icon: <IconInline icon={siTypescript} size={16} />,
        description:
          "- Strongly typed JavaScript enabling safer refactors and reliable game logic.",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: siTailwindcss.title,
        icon: <IconInline icon={siTailwindcss} size={16} />,
        description:
          "- Utility-first styling for responsive UI, dark mode, and consistent spacing.",
        link: "https://tailwindcss.com/",
      },
      {
        name: siFirebase.title,
        icon: <IconInline icon={siFirebase} size={16} />,
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
        description:
          "Challenge friends and play live with Firebase RTDB syncing moves, resigns, draws, and clocks. Optimistic UI keeps animations smooth while authoritative state prevents desyncs.",
      },
      {
        title: "Stockfish Bot Integration",
        description:
          "Battle an in-browser Stockfish (Web Worker) with adjustable strength. Off-main-thread computation keeps the UI responsive during engine search.",
      },
      {
        title: "Accounts, Profiles & Friends",
        description:
          "Firebase Auth for email/Google logins, avatars, presence, and friend invites. Presence is tracked with heartbeats and server timestamps.",
      },
      {
        title: "Elo Ratings",
        description:
          "Earn or lose Elo after rated games via a simple Glicko-like update. Match players by rating band to keep games competitive.",
      },
      {
        title: "Responsive UI & Premove",
        description:
          "Mobile-first layout, keyboard shortcuts (e.g., undo in casual), and premoves for fast time controls without sacrificing clarity.",
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

    // === Optional sections to force all TOC items to render ===
    whyBuilt:
      "I’ve always loved chess and wanted a fast, modern app that feels instant: no page reloads, clean animations, and frictionless online play. Building Chess² let me combine real-time data, game rules/engines, and delightful UI details into a single focused project.",

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
