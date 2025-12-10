import type { MetadataRoute } from "next";

const baseUrl = "https://www.alessandro-argenziano.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date("2025-12-10");

  return [
    {
      url: `${baseUrl}/`,
      lastModified: lastMod,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Projects
    {
      url: `${baseUrl}/projects/coordina`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/portfolio`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/dabubble`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/chess`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/join`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Resources
    {
      url: `${baseUrl}/bucket-list`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/my-setup`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // More
    {
      url: `${baseUrl}/links`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/attribution`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.5,
    },

    // Legal
    {
      url: `${baseUrl}/legal/privacy-policy`,
      lastModified: new Date("2025-10-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/terms`,
      lastModified: new Date("2025-10-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
