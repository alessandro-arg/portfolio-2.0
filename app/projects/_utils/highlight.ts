import {
  createHighlighter,
  bundledLanguages,
  bundledThemes,
  type Highlighter,
} from "shiki/bundle/web";

type ThemeName = "github-light-default" | "github-dark-default";

let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighterSingleton() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      // IMPORTANT: use bracket syntax with dash-cased keys
      themes: [
        bundledThemes["github-light-default"],
        bundledThemes["github-dark-default"],
      ],
      langs: [bundledLanguages.bash],
    });
  }
  return highlighterPromise;
}

export async function highlight(
  code: string,
  lang: string = "bash",
  theme: ThemeName = "github-light-default"
) {
  const highlighter = await getHighlighterSingleton();
  return highlighter.codeToHtml(code, { lang, theme });
}
