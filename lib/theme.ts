import { ProjectTheme } from "../app/projects/types";

export const defaultTheme: ProjectTheme = {
  angle: 10,
  stops: [
    { color: "rgb(219,39,119)", at: "49.9%" },
    { color: "rgb(219,39,119)", at: "81.7%" },
    { color: "rgb(244,114,182)", at: "99.88%" },
  ],
};

export function makeGradient(theme?: ProjectTheme) {
  const t = theme ?? defaultTheme;
  const angle = t.angle ?? 10;
  const list = (t.stops?.length ? t.stops : defaultTheme.stops)
    .map((s) => `${s.color} ${s.at}`)
    .join(", ");
  return `linear-gradient(${angle}deg, ${list})`;
}
