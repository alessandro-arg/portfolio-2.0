import type { Project } from "../types";

export const archivio: Project = {
  title: "Archivio",
  smallDescription:
    "Minimal OTP-based storage app to securely upload, organize, and access files from anywhere.",
  description:
    "Archivio is a lightweight personal storage web app focused on fast access and simple security. Users authenticate via one-time password, then upload and manage files in a clean dashboard. It's designed as a 'private drive' with a modern UI, responsive layouts, and a straightforward data model for file metadata + storage objects.",
  src: "/images/archivio_mockup.webp",
  href: "/projects/archivio",
  liveLink: "https://archivio.alessandro-argenziano.com",
  slug: "archivio",
  github: "https://github.com/alessandro-arg/archivio",
  technologies: ["next", "react", "ts", "tailwind", "shadcn-ui", "appwrite"],
  techDesc: [
    {
      name: "Next.js",
      description:
        "- App Router-based framework for routing, server actions/API routes, and a structured dashboard layout with fast navigation.",
      link: "https://nextjs.org/",
    },
    {
      name: "React",
      description:
        "- Component-driven UI for the login flow, file table/grid views, upload dialogs, and interactive file actions.",
      link: "https://react.dev/",
    },
    {
      name: "TypeScript",
      description:
        "- Typed models for users, file metadata, and upload states to keep the UI + server logic predictable and safe.",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Tailwind CSS",
      description:
        "- Utility-first styling for a clean, responsive interface (dashboard spacing, typography, mobile layouts).",
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
  ],
  year: "2025",
  date: "2025-12-22",
  points: [
    {
      title: "OTP / Passwordless Login",
      description:
        "Sign in using one-time codes instead of passwords, keeping the auth flow simple and user-friendly.",
    },
    {
      title: "Upload & Store Files Securely",
      description:
        "Upload files to a storage backend and keep them private to the authenticated user.",
    },
    {
      title: "File Library Dashboard",
      description:
        "Browse your stored files with a clean UI (list/grid), quick previews/metadata, and simple actions.",
    },
    {
      title: "Metadata-Driven Organization",
      description:
        "Maintain file metadata (name, size, type, timestamps) to support sorting, filtering, and future folder/tag features.",
    },
    {
      title: "Polished Responsive UI",
      description:
        "Mobile-friendly layouts and modern components (dialogs, dropdown actions, toasts) for a smooth UX.",
    },
  ],
  theme: {
    angle: 12,
    stops: [
      { color: "#2563EB", at: "25%" },
      { color: "#3B82F6", at: "55%" },
      { color: "#60A5FA", at: "85%" },
      { color: "#93C5FD", at: "115%" },
    ],
    primary: "#2563EB",
  },
  calloutTitle: "🗄️ Your files, neatly stored with passwordless access",
  calloutDescription:
    "Archivio keeps storage simple: OTP login, a clean dashboard, and secure file uploads - built as a lightweight personal cloud drive.",
  whyBuilt:
    "I wanted a compact, modern storage web app that cuts out complexity: passwordless auth, straightforward uploads, and a clean UI. Archivio is a practical project to refine dashboard UX patterns, storage workflows, and a solid Next.js architecture.",
  useCases: [
    "Store personal documents and access them from any device.",
    "Upload and share files between machines without USB drives.",
    "Keep a lightweight private archive for PDFs, images, and exports.",
    "Use as a base to add folders/tags, sharing links, or team spaces later.",
  ],
  learnings: [
    "A clean separation between storage objects and metadata makes listing/searching fast and keeps the UI simple.",
    "Uploads feel significantly better with progress feedback, optimistic UI updates, and clear post-upload actions.",
    "Planning storage permissions early prevents painful refactors when adding sharing or multi-device sessions.",
  ],
};
