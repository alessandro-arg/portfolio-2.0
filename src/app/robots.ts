import type { MetadataRoute } from "next";

import { profile } from "@/content/profile";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = new URL(profile.contact.website);

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", baseUrl).href,
  };
}
