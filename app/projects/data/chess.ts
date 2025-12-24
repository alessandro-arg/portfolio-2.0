import type { Project } from "../types";

export const chess: Project = {
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
    "Create an account, add friends, and start real-time games. Sharpen your tactics versus a fast, Stockfish-powered bot directly in the browser.",
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
};
