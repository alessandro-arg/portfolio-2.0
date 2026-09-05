import type { MetadataRoute } from "next";

import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = new URL(profile.contact.website);

  const projectRoutes = projects.flatMap((project) =>
    project.slug
      ? [
          {
            url: new URL(`/projects/${project.slug}`, baseUrl).href,
          },
        ]
      : [],
  );

  return [
    {
      url: new URL("/", baseUrl).href,
    },
    ...projectRoutes,
  ];
}
