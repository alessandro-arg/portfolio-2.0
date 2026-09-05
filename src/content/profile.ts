import type { Profile } from "@/types/portfolio";

export const profile = {
  name: "Alessandro Argenziano",
  role: "Software Developer",
  location: "Germany",
  timeZone: "Europe/Berlin",
  heroSentences: [
    "Clean interfaces and solid foundations",
    "Building things for the web",
    "Learning DevOps and self-hosting",
    "Small details matter",
  ],
  about: [
    "I'm Alessandro, a software developer who enjoys building web applications from the interface down to the systems that support them.",
    "I like working across frontend, backend, and infrastructure, with a focus on clean code, thoughtful interfaces, and understanding how the pieces fit together.",
    "Outside of development, I like exploring new ideas, learning new things, and spending time in the mountains. Staying curious is a big part of both how I work and how I live.",
  ],
  contact: {
    heading: "Looking for a 9-month internship.",
    description:
      "I'm currently looking for a 9-month software development internship as part of my IHK retraining. If your team has an opportunity where I can contribute, learn, and grow, I'd love to hear from you.",
    email: "contact@alessandro-argenziano.com",
    phone: "+49 (0)160 92965227",
    website: "https://www.alessandro-argenziano.com",
    github: "https://github.com/alessandro-arg",
    githubUsername: "alessandro-arg",
    linkedin: "https://www.linkedin.com/in/alessandro-argenziano/",
  },
} satisfies Profile;
