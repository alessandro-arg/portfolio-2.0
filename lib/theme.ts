import { ProjectTheme } from "../app/projects/types";

export function makeGradient(theme?: ProjectTheme) {
  const angle = theme?.angle ?? 10;
  const stops = theme?.stops?.length
    ? theme.stops.map((s) => `${s.color} ${s.at}`).join(", ")
    : "rgb(219,39,119) 49.9%, rgb(219,39,119) 81.7%, rgb(244,114,182) 99.88%";
  return `linear-gradient(${angle}deg, ${stops})`;
}

export function getAccentColor(theme?: ProjectTheme) {
  return theme?.primary ?? theme?.stops?.[0]?.color ?? "#3b82f6";
}
