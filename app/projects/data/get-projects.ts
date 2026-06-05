import * as en from "./en";
import * as de from "./de";

export function getProjects(locale: string) {
  return locale === "de" ? de.projectsData : en.projectsData;
}

export function getProjectBySlug(locale: string, slug: string) {
  return locale === "de"
    ? de.getProjectBySlug(slug)
    : en.getProjectBySlug(slug);
}
