import type { Project } from "../../types";

export const archivio: Project = {
  title: "Archivio",
  smallDescription:
    "Minimalistische OTP-basierte Storage-App, um Dateien sicher hochzuladen, zu organisieren und von überall darauf zuzugreifen.",
  description:
    "Archivio ist eine leichtgewichtige persönliche Storage-Web-App mit Fokus auf schnellen Zugriff und einfache Sicherheit. Nutzer authentifizieren sich per Einmalpasswort und können anschließend Dateien in einem übersichtlichen Dashboard hochladen und verwalten. Sie ist als „private Drive“-Lösung mit moderner UI, responsiven Layouts und einem klaren Datenmodell für Datei-Metadaten und Storage-Objekte konzipiert.",
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
        "- App-Router-basiertes Framework für Routing, Server Actions/API Routes und ein strukturiertes Dashboard-Layout mit schneller Navigation.",
      link: "https://nextjs.org/",
    },
    {
      name: "React",
      description:
        "- Komponentenbasierte UI für Login-Flow, Datei-Tabellen/Grid-Ansichten, Upload-Dialoge und interaktive Dateiaktionen.",
      link: "https://react.dev/",
    },
    {
      name: "TypeScript",
      description:
        "- Typisierte Modelle für Nutzer, Datei-Metadaten und Upload-States, damit UI und Serverlogik vorhersehbar und sicher bleiben.",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Tailwind CSS",
      description:
        "- Utility-first Styling für eine saubere, responsive Oberfläche mit Dashboard-Abständen, Typografie und mobilen Layouts.",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Appwrite",
      description:
        "- Übernimmt Authentifizierung, Datenbanken und Storage für Workspace-Daten, Berechtigungen und sichere Projekt-/Task-Persistenz.",
      link: "https://appwrite.io/",
    },
    {
      name: "shadcn/ui",
      description:
        "- Vorgefertigte barrierefreie UI-Primitives wie Dialoge, Buttons, Dropdowns und Tabellen, um die Oberfläche ohne schwere Custom Components hochwertig zu halten.",
      link: "https://ui.shadcn.com/",
    },
  ],
  year: "2025",
  date: "2025-12-22",
  points: [
    {
      title: "OTP / Passwortloser Login",
      description:
        "Anmeldung über Einmalcodes statt Passwörter, wodurch der Authentifizierungsprozess einfach und benutzerfreundlich bleibt.",
    },
    {
      title: "Dateien sicher hochladen & speichern",
      description:
        "Dateien werden in ein Storage-Backend hochgeladen und bleiben privat für den authentifizierten Nutzer.",
    },
    {
      title: "Dateibibliothek-Dashboard",
      description:
        "Gespeicherte Dateien können über eine saubere UI mit Listen-/Grid-Ansicht, schnellen Vorschauen/Metadaten und einfachen Aktionen durchsucht werden.",
    },
    {
      title: "Organisation über Metadaten",
      description:
        "Datei-Metadaten wie Name, Größe, Typ und Zeitstempel werden gepflegt, um Sortierung, Filterung und zukünftige Ordner-/Tag-Funktionen zu unterstützen.",
    },
    {
      title: "Polierte responsive UI",
      description:
        "Mobilefreundliche Layouts und moderne Komponenten wie Dialoge, Dropdown-Aktionen und Toasts sorgen für eine angenehme UX.",
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
  calloutTitle:
    "🗄️ Deine Dateien, ordentlich gespeichert mit passwortlosem Zugriff",
  calloutDescription:
    "Archivio hält Storage einfach: OTP-Login, ein sauberes Dashboard und sichere Datei-Uploads – gebaut als leichtgewichtiger persönlicher Cloud-Drive.",
  whyBuilt:
    "Ich wollte eine kompakte, moderne Storage-Web-App bauen, die Komplexität reduziert: passwortlose Authentifizierung, unkomplizierte Uploads und eine klare UI. Archivio ist ein praktisches Projekt, um Dashboard-UX-Patterns, Storage-Workflows und eine solide Next.js-Architektur weiterzuentwickeln.",
  useCases: [
    "Persönliche Dokumente speichern und von jedem Gerät darauf zugreifen.",
    "Dateien zwischen Geräten hochladen und teilen, ohne USB-Sticks zu verwenden.",
    "Ein leichtgewichtiges privates Archiv für PDFs, Bilder und Exporte führen.",
    "Als Basis nutzen, um später Ordner/Tags, Sharing-Links oder Team-Bereiche hinzuzufügen.",
  ],
  learnings: [
    "Eine klare Trennung zwischen Storage-Objekten und Metadaten macht Listen und Suchen schneller und hält die UI einfach.",
    "Uploads fühlen sich deutlich besser an, wenn es Fortschrittsfeedback, optimistische UI-Updates und klare Aktionen nach dem Upload gibt.",
    "Storage-Berechtigungen früh zu planen verhindert aufwendige Refactorings, wenn später Sharing oder Multi-Device-Sessions ergänzt werden.",
  ],
};
