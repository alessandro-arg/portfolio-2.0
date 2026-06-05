import type { Project } from "../../types";

import { coordina } from "./../en/coordina";
import { portfolio } from "./../en/portfolio";
import { archivio } from "./../en/archivio";
import { dabubble } from "./../en/dabubble";
import { chess } from "./../en/chess";
import { join } from "./../en/join";
import { vibe } from "./../en/vibe";
import { altair } from "./../en/altair";

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
