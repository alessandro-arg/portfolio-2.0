import type { Project } from "../../types";

export const coordina: Project = {
  title: "Coordina",
  smallDescription:
    "Modernes Projekt- und Aufgabenmanagement mit Kanban-Boards, Kalenderansichten, Analysen und kollaborativen Workspaces.",
  description:
    "Coordina ist eine moderne, fokussierte Plattform für Projekt- und Aufgabenmanagement. Sie kombiniert Kanban-Boards, vollständige Kalenderplanung, Analytics-Dashboards und Multi-Workspace-Zusammenarbeit in einer schnellen Next.js-App. Nutzer können Projekte erstellen, Mitglieder einladen, Aufgaben mit Labels und Fälligkeitsdaten priorisieren und den Fortschritt über Diagramme verfolgen.",
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
    "shadcn-ui",
    "react-query",
  ],
  techDesc: [
    {
      name: "Next.js",
      description:
        "- App-Router-basiertes React-Framework für Routing, Layouts und API-Routes, wodurch Coordina eine strukturierte Dashboard-Shell und flüssige Navigation erhält.",
      link: "https://nextjs.org/",
    },
    {
      name: "React",
      description:
        "- Komponentenbasierte UI mit Hooks für interaktive Kanban-Boards, Formulare und direktes Feedback innerhalb der Workspace-Erfahrung.",
      link: "https://react.dev/",
    },
    {
      name: "TypeScript",
      description:
        "- Streng typisierte Modelle für Workspaces, Projekte und Aufgaben reduzieren Laufzeitfehler und halten die Datenschicht vorhersehbar.",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Tailwind CSS",
      description:
        "- Utility-first Styling für den modernen Dashboard-Look, responsive Layouts sowie konsistente Abstände, Typografie und Themes.",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Appwrite",
      description:
        "- Übernimmt Authentifizierung, Datenbanken und Storage für Multi-Workspace-Daten, Berechtigungen und sichere Projekt-/Aufgaben-Persistenz.",
      link: "https://appwrite.io/",
    },
    {
      name: "shadcn/ui",
      description:
        "- Vorgefertigte barrierefreie UI-Primitives wie Dialoge, Buttons, Dropdowns und Tabellen, um die Oberfläche ohne schwere Custom Components hochwertig zu halten.",
      link: "https://ui.shadcn.com/",
    },
    {
      name: "React Query",
      description:
        "- Data-Fetching- und Caching-Schicht für optimistische Updates, Background-Refetching und eine schnelle UX über Boards und Kalender hinweg.",
      link: "https://tanstack.com/query/latest",
    },
  ],
  year: "2025",
  date: "2025-11-25",
  points: [
    {
      title: "Kanban-Boards für jedes Projekt",
      description:
        "Aufgaben per Drag & Drop zwischen Spalten verschieben, mit moderner Board-UI, Prioritäten, Labels, Fälligkeitsdaten und Zuständigkeiten.",
    },
    {
      title: "Workspaces, Projekte & Mitglieder",
      description:
        "Arbeit in Workspaces und Projekte organisieren, Teammitglieder einladen und Verantwortlichkeiten klar im richtigen Kontext halten.",
    },
    {
      title: "Kalender- und Planungsansichten",
      description:
        "Aufgaben und Deadlines in einer vollständigen Kalenderansicht visualisieren, um Überlastung, kommende Meilensteine und Planungslücken früh zu erkennen.",
    },
    {
      title: "Analytics & Einblicke",
      description:
        "Diagramme zu Workload, Statusverteilung und Fortschritt über die Zeit helfen Teams zu verstehen, wie sich Projekte entwickeln.",
    },
    {
      title: "Polierte, responsive UI mit Themes",
      description:
        "Ein sauberes Dashboard-Layout mit Tailwind, Radix UI sowie Dark-/Light-Mode für eine angenehme Erfahrung auf Desktop und Mobile.",
    },
  ],
  theme: {
    angle: 10,
    stops: [
      { color: "#0F4CD8", at: "25%" },
      { color: "#155DFB", at: "55%" },
      { color: "#3B7BFF", at: "90%" },
      { color: "#6FA0FF", at: "115%" },
    ],
    primary: "#155DFB",
  },
  calloutTitle:
    "📋 Plane, priorisiere und verfolge deine Projekte in einem zentralen Workspace",
  calloutDescription:
    "Coordina hilft dir, Arbeit in Projekte zu strukturieren, Aufgaben auf Kanban-Boards und Kalendern zu visualisieren und Teams mit Analytics sowie einer hochwertigen, responsiven UI auf Kurs zu halten.",
  whyBuilt:
    "Ich wollte ein Projektmanagement-Tool entwickeln, das sich so hochwertig wie Linear anfühlt, aber vollständig unter meiner Kontrolle steht – sowohl als reale Produktivitäts-App als auch als Spielwiese für moderne React-, Next.js-, Appwrite- und React-Query-Patterns. Coordina ist meine Interpretation eines fokussierten, meinungsstarken Projekt- und Aufgabenmanagers, den ich selbst gerne für persönliche Projekte und Kundenarbeit nutzen würde.",
  useCases: [
    "Sprints mit Kanban-Boards planen und den Fortschritt über mehrere Projekte hinweg verfolgen.",
    "Persönliche Aufgaben, Side Projects und langfristige Vorhaben in einem Dashboard verwalten.",
    "Kundenarbeit in separaten Workspaces organisieren und Deliverables klar abgrenzen.",
    "Die Kalenderansicht nutzen, um Deadlines abzustimmen, Überlastung zu vermeiden und kommende Wochen zu planen.",
    "Analytics auswerten, um zu erkennen, wo Aufgaben hängen bleiben und wie die Arbeitslast verteilt ist.",
  ],
  learnings: [
    "Eine klare Workspace → Projekt → Aufgabe-Hierarchie mit Appwrite Collections hält Berechtigungen überschaubar und skaliert besser als ein flaches Aufgabenmodell.",
    "Die Kombination aus React Query und optimistischen Updates lässt Drag-and-drop-Interaktionen sofort wirken, während Backend-Validierung weiterhin berücksichtigt wird.",
    "Ein Kanban-Board mit @hello-pangea/dnd zu bauen erfordert sorgfältigen Umgang mit Indizes und IDs, um Flackern und inkonsistente Reihenfolgen zu vermeiden.",
    "Die Integration von react-big-calendar mit typisierten Aufgabendaten macht Kalender-Sonderfälle wie Zeitzonen, ganztägige und zeitgebundene Events früh sichtbar.",
    "Zentrale Validierung mit Zod auf Client-Seite und in Hono-API-Routes reduziert doppelte Logik und verhindert, dass ungültige Aufgabenstates in die UI gelangen.",
  ],
};
