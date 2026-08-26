import type { ExperienceOrganization } from "@/types/portfolio";

export const experience = [
  {
    id: "gfn",
    name: "GFN",
    website: "https://www.gfn.de/",
    logo: "/companies/gfn.svg",
    logoDark: "/companies/gfn-dark.svg",
    location: "Donaueschingen, Germany",
    locationType: "hybrid",
    positions: [
      {
        id: "application-development-retraining",
        title: "Fachinformatiker für Anwendungsentwicklung",
        type: "Retraining",
        startDate: "2025-08",
        highlights: [
          "Learning software development with a focus on structured, maintainable code and practical application development.",
          "Building foundational knowledge in networking, server setup and maintenance, project management, and quality assurance.",
          "Learning to understand client requirements and translate them into technical solutions.",
          "Developing practical experience with programming languages including Java and Python.",
        ],
        technologies: ["java", "python"],
        skills: [
          "Software Development",
          "Project Management",
          "Networking",
          "Server Administration",
          "Database Fundamentals",
          "Quality Assurance",
          "Requirements Analysis",
        ],
      },
    ],
  },
  {
    id: "developer-akademie",
    name: "Developer Akademie",
    website: "https://developerakademie.com/",
    logo: "/companies/developer-akademie.svg",
    location: "Munich, Germany",
    locationType: "remote",
    positions: [
      {
        id: "frontend-development-program",
        title: "Frontend Development Program",
        type: "Part-time",
        startDate: "2024-04",
        endDate: "2025-07",
        highlights: [
          "Completed a part-time frontend development program alongside full-time employment, focused on Angular and TypeScript.",
          "Built responsive interfaces from Figma designs using HTML, CSS/SCSS, JavaScript, and frontend component libraries.",
          "Collaborated with other developers on team projects using Git, GitHub, Scrum, and Kanban workflows.",
          "Worked with APIs, Firebase, authentication, sessions, HTTP requests, test automation, and basic IT security concepts.",
          "Used AI-assisted tools for debugging and software development.",
        ],
        technologies: [
          "angular",
          "typescript",
          "javascript",
          "firebase",
          "git",
        ],
        skills: [
          "UI/UX Implementation",
          "API Integration",
          "Authentication",
          "Agile Development",
          "Team Collaboration",
        ],
      },
    ],
  },
  {
    id: "sonnenhof-sonnhalde",
    name: "Sonnenhof & Sonnhalde",
    website: "https://sonnenhof-sonnhalde.de/",
    logo: "/companies/sonnenhof-sonnhalde.webp",
    location: "Birkendorf, Germany",
    locationType: "on-site",
    positions: [
      {
        id: "restaurant-manager",
        title: "Restaurant Manager",
        type: "Full-time",
        startDate: "2021-09",
        endDate: "2025-07",
        highlights: [
          "Led a five-person team and coordinated day-to-day restaurant operations.",
          "Managed POS systems, hotel software, staff scheduling, monthly administrative processes, and digital ordering workflows.",
          "Contributed to record F&B revenue in 2023 through structured operations and efficient use of internal systems.",
        ],
        skills: ["Team Leadership", "Operations Management", "Digital Systems"],
      },
    ],
  },
] satisfies readonly ExperienceOrganization[];
