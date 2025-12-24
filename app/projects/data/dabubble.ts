import type { Project } from "../types";

export const dabubble: Project = {
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
};
