import type { Project } from "../types";

export const portfolio: Project = {
  title: "Portfolio",
  smallDescription:
    "Animation-rich developer portfolio with case studies, skills, resources, and a polished contact flow.",
  description:
    "This portfolio is my second-generation personal site: a modern, animation-heavy developer portfolio built with Next.js and Tailwind CSS. It showcases curated case studies, skills, work experience, testimonials, and resource pages like my bucket list and setup, all wrapped in a responsive, theme-aware layout. The site doubles as both my professional presence and a playground for motion and content-driven UI.",
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
        "- App Router-based framework powering routing, nested layouts, metadata, and image optimization for a fast, SEO-friendly portfolio.",
      link: "https://nextjs.org/",
    },
    {
      name: "React",
      description:
        "- Component-driven UI for the hero, bento-style sections, carousels, and reusable cards that structure projects, skills, and resources.",
      link: "https://react.dev/",
    },
    {
      name: "TypeScript",
      description:
        "- Strongly typed components and config for projects, skills, testimonials, and pages, keeping content-driven sections safe and predictable.",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Tailwind CSS",
      description:
        "- Utility-first styling for the bento grid, responsive layouts, typography, and the overall light/dark visual system of the site.",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Framer Motion",
      description:
        "- Motion librarie for smooth section transitions, hover interactions, and subtle micro-animations that make the UI feel alive without hurting performance.",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "Fumadocs",
      description:
        "- Documentation and syntax-highlighting tooling for the “More” and resource pages, letting me treat my portfolio like a tiny personal docs hub.",
      link: "https://fumadocs.vercel.app/",
    },
    {
      name: "shadcn/ui",
      description:
        "- Prebuilt accessible UI primitives (dialogs, buttons, dropdowns, tables) to keep the interface polished without heavy custom components.",
      link: "https://ui.shadcn.com/",
    },
    {
      name: "Resend",
      description:
        "- Email and analytics integrations for reliable contact form delivery and insight into how visitors browse projects and sections.",
      link: "https://resend.com/",
    },
  ],
  year: "2025",
  date: "2025-11-03",
  points: [
    {
      title: "Animation-Driven Hero & Visual Identity",
      description:
        "Landing section with animated background, and a strong headline that frames me as a full-stack developer focused on fast, scalable apps.",
    },
    {
      title: "Curated Case Studies & Projects",
      description:
        "Featured case studies on the homepage and a dedicated /projects route, each with focused descriptions, tech stacks, and deep dives into selected work.",
    },
    {
      title: "Skills, Experience & Testimonials",
      description:
        "A skills section, work experience timeline, and an animated testimonials carousel that highlight both technical breadth and social proof.",
    },
    {
      title: "Resource Pages & Personal Hub",
      description:
        "Extra pages like Bucket List, My Setup, and useful links turn the portfolio into a central hub for my tools, goals, and personal interests.",
    },
    {
      title: "Responsive, Themed UI with Good UX",
      description:
        "Dark/light mode, accessible navigation, and layout tuned for mobile, tablet, and desktop make the site pleasant to explore on any device.",
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
  calloutTitle: "🎨 A living, animation-rich portfolio for modern web projects",
  calloutDescription:
    "Portfolio² is my home on the web: a place to explore my best work, see how I think about UI and UX, and get a feel for the tools and workflows I use every day.",
  whyBuilt:
    "I wanted a portfolio that felt as intentional as the products I build. Something that goes beyond a static list of projects. My portfolio is both a professional showcase and an experimental playground where I can refine my design system, push animations, test SEO patterns, and keep my story up to date for recruiters and clients.",
  learnings: [
    "Structuring a Next.js App Router project with shared layouts, metadata, and segmented routes keeps a multi-page portfolio maintainable as it grows.",
    "Combining Framer Motion and GSAP requires a clear animation architecture so that global transitions, hover states, and scroll effects don't compete with each other.",
    "Building carousels and timelines with Embla and custom components taught me how to handle accessibility, keyboard navigation, and smooth drag interactions.",
    "Setting up next-themes, and SEO tooling (including Open Graph tags and app icons) made me think deeply about localization, theming, and discoverability.",
    "Treating the portfolio as a content system with typed data for projects, skills, testimonials, and resource pages makes it much easier to iterate without rewriting UI logic.",
  ],
};
