import type { Project } from "../../types";

export const join: Project = {
  title: "Join",
  smallDescription:
    "Kanban-basiertes Projektboard für visuelles Aufgabenmanagement und Zusammenarbeit.",
  description:
    "Join ist ein Aufgabenmanagement-Tool, das mit Vanilla JavaScript, HTML und CSS entwickelt wurde. Es bietet ein Drag-and-Drop-Kanban-Board, auf dem Aufgaben zwischen verschiedenen Phasen verschoben werden können. Jede Aufgabe kann zusätzliche Informationen wie Beschreibung, Fälligkeitsdatum, Priorität, Kategorie und zugewiesene Kontakte enthalten. Die Anwendung entstand als Teamprojekt und legt den Fokus auf solide Webentwicklungs-Grundlagen.",
  src: "/images/join_mockup.webp",
  href: "/projects/join",
  liveLink: "https://join.alessandro-argenziano.com",
  slug: "join",
  github: "https://github.com/alessandro-arg/join",
  technologies: ["js", "sass", "firebase"],
  techDesc: [
    {
      name: "JavaScript",
      description:
        "- Vanilla JavaScript steuert die gesamte Anwendung: Drag-and-Drop-Interaktionen, Aufgabenverwaltung, Board-Filterung und State-Management ohne Framework.",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "HTML",
      description:
        "- Semantische Multi-Page-Struktur für Login, Board, Aufgabenverwaltung, Kontakte, Dashboard und Hilfeseiten als Grundlage der Benutzeroberfläche.",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      description:
        "- Individuelles Styling für das Kanban-Board, Modals, responsive Layouts sowie Hover- und Fokus-States für ein hochwertiges App-Gefühl.",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "Firebase",
      description:
        "- Backend zur Speicherung von Aufgaben, Benutzern und Board-Daten mit Echtzeit-Synchronisierung zwischen mehreren Clients.",
      link: "https://firebase.google.com/",
    },
  ],
  year: "2024",
  date: "2024-01-15",
  points: [
    {
      title: "Drag-and-Drop Kanban-Board",
      description:
        "Aufgaben können intuitiv zwischen Spalten wie To Do, In Progress, Feedback und Done verschoben werden.",
    },
    {
      title: "Detaillierte Aufgabenverwaltung",
      description:
        "Ergänze Aufgaben mit Beschreibungen, Fälligkeitsdaten, Prioritäten, Kategorien und zuständigen Kontakten, damit alle relevanten Informationen an einem Ort verfügbar sind.",
    },
    {
      title: "Kontaktverwaltung",
      description:
        "Verwalte Kontakte und ordne sie Aufgaben zu, um Verantwortlichkeiten innerhalb des Boards klar zu definieren.",
    },
    {
      title: "Mehrseitige Anwendungsstruktur",
      description:
        "Eigene Bereiche für Aufgabenverwaltung, Board-Ansicht, Kontakte, Dashboard sowie Hilfe- und rechtliche Seiten sorgen für eine übersichtliche Navigation.",
    },
    {
      title: "Responsive Layout & Benutzerfreundlichkeit",
      description:
        "Ein individuelles CSS-Layout für verschiedene Bildschirmgrößen sowie klare Fokuszustände und zugängliche Interaktionen für den täglichen Einsatz.",
    },
  ],
  theme: {
    angle: 10,
    stops: [
      { color: "#1F2937", at: "25%" },
      { color: "#2B3647", at: "55%" },
      { color: "#3A475C", at: "90%" },
      { color: "#4B5A73", at: "115%" },
    ],
    primary: "#2B3647",
  },
  calloutTitle:
    "🧩 Visuelles Kanban-Board zur Organisation von Aufgaben und Workflows",
  calloutDescription:
    "Mit Join kannst du Aufgaben erstellen, Kontakten zuweisen und über ein Kanban-Board organisieren, sodass jederzeit sichtbar bleibt, was offen, in Bearbeitung oder bereits erledigt ist.",
  learnings: [
    "Eine durchdachte Datenstruktur für Aufgaben, Statuswerte, Kategorien und Kontakte erleichtert spätere Funktionen wie Filterung und Suche erheblich.",
    "Die Umsetzung von Drag-and-Drop mit der nativen HTML5-API erfordert sorgfältigen Umgang mit Indizes, Drop-Zonen und visuellem Feedback.",
    "Eine zentrale Quelle für den Aufgabenstatus und das erneute Rendern auf Basis dieses States verhindert schwer auffindbare DOM-Synchronisationsfehler.",
    "Die Aufteilung der Logik in kleinere Module wie Board, Aufgabenverwaltung, Kontakte und Dashboard verbessert die Wartbarkeit eines wachsenden Vanilla-JavaScript-Projekts.",
    "Die Zusammenarbeit in einem fünfköpfigen Team hat die Bedeutung von Git-Workflows, konsistenten Coding-Standards und klaren UI/UX-Entscheidungen verdeutlicht.",
  ],
};
