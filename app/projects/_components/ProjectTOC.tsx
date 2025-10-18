"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";

export type TocItem = {
  id: string; // DOM id like "what-is"
  title: string;
  depth?: number; // 2 or 3 (controls indent)
};

const RAIL_W = 12; // mask rail width
const X_D2 = 1; // rail x for depth-2
const X_D3 = 11; // rail x for depth-3 (must match inner guide inset)
const PAD_TOP = 12; // top offset inside the rail wrapper (matches your CSS)
const ATTACH_Y = 12; // <-- where the rail should hit inside a link (px from link's top)
const MARKER_H = 80; // active marker height
const TAIL = 0; // optional tail (extra px) at the end

export function ProjectTOC({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const ids = useMemo(() => items.map((i) => i.id), [items]);

  // --- Observe headings in page content to set activeId
  useEffect(() => {
    if (!ids.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop
          );
        if (visible[0]) {
          const id = (visible[0].target as HTMLElement).id;
          setActiveId(id);
        }
      },
      { root: null, rootMargin: "0px 0px -65% 0px", threshold: 0.1 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [ids]);

  // --- Layout measuring + mask path building
  const [markerTop, setMarkerTop] = useState(PAD_TOP);
  const [markerX, setMarkerX] = useState<number>(X_D2);

  type Measure = { id: string; depth: 2 | 3; y: number };

  const recompute = () => {
    const area = scrollAreaRef.current;
    const list = listRef.current;
    const rail = railRef.current;
    if (!area || !list || !rail) return;

    const areaRect = area.getBoundingClientRect();
    const links = Array.from(
      list.querySelectorAll<HTMLAnchorElement>("a[data-toc-link='true']")
    );

    if (!links.length) {
      rail.style.height = "0px";
      rail.style.maskImage = "none";
      return;
    }

    type Measure = { id: string; depth: 2 | 3; railY: number };
    const measures: Measure[] = links.map((a) => {
      const rect = a.getBoundingClientRect();
      const depthAttr = Number(a.getAttribute("data-depth")) as
        | 2
        | 3
        | undefined;
      const depth = depthAttr === 3 ? 3 : 2;
      const id = a.getAttribute("href")?.slice(1) || "";
      const railY = rect.top - areaRect.top + ATTACH_Y; // <-- not center anymore
      return { id, depth, railY };
    });

    const toX = (d: 2 | 3) => (d === 3 ? X_D3 : X_D2);

    // Build polyline through attach points
    let d = `M ${toX(measures[0].depth)} ${PAD_TOP + measures[0].railY}`;
    for (let i = 1; i < measures.length; i++) {
      const m = measures[i];
      d += ` L ${toX(m.depth)} ${PAD_TOP + m.railY}`;
    }

    // rail height (just enough to contain last point + optional tail)
    const last = measures[measures.length - 1];
    const railHeight = Math.ceil(PAD_TOP + last.railY + TAIL);
    rail.style.height = `${railHeight}px`;

    // Inline SVG mask (same as your working sample)
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${RAIL_W} ${railHeight}">
<path d="${d}" stroke="black" stroke-width="1" fill="none"/>
</svg>`;
    const encoded = encodeURIComponent(svg)
      .replace(/'/g, "%27")
      .replace(/"/g, "%22");
    rail.style.maskImage = `url("data:image/svg+xml,${encoded}")`;

    // Active marker placement (align to the same attach Y)
    const idx = Math.max(
      0,
      measures.findIndex((m) => m.id === activeId)
    );
    const active = measures[idx] ?? measures[0];
    setMarkerTop(PAD_TOP + active.railY - MARKER_H / 2);
    setMarkerX(toX(active.depth));
  };

  useLayoutEffect(() => {
    // Recompute initially and when items / active change
    recompute();

    // Keep in sync on resize
    const ro = new ResizeObserver(() => recompute());
    if (scrollAreaRef.current) ro.observe(scrollAreaRef.current);
    if (listRef.current) ro.observe(listRef.current);

    const onResize = () => recompute();
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, activeId]);

  return (
    <div
      id="nd-toc"
      className="sticky pb-2 pt-12 max-xl:hidden"
      style={{
        top: "calc(var(--fd-banner-height) + var(--fd-nav-height))",
        height: "calc(100dvh - var(--fd-banner-height) - var(--fd-nav-height))",
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
            <path d="M15 18H3"></path>
            <path d="M17 6H3"></path>
            <path d="M21 12H3"></path>
          </svg>
          On this page
        </h3>

        <div
          ref={scrollAreaRef}
          className="relative min-h-0 text-sm ms-px overflow-auto [scrollbar-width:none] [mask-image:linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)] py-3"
        >
          {/* Dynamic rail using mask-image (exactly like your working example) */}
          <div
            ref={railRef}
            className="absolute start-0 top-0 rtl:-scale-x-100"
            style={{
              width: `${RAIL_W}px`,
              height: "0px", // will be set dynamically
              maskImage: "none", // will be set dynamically
            }}
          >
            {/* Active marker (follows the rail) */}
            <div
              role="none"
              className="mt-(--fd-top) h-(--fd-height) bg-fd-primary transition-all"
              style={
                {
                  ["--fd-top" as any]: `${Math.max(0, markerTop)}px`,
                  ["--fd-height" as any]: `${MARKER_H}px`,
                  // slight x alignment by translating via left padding in the link rows,
                  // the marker sits under the mask (x controlled by the mask path),
                } as React.CSSProperties
              }
            />
          </div>

          {/* Links list */}
          <div ref={listRef} className="flex flex-col">
            {items.map((i, idx) => {
              const depth = (i.depth && i.depth > 2 ? 3 : 2) as 2 | 3;
              const prevDepth = (
                idx > 0 && (items[idx - 1].depth || 2) > 2 ? 3 : 2
              ) as 2 | 3;
              const active = activeId === i.id;
              const indent = depth === 3 ? 26 : 14;

              // Show diagonal helper icon when transitioning depth to match example
              const showDownDiag = depth === 3 && prevDepth === 2; // 2 -> 3
              const showUpDiag = depth === 2 && prevDepth === 3; // 3 -> 2

              return (
                <a
                  key={i.id}
                  data-toc-link="true"
                  data-depth={depth}
                  data-active={active}
                  href={`#${i.id}`}
                  className={clsx(
                    "prose relative py-1.5 text-sm text-fd-muted-foreground hover:text-fd-accent-foreground transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0 data-[active=true]:text-fd-primary"
                  )}
                  style={{ paddingInlineStart: `${indent}px` }}
                >
                  {/* small diagonal helpers (purely visual, like your working snapshot) */}
                  {showDownDiag ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      className="absolute -top-1.5 start-0 size-4 rtl:-scale-x-100"
                    >
                      <line
                        x1="0"
                        y1="0"
                        x2="10"
                        y2="12"
                        className="stroke-fd-foreground/10"
                        strokeWidth="1"
                      />
                    </svg>
                  ) : null}
                  {showUpDiag ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      className="absolute -top-1.5 start-0 size-4 rtl:-scale-x-100"
                    >
                      <line
                        x1="10"
                        y1="0"
                        x2="0"
                        y2="12"
                        className="stroke-fd-foreground/10"
                        strokeWidth="1"
                      />
                    </svg>
                  ) : null}

                  {/* inner guide line beside text block */}
                  <div
                    className={clsx(
                      "absolute inset-y-0 w-px bg-fd-foreground/10",
                      // match your example's slight top/bottom offsets on the guide line
                      showDownDiag && "top-1.5",
                      idx === items.length - 1 && depth === 3 && "bottom-1.5"
                    )}
                    style={{
                      insetInlineStart: depth === 3 ? 10 : 0,
                    }}
                  />
                  {i.title}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
