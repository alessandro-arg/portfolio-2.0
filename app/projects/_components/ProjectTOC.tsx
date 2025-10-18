"use client";

import { useEffect, useMemo, useRef } from "react";
import clsx from "clsx";
import {
  AnchorProvider,
  ScrollProvider,
  TOCItem as FumaTOCItem,
  type TOCItemType,
} from "fumadocs-core/toc";

export type TocItem = {
  id: string; // DOM id like "what-is"
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

  // === Multi-active: mark items whose heading sits within the top 50% of viewport
  const ACTIVE_FRACTION = 0.5;

  useEffect(() => {
    const container = listRef.current;
    if (!container) return;

    // map href -> anchor element
    const anchors = Array.from(
      container.querySelectorAll<HTMLAnchorElement>('a[data-fuma="toc-item"]')
    );
    if (!anchors.length) return;

    // observe these headings
    const headings: HTMLElement[] = [];
    tocItems.forEach((it) => {
      const el = document.getElementById(it.url.slice(1));
      if (el) headings.push(el);
    });
    if (!headings.length) return;

    const activeSet = new Set<string>();

    const updateAnchors = () => {
      anchors.forEach((a) => {
        const href = a.getAttribute("href") || "";
        if (activeSet.has(href)) a.setAttribute("data-active-multi", "true");
        else a.removeAttribute("data-active-multi");
      });
    };

    // IO region = top 50% band of the viewport
    const buildObserver = () => {
      const bottomCut = Math.round(window.innerHeight * ACTIVE_FRACTION);
      return new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const id = (entry.target as HTMLElement).id;
            const href = `#${id}`;
            if (entry.isIntersecting) activeSet.add(href);
            else activeSet.delete(href);
          });
          updateAnchors();
        },
        {
          root: null,
          rootMargin: `0px 0px -${bottomCut}px 0px`, // shrink bottom → top-half band
          threshold: 0,
        }
      );
    };

    let io = buildObserver();
    headings.forEach((h) => io.observe(h));
    updateAnchors();

    const onResize = () => {
      io.disconnect();
      activeSet.clear();
      updateAnchors();
      io = buildObserver();
      headings.forEach((h) => io.observe(h));
    };

    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [tocItems]);

  return (
    <div
      id="nd-toc"
      className="sticky pb-2 pt-12 max-xl:hidden"
      style={{
        top: "var(--fd-toc-top, 64px)",
        height: "calc(100dvh - var(--fd-toc-top, 64px))",
      }}
    >
      <div className="flex h-full w-(--fd-toc-width) max-w-full flex-col pe-4">
        <div className="h-10" />
        <h3 className="inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide size-4"
          >
            <path d="M15 18H3" />
            <path d="M17 6H3" />
            <path d="M21 12H3" />
          </svg>
          On this page
        </h3>

        {/* Scroll container provided to Fumadocs */}
        <div
          ref={viewRef}
          className="relative min-h-0 text-sm ms-px overflow-auto [scrollbar-width:none] [mask-image:linear-gradient(to_bottom,transparent,white_12px,white_calc(100%-4px),transparent)] py-3 pb-8"
        >
          <AnchorProvider toc={tocItems}>
            <ScrollProvider containerRef={viewRef}>
              <div ref={listRef} className="flex flex-col">
                {tocItems.map((it) => {
                  const depth = (it.depth && it.depth > 2 ? 3 : 2) as 2 | 3;
                  const indent = depth === 3 ? 26 : 14;

                  return (
                    <FumaTOCItem
                      key={it.url}
                      href={it.url}
                      className={clsx(
                        "prose relative py-1.5 text-sm text-fd-muted-foreground hover:text-fd-accent-foreground transition-colors",
                        "[overflow-wrap:anywhere] first:pt-0 last:pb-0",
                        // highlight from fumadocs (single) and our top-half multi-active
                        "data-[active=true]:text-fd-primary data-[active-multi=true]:text-fd-primary"
                      )}
                      data-fuma="toc-item"
                      data-depth={depth}
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
