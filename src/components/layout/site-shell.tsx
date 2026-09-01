import type { ReactNode } from "react";

import { PageFrame } from "@/components/layout/page-frame";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CommandMenuProvider } from "@/components/interactive/command-menu";
import { SiteBottomNav } from "@/components/layout/site-bottom-nav";
import { ScrollToTopButton } from "@/components/interactive/scroll-to-top-button";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <CommandMenuProvider>
      <div className="min-h-screen overflow-x-clip bg-background">
        <SiteHeader />

        <div
          className="pointer-events-none fixed inset-x-0 bottom-0 z-50"
          aria-hidden="true"
        >
          <div className="h-(--fade-bottom-height) bg-linear-to-b from-transparent to-background mask-linear-[to_top,var(--background)_25%,transparent] backdrop-blur-[1px]" />

          <div className="bg-background pb-[env(safe-area-inset-bottom,0)]" />
        </div>

        <SiteBottomNav />
        <ScrollToTopButton />

        <main>
          <PageFrame className="min-h-[calc(100vh-3.5rem)]">
            {children}
          </PageFrame>
        </main>

        <SiteFooter />
      </div>
    </CommandMenuProvider>
  );
}
