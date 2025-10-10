import { Project } from "./types";
import type { SimpleIcon } from "simple-icons";
import {
  siNextdotjs,
  siTypescript,
  siTailwindcss,
  siFirebase,
  siAngular,
  siJavascript,
  siCss,
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
      "Chess² is a modern web chess app built with heart and an eye for details. Play live vs friends or a Stockfish-powered bot, track your Elo, and review recent games, all in a responsive, polished UI.",
    src: "/images/chess_mockup.webp",
    href: "/projects/chess",
    slug: "chess",
    github: "https://github.com/alessandro-arg/chess",
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
      "Real-time multiplayer with Firebase RTDB.",
      "Play vs Stockfish bot (server worker).",
      "Firebase Auth with profiles & friends.",
      "Elo rating and recent game recap.",
    ],
    theme: {
      angle: 10,
      stops: [
        { color: "#14B8A6", at: "49.9%" },
        { color: "#14B8A6", at: "81.7%" },
        { color: "#5EEAD4", at: "99.88%" },
        { color: "#F9D793", at: "113.5%" },
      ],
    },
  },
];
