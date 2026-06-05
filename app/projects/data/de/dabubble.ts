import type { Project } from "../../types";

export const dabubble: Project = {
  title: "DABubble",
  smallDescription:
    "Slack-ähnliche Team-Chat-Anwendung mit Channels, Direktnachrichten, Threads, Reaktionen und Echtzeit-Statusanzeigen.",
  description:
    "DABubble ist eine moderne Chat-Anwendung. Sie bietet Echtzeit-Kommunikation über öffentliche Channels, private Channels und Direktnachrichten sowie Threads, Emoji-Reaktionen, Mentions und Online-Statusanzeigen. Die Anwendung basiert auf Firebase (Firestore, RTDB, Auth, Storage) und AngularFire, um Live-Updates, sichere Authentifizierung und eine responsive, barrierefreie Benutzeroberfläche bereitzustellen, die sich sowohl auf Desktop- als auch auf Mobilgeräten natürlich anfühlt.",
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
        "- Standalone Components, typisiertes Routing und SSR-Unterstützung bilden die Grundlage für die Workspace-Struktur, Channel-Layouts und geschützte Auth-Routen.",
      link: "https://angular.dev/",
    },
    {
      name: "TypeScript",
      description:
        "- Starke Typisierung für Benutzer, Channels, Nachrichten, Threads und Presence-Modelle sorgt für vorhersehbare Chatlogik und sichere Refactorings.",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Tailwind CSS",
      description:
        "- Utility-first Styling für das Slack-ähnliche Layout, responsive Sidebars und Content-Bereiche sowie barrierefreie Fokus- und Hover-States.",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Firebase",
      description:
        "- Authentifizierung, Firestore, RTDB und Storage ermöglichen sichere Logins, Echtzeit-Nachrichten, Presence-Tracking sowie Avatar- und Datei-Uploads.",
      link: "https://firebase.google.com/",
    },
    {
      name: "AngularFire",
      description:
        "- Verbindet Angular mit Firebase über typisierte Observables und vereinfacht Echtzeit-Listener sowie die Verwaltung des Authentifizierungsstatus.",
      link: "https://github.com/angular/angularfire",
    },
  ],
  year: "2025",
  date: "2025-07-14",
  points: [
    {
      title: "Channels & Direktnachrichten",
      description:
        "Organisiere Gespräche in öffentlichen oder privaten Channels sowie Direktnachrichten, ergänzt durch eine vertraute Sidebar- und Header-Struktur im Slack-Stil.",
    },
    {
      title: "Threads & Kontextbezogene Antworten",
      description:
        "Antworte auf einzelne Nachrichten in separaten Threads und halte aktive Channels übersichtlich, ohne den Kontext zu verlieren.",
    },
    {
      title: "Emoji-Reaktionen & Nachrichten bearbeiten",
      description:
        "Reagiere mit Emojis, bearbeite gesendete Nachrichten und halte Unterhaltungen lebendig, ohne zusätzliche Chat-Nachrichten zu erzeugen.",
    },
    {
      title: "Mentions & Online-Status",
      description:
        "Verwende @user- und #channel-Mentions sowie Online-, Offline- und Zuletzt-gesehen-Anzeigen auf Basis von Firebase Presence-Daten.",
    },
    {
      title: "Responsive & Barrierefreie UI",
      description:
        "Ein Tailwind-basiertes Layout, Tastatur-Navigation und ARIA-Rollen machen DABubble auf Laptops, Tablets und Smartphones gleichermaßen nutzbar.",
    },
  ],
  theme: {
    angle: 10,
    stops: [
      { color: "#4F5DFF", at: "25%" },
      { color: "#6C7BFF", at: "55%" },
      { color: "#8A96FF", at: "90%" },
      { color: "#A8B1FF", at: "115%" },
    ],
    primary: "#6C7BFF",
  },
  calloutTitle:
    "💬 Team-Chat in Echtzeit mit Channels, Direktnachrichten, Threads und Reaktionen",
  calloutDescription:
    "DABubble bringt moderne Teamkommunikation in den Browser: Erstelle Channels, sende Direktnachrichten, antworte in Threads, reagiere mit Emojis und sieh, wer online ist – alles mit Angular und Firebase umgesetzt.",
  whyBuilt:
    "Ich wollte verstehen, was nötig ist, um eine moderne Echtzeit-Messaging-Anwendung zu entwickeln: Presence-Tracking, Threads, Reaktionen und sichere Datenflüsse für mehrere Benutzer. DABubble wurde zu meiner Spielwiese für Angular 17, Firebase, Tailwind und moderne Echtzeit-UX-Patterns, während ich die Kollaborationsabläufe von Tools wie Slack und Discord nachgebaut habe.",

  useCases: [
    "Workspaces für kleine Teams erstellen und Unterhaltungen in thematische Channels organisieren.",
    "Direktnachrichten und Gruppen-Channels nutzen, um schnell ohne E-Mails zu kommunizieren.",
    "Aktive Channels übersichtlich halten, indem detaillierte Diskussionen in Threads ausgelagert werden.",
    "Über Online-Status und Zuletzt-gesehen-Zeiten erkennen, wer aktuell verfügbar ist.",
    "Die Anwendung während Coding-Sessions, Lerngruppen oder Side-Project-Kollaborationen nutzen.",
  ],

  learnings: [
    "Eine saubere Firestore-Struktur für Benutzer, Gruppen, private Chats, Nachrichten und Threads verhindert spätere, aufwendige Datenmigrationen.",
    "Die Kombination aus AngularFire-Streams und lokalem UI-State ermöglicht flüssige Echtzeit-Updates ohne unnötig komplexes globales State-Management.",
    "Mentions und Reaktionen sauber umzusetzen erfordert eine klare Trennung zwischen Nachrichteninhalt, Metadaten und aggregierten Reaktionswerten.",
    "Presence-Tracking mit Firebase RTDB und Heartbeats ist leistungsstark, benötigt aber sorgfältige Timeouts und Bereinigungsvorgänge, um zuverlässig zu bleiben.",
    "Frühzeitig in Barrierefreiheit zu investieren – Fokusmanagement, ARIA-Rollen und Tastaturkürzel – sorgt dafür, dass eine komplexe Chat-Oberfläche deutlich hochwertiger wirkt.",
  ],
};
