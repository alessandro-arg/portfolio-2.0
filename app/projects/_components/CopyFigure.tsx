"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import {
  createHighlighter,
  bundledLanguages,
  type Highlighter,
} from "shiki/bundle/web";
import type { ThemeRegistration } from "shiki";

type CopyFigureProps = {
  code: string;
  caption?: string;
  copyLabel?: string;
  className?: string;
  lang?: string;
};

const CUSTOM_THEME: ThemeRegistration = {
  name: "custom",
  type: "dark",
  colors: {
    "editor.background": "var(--shiki-bg)",
    "editor.foreground": "var(--shiki-fg)",
  },
  tokenColors: [
    {
      scope: ["comment"],
      settings: {
        foreground: "var(--shiki-comment, var(--shiki-fg))",
        fontStyle: "italic",
      },
    },
    {
      scope: ["keyword", "storage.type", "storage.modifier"],
      settings: { foreground: "var(--shiki-keyword, var(--shiki-fg))" },
    },
    {
      scope: ["string"],
      settings: { foreground: "var(--shiki-string, var(--shiki-fg))" },
    },
    {
      scope: ["constant.numeric", "number"],
      settings: { foreground: "var(--shiki-number, var(--shiki-fg))" },
    },
    {
      scope: ["variable"],
      settings: { foreground: "var(--shiki-variable, var(--shiki-fg))" },
    },
    {
      scope: ["support.function", "entity.name.function"],
      settings: { foreground: "var(--shiki-func, var(--shiki-fg))" },
    },
    {
      scope: ["support.type", "entity.name.type"],
      settings: { foreground: "var(--shiki-type, var(--shiki-fg))" },
    },
    {
      scope: ["punctuation", "meta.brace"],
      settings: { foreground: "var(--shiki-punctuation, var(--shiki-fg))" },
    },
  ],
};

let highlighterPromise: Promise<Highlighter> | null = null;
function getHighlighterSingleton() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: [CUSTOM_THEME],
      langs: [bundledLanguages.bash],
    });
  }
  return highlighterPromise;
}

export default function CopyFigure({
  code,
  caption = "Terminal",
  copyLabel = "Copy Text",
  className,
  lang = "bash",
}: CopyFigureProps) {
  const [copied, setCopied] = useState(false);
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const highlighter = await getHighlighterSingleton();
      let out = highlighter.codeToHtml(code, { lang, theme: "custom" });

      // Add your terminal body classes onto the <pre class="shiki ...">
      out = out.replace(
        '<pre class="shiki',
        '<pre class="shiki bg-fd-secondary rounded-lg border text-[13px] py-3.5 overflow-auto fd-scroll-container'
      );

      if (!cancelled) setHtml(out);
    })();
    return () => {
      cancelled = true;
    };
  }, [code, lang]);

  async function copy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        const ta = document.createElement("textarea");
        ta.value = code;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
    } catch {}
  }

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(t);
  }, [copied]);

  return (
    <figure
      dir="ltr"
      className={clsx(
        "my-4 rounded-xl bg-fd-card p-1 relative border outline-none not-prose overflow-hidden text-sm",
        className
      )}
    >
      {/* Header */}
      <div className="flex text-fd-muted-foreground items-center gap-2 ps-3 h-9.5 font-outfit">
        <div className="[&_svg]:size-3.5">
          <svg viewBox="0 0 24 24">
            <path
              d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z"
              fill="currentColor"
            />
          </svg>
        </div>
        <figcaption className="flex-1 truncate">{caption}</figcaption>

        {/* Copy button */}
        <div>
          <button
            type="button"
            aria-label={copyLabel}
            onClick={copy}
            className={clsx(
              "inline-flex items-center justify-center rounded-md pr-1.5 pl-2 pb-1.5 pt-2 mr-1 text-sm font-medium transition-colors duration-150 cursor-pointer",
              "disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none",
              "hover:bg-fd-accent hover:text-fd-accent-foreground [&_svg]:size-3.5"
            )}
          >
            <span className="relative inline-block w-4 h-4">
              {/* Copy icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={clsx(
                  "absolute inset-0 transition-all duration-200",
                  copied
                    ? "opacity-0 scale-75 rotate-6"
                    : "opacity-100 scale-100 rotate-0"
                )}
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>

              {/* Check icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={clsx(
                  "absolute inset-0 transition-all duration-200",
                  copied
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-75 -rotate-6"
                )}
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Code body */}
      <div
        className="rounded-lg"
        dangerouslySetInnerHTML={{
          __html:
            html ||
            `<pre class="shiki bg-fd-secondary rounded-lg border text-[13px] py-3.5 overflow-auto fd-scroll-container"><code>${escapeHtml(
              code
            )}</code></pre>`,
        }}
      />

      <span className="sr-only" aria-live="polite">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </figure>
  );
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
