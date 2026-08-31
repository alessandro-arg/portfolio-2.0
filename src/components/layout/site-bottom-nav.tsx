import { CommandMenuTrigger } from "@/components/interactive/command-menu";
import { MobileNavigationMenu } from "@/components/interactive/mobile-navigation-menu";

export function SiteBottomNav() {
  return (
    <div className="fixed bottom-[calc(--spacing(2)+env(safe-area-inset-bottom,0px))] left-1/2 z-50 flex w-fit -translate-x-1/2 items-center rounded-2xl bg-popover py-1 pr-1.5 pl-2.5 shadow-md ring-1 ring-foreground/10 sm:hidden dark:ring-foreground/20 dark:bg-accent">
      <CommandMenuTrigger className="min-w-20 gap-2 rounded-none border-none bg-transparent px-0 hover:bg-transparent active:scale-100" />

      <span
        aria-hidden="true"
        className="mx-2 h-6 w-px shrink-0 bg-accent-foreground/10"
      />

      <MobileNavigationMenu />
    </div>
  );
}
