import type { Project } from "../types";

import { coordina } from "./coordina";
import { portfolio } from "./portfolio";
import { archivio } from "./archivio";
import { dabubble } from "./dabubble";
import { chess } from "./chess";
import { join } from "./join";
import { vibe } from "./vibe";

export const projectsData: Project[] = [
  vibe,
  coordina,
  archivio,
  portfolio,
  dabubble,
  chess,
  join,
];

export const projectsBySlug: Record<string, Project> = Object.fromEntries(
  projectsData.map((p) => [p.slug, p])
);

export const getProjectBySlug = (slug: string) => projectsBySlug[slug];
