import type { Project } from "../../types";

export const altair: Project = {
  title: "Altair",
  smallDescription:
    "KI-gestützte Browser IDE mit Live-Code Ausführung und Terminal-Tools für die Entwicklung direkt im Web.",
  description:
    "Altair ist eine KI-gestützte Browser IDE, die Entwicklern dabei hilft, Projekte direkt im Browser zu erstellen, zu bearbeiten, auszuführen und weiterzuentwickeln. Sie kombiniert eine vollständige Coding Umgebung mit CodeMirror-basiertem Editor, WebContainers für die Ausführung im Browser und Xterm-Terminal Integration. Inngest-Workflows übernehmen Hintergrundautomatisierung und Agent-Aufgaben, während Clerk die Authentifizierung verwaltet.",
  src: "/images/altair_mockup.webp",
  href: "/projects/altair",
  slug: "altair",
  github: "https://github.com/alessandro-arg/altair",
  liveLink: "https://altair.alessandro-argenziano.com",
  technologies: ["next", "react", "ts", "tailwind", "clerk", "codemirror"],

  techDesc: [
    {
      name: "Next.js",
      description:
        "- App-Router-Grundlage für die Strukturierung der IDE-Shell, routenbasierte Workspaces, Serverlogik und eine schnelle moderne Web-App-Erfahrung.",
      link: "https://nextjs.org/",
    },
    {
      name: "React",
      description:
        "- Komponentenbasierte Architektur für Editor-Layout, Panels, Terminal-UI, KI-Interaktionen und alle interaktiven Funktionen auf Workspace-Ebene.",
      link: "https://react.dev/",
    },
    {
      name: "TypeScript",
      description:
        "- Strenge Typisierung für Editor-State, KI-Antworten, Dateistrukturen und UI-Logik, damit die IDE auch bei wachsender Komplexität wartbar bleibt.",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Tailwind CSS",
      description:
        "- Utility-first Styling für eine saubere, responsive IDE-Oberfläche mit schneller Iteration bei Abständen, Layout und Theming.",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Radix UI",
      description:
        "- Barrierefreie Low-Level-UI-Primitives für Menüs, Dialoge, Popovers, Tabs, Tooltips und weitere interaktive IDE-Steuerelemente.",
      link: "https://www.radix-ui.com/",
    },
    {
      name: "Clerk",
      description:
        "- Authentifizierung und Account-Verwaltung, damit Benutzer-Sessions, Workspaces und personalisierte Erfahrungen sicher verwaltet werden können.",
      link: "https://clerk.com/",
    },
    {
      name: "AI SDK",
      description:
        "- Einheitliche Schnittstelle zur Integration von LLM-Funktionen in die IDE, wodurch Chat, Code-Generierung und Assistant-Workflows leichter unterstützt werden können.",
      link: "https://sdk.vercel.ai/",
    },
    {
      name: "Anthropic + Google AI",
      description:
        "- Multi-Model-Provider-Unterstützung gibt Altair Flexibilität für unterschiedliche Assistant-Verhalten, Code-Aufgaben und Prompt-Workflows.",
      link: "https://ai.google.dev/",
    },
    {
      name: "Inngest",
      description:
        "- Event-getriebene Hintergrund-Workflows und Agent-Orchestrierung für lang laufende KI-Aufgaben, Wiederholungen und beobachtbare asynchrone Verarbeitung.",
      link: "https://www.inngest.com/",
    },
    {
      name: "CodeMirror 6",
      description:
        "- Zentraler Editor-Motor für syntaxbewusstes Bearbeiten, Sprachunterstützung, Suche, Theming, Minimap und ein echtes IDE-ähnliches Schreibgefühl.",
      link: "https://codemirror.net/",
    },
    {
      name: "WebContainers",
      description:
        "- Laufzeitumgebung im Browser, mit der Projekte direkt innerhalb der App ausgeführt werden können. Dadurch werden Live-Previews und echte Entwicklungsabläufe möglich, ohne den Browser zu verlassen.",
      link: "https://webcontainers.io/",
    },
    {
      name: "Xterm.js",
      description:
        "- Eingebettete Terminal-Unterstützung, damit Nutzer Befehle ausführen und direkt innerhalb der IDE mit der Entwicklungsumgebung interagieren können.",
      link: "https://xtermjs.org/",
    },
    {
      name: "Zustand",
      description:
        "- Leichtgewichtiges State Management für Editor-State, Workspace-Panels und interaktive IDE-Daten ohne unnötigen Boilerplate.",
      link: "https://zustand-demo.pmnd.rs/",
    },
    {
      name: "Zod",
      description:
        "- Schema-Validierung für sichereren Umgang mit Laufzeitdaten, besonders wenn KI-Ausgaben, Benutzereingaben und dynamische Konfiguration in einem System zusammenkommen.",
      link: "https://zod.dev/",
    },
    {
      name: "Sentry",
      description:
        "- Error-Monitoring und Observability-Tooling, um Fehler nachzuverfolgen und die Zuverlässigkeit einer komplexen interaktiven App zu verbessern.",
      link: "https://sentry.io/",
    },
  ],

  year: "2026",
  date: "2026-03-02",
  points: [
    {
      title: "KI-native Browser-IDE",
      description:
        "Altair ist rund um KI-gestützte Entwicklung aufgebaut und macht Generierung, Bearbeitung und Iteration zu einem zentralen Teil der Coding-Erfahrung statt nur zu einem zusätzlichen Feature.",
    },
    {
      title: "Echte Ausführung im Browser",
      description:
        "Mit WebContainers und Terminal-Unterstützung können Projekte direkt im Browser laufen, wodurch sich die IDE wie eine echte Entwicklungsumgebung anfühlt.",
    },
    {
      title: "Fortgeschrittene Editor-Erfahrung",
      description:
        "CodeMirror 6 ermöglicht ein modernes Editor-Setup mit Syntax-Unterstützung, Suche, Theming, Minimap und produktivitätsorientierten Erweiterungen.",
    },
    {
      title: "Workflow-Automatisierung mit Agenten",
      description:
        "Inngest und Agent-Tooling verarbeiten asynchrone KI-Operationen sauber, was besonders bei komplexen oder lang laufenden Coding-Aufgaben hilfreich ist.",
    },
    {
      title: "Polierte Developer Experience",
      description:
        "Resizable Panels, barrierefreie UI-Primitives, Motion, Flows und interaktive Tools sorgen dafür, dass sich der Workspace eher wie eine echte Desktop-IDE anfühlt.",
    },
  ],

  theme: {
    angle: 135,
    stops: [
      { color: "#6D5EF5", at: "20%" },
      { color: "#4F46E5", at: "50%" },
      { color: "#8B7CFF", at: "85%" },
      { color: "#B7ADFF", at: "115%" },
    ],
    primary: "#4F46E5",
  },

  calloutTitle:
    "🧠 Code schreiben, ausführen und mit KI in einer vollständigen Browser-IDE iterieren",
  calloutDescription:
    "Altair kombiniert Live-Ausführung, Terminal-Tools, KI-Unterstützung und Workflow-Automatisierung zu einem modernen Entwickler-Workspace im Browser, gebaut für schnelle Iteration.",
  whyBuilt:
    "Ich wollte ein KI-Produkt bauen, das sich eher wie ein echtes Entwicklerwerkzeug anfühlt als wie ein einfacher Chat. Altair ist meine Interpretation einer KI-nativen IDE: eine Umgebung, in der Code-Bearbeitung, Ausführung, Terminal-Zugriff und intelligente Unterstützung an einem Ort zusammenkommen. Ziel war es, etwas zu schaffen, das leistungsstark, modern und für echte Entwicklungsabläufe wirklich nützlich ist.",

  useCases: [
    "Code mit KI generieren oder verbessern, während man in einer echten browserbasierten Entwicklungsumgebung arbeitet.",
    "Projekte direkt im Browser ausführen und Änderungen schnell validieren, ohne den Workspace zu verlassen.",
    "Developer-Tools, UI-Ideen oder App-Konzepte in einer IDE prototypisieren, die Editor, Laufzeitumgebung und Assistant-Workflows kombiniert.",
  ],

  learnings: [
    "KI-Funktionen werden deutlich nützlicher, wenn sie direkt in den Entwicklungsworkflow eingebettet sind, statt isoliert in einer separaten Chat-Oberfläche zu existieren.",
    "Eine Browser-IDE braucht früh klare Entscheidungen zu Layout und State, weil Editor-Panels, Terminals und Assistant-Tools alle um Platz und Responsiveness konkurrieren.",
    "WebContainers ermöglichen eine deutlich überzeugendere IDE-Erfahrung, erfordern aber auch sorgfältiges Nachdenken über Runtime-Orchestrierung und UX-Feedback.",
    "Event-getriebene Workflows passen sehr gut zu KI-lastigen Produkten, besonders wenn Aufgaben mehrstufig, langsam oder wiederholbar sein müssen.",
    "Barrierefreie UI-Primitives und strukturierte Komponentensysteme machen einen großen Unterschied, damit sich ein komplexes Tool poliert und vorhersehbar anfühlt.",
  ],
};
