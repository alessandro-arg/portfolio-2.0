import type { Project } from "../../types";

export const vibe: Project = {
  title: "Vibe",
  smallDescription:
    "KI-Website-Builder, der aus einer einfachen Eingabe moderne Next.js-Anwendungen erstellt und in deinem persönlichen Workspace speichert.",

  description:
    "Vibe ist ein KI-gestützter Website-Builder, der moderne Next.js-Anwendungen generiert. Nutzer beschreiben die gewünschte Website, anschließend erstellt Vibe Seiten und Komponenten, verbessert diese durch geführte Iterationen und hält alle Änderungen über Hintergrund-Workflows nachvollziehbar. Eine Preview-Sandbox führt den generierten Code sicher aus, während eine typsichere API-Schicht mit tRPC und eine Prisma-basierte Datenbank Projekte, Revisionen und Veröffentlichungsinformationen verwalten.",

  src: "/images/vibe_mockup.webp",
  href: "/projects/vibe",
  slug: "vibe",
  github: "https://github.com/alessandro-arg/vibe",
  liveLink: "https://vibe.alessandro-argenziano.com",

  technologies: [
    "next",
    "react",
    "ts",
    "tailwind",
    "shadcn-ui",
    "trpc",
    "prisma",
    "clerk",
    "react-query",
    "code-rabbit",
  ],

  techDesc: [
    {
      name: "Next.js",
      description:
        "- App-Router-Architektur für eine strukturierte Produktoberfläche (Builder, Preview, Projekt-Routing) sowie Server Components und Actions für eine besonders schnelle User Experience.",
      link: "https://nextjs.org/",
    },
    {
      name: "React",
      description:
        "- Komponentenbasierte UI für den Builder-Workspace, Bearbeitungsabläufe und interaktive Vorschau-Panels.",
      link: "https://react.dev/",
    },
    {
      name: "TypeScript",
      description:
        "- End-to-End-Typisierung für Builder-Entitäten wie Projekte, Seiten und Revisionen sorgt für eine sichere und wartbare Codebasis.",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Tailwind CSS",
      description:
        "- Utility-first Styling für ein modernes, responsives Dashboard mit konsistenten Abständen, Typografie und Theming.",
      link: "https://tailwindcss.com/",
    },
    {
      name: "shadcn/ui",
      description:
        "- Vorgefertigte barrierefreie UI-Primitives wie Dialoge, Buttons, Dropdowns und Tabellen sorgen für eine hochwertige Benutzeroberfläche ohne komplexe Eigenentwicklungen.",
      link: "https://ui.shadcn.com/",
    },
    {
      name: "tRPC",
      description:
        "- Typsichere API-Schicht zwischen Next.js und der Serverlogik, ideal für komplexe Builder-Workflows und stark typisierte Mutationen.",
      link: "https://trpc.io/",
    },
    {
      name: "Prisma",
      description:
        "- ORM-Schicht zur Speicherung von Projekten, Revisionen und Veröffentlichungsdaten mit sauberem Datenmodell und zuverlässigen Migrationen.",
      link: "https://www.prisma.io/",
    },
    {
      name: "Inngest",
      description:
        "- Hintergrund-Workflows für KI- und Agentenprozesse wie Generierung, Iterationen und langlaufende Aufgaben inklusive Retries und Monitoring.",
      link: "https://www.inngest.com/",
    },
    {
      name: "Clerk",
      description:
        "- Authentifizierung und Benutzerverwaltung, damit Projekte sicher Benutzerkonten zugeordnet werden können.",
      link: "https://clerk.com/",
    },
    {
      name: "TanStack Query",
      description:
        "- Clientseitiges Caching und Async-State-Management für eine schnelle Builder-Experience mit optimistischen Updates und stabilen Ladezuständen.",
      link: "https://tanstack.com/query/latest",
    },
    {
      name: "CodeRabbit",
      description:
        "- KI-gestützter Code-Review-Assistent, der Pull Requests analysiert, Verbesserungsvorschläge macht, potenzielle Fehler erkennt und eine konsistente Codequalität unterstützt.",
      link: "https://coderabbit.ai/",
    },
  ],

  year: "2026",
  date: "2026-01-05",

  points: [
    {
      title: "Von einer Eingabe zur fertigen Website",
      description:
        "Erstelle eine mehrseitige Website aus einer kurzen Beschreibung und verbessere anschließend Inhalte, Layouts und Komponenten durch schnelle Iterationen.",
    },
    {
      title: "E2B Preview Sandbox",
      description:
        "Generierter Code wird in einer isolierten Vorschauumgebung ausgeführt, sodass Änderungen sicher getestet werden können, ohne die Hauptanwendung zu beeinflussen.",
    },
    {
      title: "Revisionen & Sichere Iteration",
      description:
        "Jede Generierung wird als Revision gespeichert, wodurch Experimente, Vergleiche und Rollbacks auf stabile Versionen jederzeit möglich sind.",
    },
    {
      title: "Typsichere Builder-API",
      description:
        "tRPC und TypeScript sorgen für vorhersehbare Mutationen wie Seiten erstellen, Sektionen neu generieren oder Projekte veröffentlichen und verhindern Laufzeitfehler.",
    },
    {
      title: "Hintergrund-Workflows mit Agenten",
      description:
        "Inngest übernimmt langlaufende Generierungsprozesse inklusive Logging, Retries und klarer Trennung zwischen UI-Aktionen und asynchroner Verarbeitung.",
    },
  ],

  theme: {
    angle: 10,
    stops: [
      { color: "#FF7A45", at: "25%" },
      { color: "#C96342", at: "55%" },
      { color: "#FF9A6A", at: "90%" },
      { color: "#FFC2A3", at: "115%" },
    ],
    primary: "#C96342",
  },

  calloutTitle:
    "⚡ Erstelle und verbessere Websites mit KI und nutze die Vorlagen für deine eigenen Projekte",

  calloutDescription:
    "Vibe verwandelt einfache Eingaben in bearbeitbare Websites mit Live-Preview, Hintergrund-Workflows und einem typsicheren Technologie-Stack, der auch bei wachsendem Funktionsumfang zuverlässig bleibt.",

  whyBuilt:
    "Ich wollte ein echtes KI-Produkt mit einer starken technischen Grundlage entwickeln: schnelle Benutzeroberflächen, sichere Code-Ausführung, nachvollziehbare Hintergrundprozesse und vollständige Typsicherheit. Vibe ist meine Interpretation eines praktischen KI-Website-Builders, der schnelle Iterationen ermöglicht und gleichzeitig durch tRPC, Prisma und strukturierte Workflows langfristig wartbar bleibt.",

  useCases: [
    "Eine Landingpage aus einer kurzen Beschreibung generieren und einzelne Bereiche innerhalb weniger Minuten anpassen.",
    "Mehrere Varianten einer Website erstellen und Revisionen speichern, auf die jederzeit zurückgegriffen werden kann.",
    "Marketing-Websites und Prototypen schnell mit einer modernen und responsiven UI erstellen.",
  ],

  learnings: [
    "Langlaufende KI-Funktionen wirken deutlich zuverlässiger, wenn sie als Hintergrund-Workflows mit klaren Zustandsübergängen und Retries modelliert werden.",
    "Eine typsichere API mit tRPC reduziert Reibungsverluste erheblich, wenn die UI viele feingranulare Mutationen benötigt.",
    "Die isolierte Ausführung von generiertem Code ist essenziell für Stabilität und Sicherheit bei dynamischer Codegenerierung.",
    "Ein Datenmodell rund um Projekte, Seiten und Revisionen macht Iteration zu einem zentralen Bestandteil des Produkts statt zu einer nachträglichen Ergänzung.",
    "Builder-Oberflächen profitieren enorm von barrierefreien UI-Primitives wie Menüs, Dialogen und Tooltips, da sie Interaktionen vorhersehbarer und effizienter machen.",
  ],
};
