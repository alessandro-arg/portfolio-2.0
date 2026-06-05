import type { Project } from "../../types";

export const portfolio: Project = {
  title: "Portfolio",
  smallDescription:
    "Animationsreiches Entwickler-Portfolio mit Case Studies, Skills, Ressourcen und einem hochwertigen Kontaktablauf.",
  description:
    "Dieses Portfolio ist meine persönliche Website der zweiten Generation: ein modernes, animationsstarkes Entwickler-Portfolio, gebaut mit Next.js und Tailwind CSS. Es präsentiert ausgewählte Case Studies, Skills, Berufserfahrung, Testimonials und Ressourcenseiten wie meine Bucket List und mein Setup – alles eingebettet in ein responsives, theme-fähiges Layout. Die Website ist gleichzeitig meine professionelle Online-Präsenz und ein Playground für Motion Design und contentgetriebene UI.",
  src: "/images/portfolio_mockup.webp",
  href: "/projects/portfolio",
  slug: "portfolio",
  technologies: [
    "next",
    "react",
    "ts",
    "tailwind",
    "shadcn-ui",
    "framer",
    "gsap",
    "vercel",
  ],
  techDesc: [
    {
      name: "Next.js",
      description:
        "- App-Router-basiertes Framework für Routing, verschachtelte Layouts, Metadata und Bildoptimierung für ein schnelles, SEO-freundliches Portfolio.",
      link: "https://nextjs.org/",
    },
    {
      name: "React",
      description:
        "- Komponentenbasierte UI für Hero-Bereich, Bento-Sektionen, Carousels und wiederverwendbare Cards, die Projekte, Skills und Ressourcen strukturieren.",
      link: "https://react.dev/",
    },
    {
      name: "TypeScript",
      description:
        "- Stark typisierte Komponenten und Konfigurationen für Projekte, Skills, Testimonials und Seiten, wodurch contentgetriebene Bereiche sicher und vorhersehbar bleiben.",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Tailwind CSS",
      description:
        "- Utility-first Styling für Bento-Grid, responsive Layouts, Typografie und das gesamte Light-/Dark-Designsystem der Website.",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Framer Motion",
      description:
        "- Motion-Library für flüssige Section-Transitions, Hover-Interaktionen und subtile Micro-Animations, die die UI lebendig wirken lassen, ohne die Performance zu belasten.",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "Fumadocs",
      description:
        "- Dokumentations- und Syntax-Highlighting-Tooling für „More“- und Ressourcenseiten, wodurch mein Portfolio wie ein kleiner persönlicher Docs-Hub funktioniert.",
      link: "https://fumadocs.vercel.app/",
    },
    {
      name: "shadcn/ui",
      description:
        "- Vorgefertigte barrierefreie UI-Primitives wie Dialoge, Buttons, Dropdowns und Tabellen, um die Oberfläche ohne schwere Custom Components hochwertig zu halten.",
      link: "https://ui.shadcn.com/",
    },
    {
      name: "Resend",
      description:
        "- E-Mail- und Analytics-Integrationen für zuverlässige Kontaktformular-Zustellung und Einblicke darin, wie Besucher Projekte und Sektionen ansehen.",
      link: "https://resend.com/",
    },
  ],
  year: "2025",
  date: "2025-11-03",
  points: [
    {
      title: "Animationsgetriebener Hero & visuelle Identität",
      description:
        "Landing-Bereich mit animiertem Hintergrund und einer klaren Headline, die mich als Full-Stack-Entwickler für schnelle, skalierbare Anwendungen positioniert.",
    },
    {
      title: "Ausgewählte Case Studies & Projekte",
      description:
        "Featured Case Studies auf der Startseite und eine eigene /projects-Route, jeweils mit fokussierten Beschreibungen, Tech-Stacks und detaillierten Einblicken in ausgewählte Arbeiten.",
    },
    {
      title: "Skills, Erfahrung & Testimonials",
      description:
        "Ein Skills-Bereich, eine Timeline zur Berufserfahrung und ein animiertes Testimonial-Carousel zeigen sowohl technische Breite als auch Social Proof.",
    },
    {
      title: "Ressourcenseiten & persönlicher Hub",
      description:
        "Zusätzliche Seiten wie Bucket List, My Setup und nützliche Links machen das Portfolio zu einem zentralen Hub für meine Tools, Ziele und persönlichen Interessen.",
    },
    {
      title: "Responsive, thematisierte UI mit guter UX",
      description:
        "Dark-/Light-Mode, barrierefreie Navigation und ein Layout, das für Mobile, Tablet und Desktop optimiert ist, machen die Website auf jedem Gerät angenehm nutzbar.",
    },
  ],
  theme: {
    angle: 10,
    stops: [
      { color: "#4FCBFF", at: "30%" },
      { color: "#66D4FF", at: "60%" },
      { color: "#80DDFF", at: "90%" },
      { color: "#99E5FF", at: "115%" },
    ],
    primary: "#4FCBFF",
  },
  gettingStarted: false,
  calloutTitle:
    "🎨 Ein lebendiges, animationsreiches Portfolio für moderne Webprojekte",
  calloutDescription:
    "Portfolio² ist mein Zuhause im Web: ein Ort, um meine besten Arbeiten zu entdecken, zu sehen, wie ich über UI und UX denke, und ein Gefühl für die Tools und Workflows zu bekommen, die ich täglich nutze.",
  whyBuilt:
    "Ich wollte ein Portfolio, das sich genauso bewusst gestaltet anfühlt wie die Produkte, die ich baue – etwas, das über eine statische Projektliste hinausgeht. Mein Portfolio ist sowohl ein professionelles Showcase als auch ein experimenteller Playground, in dem ich mein Designsystem weiterentwickeln, Animationen ausprobieren, SEO-Patterns testen und meine Geschichte für Recruiter und Kunden aktuell halten kann.",
  learnings: [
    "Die Strukturierung eines Next.js-App-Router-Projekts mit gemeinsamen Layouts, Metadata und segmentierten Routen hält ein mehrseitiges Portfolio auch bei Wachstum wartbar.",
    "Die Kombination aus Framer Motion und GSAP braucht eine klare Animationsarchitektur, damit globale Transitions, Hover-States und Scroll-Effekte nicht miteinander konkurrieren.",
    "Der Aufbau von Carousels und Timelines mit Embla und eigenen Komponenten hat mir gezeigt, wie man Barrierefreiheit, Tastaturnavigation und flüssige Drag-Interaktionen sauber umsetzt.",
    "Die Einrichtung von next-themes und SEO-Tooling inklusive Open-Graph-Tags und App-Icons hat mich intensiver über Lokalisierung, Theming und Auffindbarkeit nachdenken lassen.",
    "Das Portfolio als Content-System mit typisierten Daten für Projekte, Skills, Testimonials und Ressourcenseiten zu behandeln, macht Iterationen deutlich einfacher, ohne UI-Logik neu schreiben zu müssen.",
  ],
};
