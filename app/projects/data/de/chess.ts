import type { Project } from "../../types";

export const chess: Project = {
  title: "Chess²",
  smallDescription:
    "Online-Schachspiel mit Echtzeit-Multiplayer gegen Freunde, Stockfish-KI und Elo-Rangliste.",
  description:
    "Chess² ist ein modernes webbasiertes Schachspiel, in dem du in Echtzeit gegen Freunde spielen oder eine Stockfish-gestützte KI herausfordern kannst. Es bietet Benutzerkonten, Freundeslisten, ein Elo-Wertungssystem und detaillierte Spielzusammenfassungen. Im Hintergrund nutzt die Anwendung Firebase Realtime Database für Live-Partien, Firestore für Benutzerdaten sowie einen auf Render bereitgestellten Stockfish-Worker für schnelle und realistische KI-Gegner – alles eingebettet in eine responsive und hochwertige Benutzeroberfläche.",
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
        "- Standalone Components, typisiertes Routing und SSR sorgen für eine strukturierte Anwendung, flüssige Navigation und schnelle Ladezeiten.",
      link: "https://angular.dev/",
    },
    {
      name: "TypeScript",
      description:
        "- Starke Typisierung für Züge, Bretter, Partien und Benutzer hält die Schachlogik deterministisch und Refactorings sicher, während die Anwendung wächst.",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Tailwind CSS",
      description:
        "- Utility-first Styling für Schachbrett, Dashboard und Modals ermöglicht ein sauberes, responsives Layout und schnelle Designanpassungen.",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Firebase",
      description:
        "- Authentifizierung, Firestore, Realtime Database und Storage bilden die Grundlage für Benutzerkonten, Freundeslisten, Live-Partien und sichere Nutzerdaten.",
      link: "https://firebase.google.com/",
    },
    {
      name: "Stockfish",
      description:
        "- Eine leistungsstarke Open-Source-Schachengine, die über einen auf Render gehosteten Worker eingebunden wird und schnelle, realistische KI-Gegner bereitstellt.",
      link: "https://stockfishchess.org/",
    },
  ],
  year: "2025",
  date: "2025-09-24",
  points: [
    {
      title: "Echtzeit-Multiplayer",
      description:
        "Fordere Freunde zu Live-Partien heraus. Firebase Realtime Database synchronisiert Uhren, Züge und Spielstatus in Echtzeit.",
    },
    {
      title: "Stockfish-KI Integration",
      description:
        "Spiele gegen eine Stockfish-basierte KI über einen dedizierten Engine-Server. Züge werden sowohl von chess.js als auch von der Engine validiert.",
    },
    {
      title: "Konten, Freunde & Einladungen",
      description:
        "Melde dich über Firebase Auth an, füge Freunde hinzu, versende Einladungen und speichere alle Partien in deinem Profil und Verlauf.",
    },
    {
      title: "Elo-Wertungssystem",
      description:
        "Gewinne oder verliere Wertungspunkte nach bewerteten Partien über einen eigenen Elo-Service, der faire Matchups und Fortschritt fördert.",
    },
    {
      title: "Spielrückblick & Responsive UI",
      description:
        "Analysiere vergangene Partien im Dashboard und genieße eine mobilefreundliche Oberfläche, entwickelt mit Angular 17 und TailwindCSS.",
    },
  ],
  theme: {
    angle: 10,
    stops: [
      { color: "#4BBBF3", at: "25%" },
      { color: "#74CCF7", at: "55%" },
      { color: "#9ADAF9", at: "90%" },
      { color: "#C0E9FC", at: "115%" },
    ],
    primary: "#74CCF7",
  },
  calloutTitle:
    "♟️ Spiele online mit Freunden oder fordere Stockfish-KI heraus",
  calloutDescription:
    "Erstelle ein Konto, füge Freunde hinzu und starte Echtzeit-Partien. Verbessere deine Taktik gegen einen schnellen, Stockfish-basierten KI-Gegner direkt im Browser.",
  whyBuilt:
    "Ich wollte mehr als nur ein einfaches Schachbrett entwickeln: eine vollständige Multiplayer-Plattform mit Benutzerkonten, Wertungssystem und einem starken KI-Gegner. Chess² war die perfekte Möglichkeit, meine Leidenschaft für Schach mit modernen Angular-, Firebase- und SSR-Technologien zu verbinden und mich selbst herauszufordern, in wenigen Wochen eine hochwertige, reale Anwendung zu entwickeln.",

  useCases: [
    "Freundschafts- oder Ranglistenpartien direkt im Browser spielen.",
    "Gegen eine Stockfish-KI trainieren, um Eröffnungen und Taktiken zu verbessern.",
    "Einen Spiellink teilen und sofort losspielen – ganz ohne Installation.",
    "Vergangene Partien analysieren und die Entwicklung deiner Elo-Wertung verfolgen.",
    "Auf Desktop oder Smartphone schnelle Partien während Pausen spielen.",
  ],

  learnings: [
    "Ein deterministischer Spielablauf mit chess.js und serverseitiger Zugvalidierung verhindert illegale Positionen und Synchronisationsprobleme.",
    "Die Trennung zwischen UI-State und tatsächlichem Spielstatus vermeidet Animationsfehler und sorgt für stabile Wiederverbindungen während Live-Partien.",
    "Die Kombination aus Firebase Realtime Database für Partien und Firestore für Profile und Freundeslisten sorgt für effiziente Datenzugriffe und eine klare Datenstruktur.",
    "Die Integration eines externen Stockfish-Workers erfordert sorgfältiges Timeout-, Fehler- und Rate-Limit-Handling, damit die Benutzeroberfläche jederzeit reaktionsschnell bleibt.",
    "Die Entwicklung eines Elo-Systems auf Basis von Firebase-Daten hat mir gezeigt, wie man mit Konkurrenzsituationen, Wiederholungsversuchen und Sonderfällen wie abgebrochenen Partien umgeht.",
  ],
};
