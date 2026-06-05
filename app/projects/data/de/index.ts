import type { Project } from "../../types";

import { coordina } from "./../de/coordina";
import { portfolio } from "./../de/portfolio";
import { archivio } from "./../de/archivio";
import { dabubble } from "./../de/dabubble";
import { chess } from "./../de/chess";
import { join } from "./../de/join";
import { vibe } from "./../de/vibe";
import { altair } from "./../de/altair";

export const projectsData: Project[] = [
  altair,
  vibe,
  coordina,
  archivio,
  portfolio,
  dabubble,
  chess,
  join,
];

export const projectsBySlug: Record<string, Project> = Object.fromEntries(
  projectsData.map((p) => [p.slug, p]),
);

export const getProjectBySlug = (slug: string) => projectsBySlug[slug];
