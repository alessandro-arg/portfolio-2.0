"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import {
  AnchorProvider,
  ScrollProvider,
  TOCItem as FumaTOCItem,
  type TOCItemType,
} from "fumadocs-core/toc";

export type TocItem = {
  id: string;
  title: string;
  depth?: number; // 2 or 3
};

export function ProjectTOC({ items }: { items: TocItem[] }) {
  // Map to Fumadocs TOC format
  const tocItems: TOCItemType[] = useMemo(
    () =>
      items.map((i) => ({
        url: `#${i.id}`,
        title: i.title,
        depth: i.depth ?? 2,
      })),
    [items]
  );

  // Scroll container + list refs (for Fumadocs ScrollProvider)
  const viewRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  // Fade/hide when prose end crosses 50% viewport
  const [isPastHalf, setIsPastHalf] = useState(false);
  useEffect(() => {
    const sentinel = document.getElementById("toc-end-sentinel");
    if (!sentinel) return;

    const onScroll = () => {
      const rect = sentinel.getBoundingClientRect();
      const half = window.innerHeight * 0.5;
      setIsPastHalf(rect.top <= half);
    };

    onScroll();
    const opts = { passive: true } as const;
    window.addEventListener("scroll", onScroll, opts);
    window.addEventListener("resize", onScroll, opts);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // === Our OWN highlighting (bottom 30% band) ===
  const [multiActive, setMultiActive] = useState<Set<string>>(new Set());
  const [primaryActiveHref, setPrimaryActiveHref] = useState<string | null>(
    null
  );

  useEffect(() => {
    const pairs = tocItems
      .map((it) => {
        const el = document.getElementById(it.url.slice(1));
        return el ? ({ url: it.url, el } as const) : null;
      })
      .filter(Boolean) as { url: string; el: HTMLElement }[];

    if (!pairs.length) {
      setMultiActive(new Set());
      setPrimaryActiveHref(null);
      return;
    }

    let raf = 0;
    const compute = () => {
      const vh = window.innerHeight;
      const bandTop = vh * 0.05;
      const bandBottom = vh * 0.5;

      const next = new Set<string>();
      let bestUrl: string | null = null;
      let bestDist = Infinity;

      for (const { url, el } of pairs) {
        const r = el.getBoundingClientRect();
        if (r.top >= bandTop && r.top <= bandBottom) {
          next.add(url);
          const dist = bandBottom - r.top;
          if (dist >= 0 && dist < bestDist) {
            bestDist = dist;
            bestUrl = url;
          }
        }
      }

      setMultiActive(next);
      setPrimaryActiveHref(bestUrl);
    };

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(compute);
    };

    compute(); // initial
    const opts = { passive: true } as const;
    window.addEventListener("scroll", onScroll, opts);
    window.addEventListener("resize", onScroll, opts);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [tocItems]);

  return (
    <div
      id="nd-toc"
      className={clsx(
        "sticky pb-2 pt-12 max-xl:hidden transition-opacity duration-200",
        isPastHalf ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
      style={{
        top: "var(--fd-toc-top, 64px)",
        height: "calc(100dvh - var(--fd-toc-top, 64px))",
      }}
    >
      <div className="flex h-full w-(--fd-toc-width) max-w-full flex-col pe-4">
        <div className="h-10" />
        <h3 className="inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground">
          On this page
        </h3>

        <div
          ref={viewRef}
          className="relative min-h-0 text-sm ms-px overflow-auto [scrollbar-width:none] [mask-image:linear-gradient(to_bottom,transparent,white_12px,white_calc(100%-4px),transparent)] py-3 pb-8"
        >
          {/* We still use Fumadocs providers for anchor links & scroll sync,
              but we IGNORE its visual "active" styling */}
          <AnchorProvider toc={tocItems}>
            <ScrollProvider containerRef={viewRef}>
              <div ref={listRef} className="flex flex-col">
                {tocItems.map((it) => {
                  const depth = (it.depth && it.depth > 2 ? 3 : 2) as 2 | 3;
                  const indent = depth === 3 ? 36 : 14;
                  const isMulti = multiActive.has(it.url);
                  const isPrimary = primaryActiveHref === it.url;

                  return (
                    <FumaTOCItem
                      key={it.url}
                      href={it.url}
                      className={clsx(
                        "prose relative py-1.5 text-sm transition-colors",
                        "[overflow-wrap:anywhere] first:pt-0 last:pb-0",
                        // Neutral base color (don't rely on Fumadocs data-[active=true])
                        "text-fd-muted-foreground hover:text-fd-accent-foreground",
                        // Our own highlight rules:
                        (isMulti || isPrimary) && "text-fd-primary font-medium"
                      )}
                      data-fuma="toc-item"
                      data-depth={depth}
                      // Optional: expose our state as attributes (useful if you want CSS-only styling)
                      {...(isMulti ? { "data-active-multi": "true" } : {})}
                      {...(isPrimary ? { "data-active-primary": "true" } : {})}
                      style={{ paddingInlineStart: `${indent}px` }}
                    >
                      {it.title as any}
                    </FumaTOCItem>
                  );
                })}
              </div>
            </ScrollProvider>
          </AnchorProvider>
        </div>
      </div>
    </div>
  );
}
