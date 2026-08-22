import type { Profile } from "@/types/portfolio";

export const profile = {
  name: "Alessandro Argenziano",
  role: "Software Developer",
  location: "Germany",
  heroSentences: [
    "Clean interfaces and solid foundations",
    "Building things for the web",
    "Learning DevOps and self-hosting",
    "Small details matter",
  ],
  about: [
    "I'm Alessandro, a developer passionate about creating dynamic web applications. I enjoy working across frontend, backend, and infrastructure. I thrive on solving complex problems with clean, efficient code, and I'm always ready to learn more.",
    "When I'm not immersed in work, I'm exploring new ideas or new mountains and staying curious. Life is about balance, and I love embracing every part of it, especially on a mountain.",
    "I believe small daily progress leads to big results.",
  ],
  contact: {
    email: "contact@alessandro-argenziano.com",
    github: "https://github.com/alessandro-arg",
    linkedin: "https://www.linkedin.com/in/alessandro-argenziano/",
  },
} satisfies Profile;
