"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";

export type TocItem = {
  id: string;
  title: string;
  depth?: number;
};

export function ProjectTOC({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);
  const [indicatorPos, setIndicatorPos] = useState({ top: 12, height: 20 });
  const containerRef = useRef<HTMLDivElement>(null);

  const ids = useMemo(() => items.map((i) => i.id), [items]);

  useEffect(() => {
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

          // find index of active item and animate indicator
          const index = items.findIndex((i) => i.id === id);
          if (index !== -1) {
            setIndicatorPos({
              top: 12 + index * 44,
              height: 20,
            });
          }
        }
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0.1 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [ids, items]);

  // dynamically build SVG path for maskImage to connect all items
  const maskPath = useMemo(() => {
    const step = 20;
    let path = `M1 12 `;
    for (let i = 1; i <= items.length; i++) {
      const y = 12 + i * step * 2;
      path += `L1 ${y} `;
      if (i % 6 === 0) path += `L11 ${y + 12} `;
    }
    return encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 ${
        (items.length + 1) * 24
      }'><path d='${path}' stroke='black' stroke-width='1' fill='none' /></svg>`
    );
  }, [items.length]);

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
            <path d="M15 18H3" />
            <path d="M17 6H3" />
            <path d="M21 12H3" />
          </svg>
          On this page
        </h3>

        <div
          ref={containerRef}
          className="relative min-h-0 text-sm ms-px overflow-auto [scrollbar-width:none] [mask-image:linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)] py-3"
        >
          {/* Left Rail */}
          <div
            className="absolute start-0 top-0 rtl:-scale-x-100"
            style={{
              width: "12px",
              height: `${(items.length + 1) * 44}px`,
              maskImage: `url("data:image/svg+xml,${maskPath}")`,
              WebkitMaskImage: `url("data:image/svg+xml,${maskPath}")`,
              maskRepeat: "no-repeat",
            }}
          >
            <div
              role="none"
              className="absolute w-full bg-fd-primary transition-all duration-300 ease-out"
              style={{
                top: `${indicatorPos.top}px`,
                height: `${indicatorPos.height}px`,
              }}
            />
          </div>

          <div className="flex flex-col">
            {items.map((i) => {
              const active = activeId === i.id;
              const indent = i.depth && i.depth > 2 ? 26 : 14;
              return (
                <a
                  key={i.id}
                  data-active={active}
                  href={`#${i.id}`}
                  className={clsx(
                    "prose relative py-1.5 text-sm text-fd-muted-foreground hover:text-fd-accent-foreground transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0 data-[active=true]:text-fd-primary"
                  )}
                  style={{ paddingInlineStart: `${indent}px` }}
                >
                  {/* vertical line */}
                  <div
                    className="absolute inset-y-0 w-px bg-fd-foreground/10"
                    style={{
                      insetInlineStart: i.depth && i.depth > 2 ? 10 : 0,
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
