import { Project } from "./types";
import type { SimpleIcon } from "simple-icons";
import {
  siNextdotjs,
  siTypescript,
  siTailwindcss,
  siFirebase,
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
      "A space for entrepreneurs to pitch ideas, explore others,and gain exposure with clean design",
    description:
      " A space for entrepreneurs to pitch ideas, explore others,and gain exposure with clean design sdfagsdfgasjdhfgkajshdgfajshdgfkjahsdgf asdfjhgasdfkjhg sADJFHGASDF KJHSdGFJh ",
    src: "/images/dabubble_mockup.jpg",
    href: "/projects/dabubble",
    slug: "dabubble",
    github: "https://github.com/alessandro-arg/dabubble",
    technologies: [
      {
        name: siNextdotjs.title,
        icon: <IconInline icon={siNextdotjs} size={16} color="#ffffff" />,
      },
      {
        name: siTypescript.title,
        icon: <IconInline icon={siTypescript} size={16} />,
      },
      {
        name: siNextdotjs.title,
        icon: <IconInline icon={siNextdotjs} size={16} />,
      },
      {
        name: siNextdotjs.title,
        icon: <IconInline icon={siNextdotjs} size={16} />,
      },
      {
        name: siNextdotjs.title,
        icon: <IconInline icon={siNextdotjs} size={16} />,
      },
      {
        name: siNextdotjs.title,
        icon: <IconInline icon={siNextdotjs} size={16} />,
      },
      {
        name: siNextdotjs.title,
        icon: <IconInline icon={siNextdotjs} size={16} />,
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
      "Built with Next.js, React, and TypeScript for scalability.",
      "Real-time messaging and presence with Firebase.",
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
      "A space for entrepreneurs to pitch ideas, explore others,and gain exposure with clean design",
    description:
      " A space for entrepreneurs to pitch ideas, explore others,and gain exposure with clean design",
    src: "/images/dabubble_mockup.jpg",
    href: "/projects/dabubble",
    slug: "join",
    github: "https://github.com/alessandro-arg/dabubble",
    technologies: [
      {
        name: siNextdotjs.title,
        icon: <IconInline icon={siNextdotjs} size={16} />,
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
      "Built with Next.js, React, and TypeScript for scalability.",
      "Real-time messaging and presence with Firebase.",
      "Accessible UI with Tailwind CSS and motion effects.",
      "Yeahhhh",
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
      "A space for entrepreneurs to pitch ideas, explore others,and gain exposure with clean design",
    description:
      " A space for entrepreneurs to pitch ideas, explore others,and gain exposure with clean design",
    src: "/images/dabubble_mockup.jpg",
    href: "/projects/dabubble",
    slug: "chess2",
    github: "https://github.com/alessandro-arg/dabubble",
    technologies: [
      {
        name: siNextdotjs.title,
        icon: <IconInline icon={siNextdotjs} size={16} />,
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
      "Built with Next.js, React, and TypeScript for scalability.",
      "Real-time messaging and presence with Firebase.",
      "Accessible UI with Tailwind CSS and motion effects.",
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
