"use client";

import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";

export type TocItem = {
  id: string; // DOM id like "what-is"
  title: string; // label
  depth?: number; // 2 or 3 (controls indent)
};

export function ProjectTOC({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

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
        }
      },
      { root: null, rootMargin: "0px 0px -70% 0px", threshold: 0.1 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [ids]);

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

        <div className="relative min-h-0 text-sm ms-px overflow-auto [scrollbar-width:none] [mask-image:linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)] py-3">
          {/* Decorative left rail */}
          <div
            className="absolute start-0 top-0 rtl:-scale-x-100"
            style={{
              width: "12px",
              height: `${(items.length + 1) * 44}px`,
              maskImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 352'%3E%3Cpath d='M1 12 L1 32 L1 44 L1 64 L1 76 L1 96 L1 108 L1 128 L1 140 L1 160 L1 172 L1 192 L11 204 L11 224 L11 236 L11 256 L11 268 L11 288 L1 300 L1 320 L1 332 L1 352' stroke='black' stroke-width='1' fill='none' /%3E%3C/svg%3E\")",
            }}
          >
            <div
              role="none"
              className="mt-(--fd-top) h-(--fd-height) bg-fd-primary transition-all"
              style={{
                ["--fd-top" as any]: "12px",
                ["--fd-height" as any]: "20px",
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
