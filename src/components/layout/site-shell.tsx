import type { ReactNode } from "react";

import { PageFrame } from "@/components/layout/page-frame";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <SiteHeader />

      <main>
        <PageFrame className="min-h-[calc(100vh-3.5rem)]">{children}</PageFrame>
      </main>

      <SiteFooter />
    </div>
  );
}
