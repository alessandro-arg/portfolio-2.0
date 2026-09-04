"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import {
  Box,
  BriefcaseBusiness,
  CircleCheckBig,
  Layers,
  Mail,
  MoonStar,
  Sun,
  Monitor,
  Quote,
  TextInitial,
  CornerDownLeft,
  Download,
  Search,
  type LucideIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand-icons";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";

import { homepageNavigation } from "@/content/navigation";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

type NavigationId = (typeof homepageNavigation)[number]["id"];

const navigationIcons = {
  projects: Box,
  about: TextInitial,
  stack: Layers,
  experience: BriefcaseBusiness,
  certifications: CircleCheckBig,
  testimonials: Quote,
  contact: Mail,
} satisfies Record<NavigationId, LucideIcon>;

type CommandKind = "command" | "page" | "link";

const externalLinkValues = new Set(["GitHub", "LinkedIn"]);

const pageValues = new Set<string>([
  ...homepageNavigation.map((item) => item.label),
  ...projects.flatMap((project) => (project.slug ? [project.title] : [])),
]);

const cvHref = "/documents/alessandro-argenziano-cv.pdf";

type CommandMenuContextValue = {
  openCommandMenu: () => void;
};

const CommandMenuContext = createContext<CommandMenuContextValue | null>(null);

export function useCommandMenu() {
  const context = useContext(CommandMenuContext);

  if (!context) {
    throw new Error("useCommandMenu must be used within a CommandMenuProvider");
  }

  return context;
}

export function CommandMenuTrigger({ className }: { className?: string }) {
  const { openCommandMenu } = useCommandMenu();

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      aria-label="Open command palette"
      aria-keyshortcuts="Control+K Meta+K"
      data-slot="command-menu-trigger"
      onClick={openCommandMenu}
      className={cn(
        "h-8 gap-1.5 rounded-[min(var(--radius-lg),10px)] border-none px-1.5",
        "text-muted-foreground select-none",
        "active:translate-y-0 active:scale-[0.98] motion-reduce:active:scale-100",
        className,
      )}
    >
      <Search className="size-4" aria-hidden="true" />

      <span className="text-sm font-medium sm:hidden">Search…</span>

      <span aria-hidden="true" className="hidden items-center gap-0.75 sm:flex">
        <Kbd>Ctrl</Kbd>
        <Kbd className="w-5 min-w-auto">K</Kbd>
      </span>
    </Button>
  );
}

type CommandMenuProviderProps = {
  children: ReactNode;
};

export function CommandMenuProvider({ children }: CommandMenuProviderProps) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const restoreFocusRef = useRef<HTMLElement | null>(null);
  const shouldRestoreFocusRef = useRef(true);

  const selectedCommandKind: CommandKind = externalLinkValues.has(selectedValue)
    ? "link"
    : pageValues.has(selectedValue)
      ? "page"
      : "command";

  const router = useRouter();
  const { setTheme } = useTheme();

  const openCommandMenu = useCallback(() => {
    const activeElement = document.activeElement;

    restoreFocusRef.current =
      activeElement instanceof HTMLElement ? activeElement : null;

    shouldRestoreFocusRef.current = true;

    setOpen(true);
  }, []);

  const commandMenuContextValue = useMemo(
    () => ({ openCommandMenu }),
    [openCommandMenu],
  );

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (
        event.key.toLowerCase() !== "k" ||
        (!event.metaKey && !event.ctrlKey) ||
        event.repeat
      ) {
        return;
      }

      event.preventDefault();

      if (open) {
        setOpen(false);
        return;
      }

      openCommandMenu();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, openCommandMenu]);

  function navigateToPage(href: string) {
    shouldRestoreFocusRef.current = false;

    setOpen(false);
    router.push(href);
  }

  function openExternalLink(href: string) {
    setOpen(false);
    window.open(href, "_blank", "noopener,noreferrer");
  }

  function changeTheme(theme: "light" | "dark" | "system") {
    setOpen(false);
    setTheme(theme);
  }

  function downloadCv() {
    setOpen(false);

    const link = document.createElement("a");

    link.href = cvHref;
    link.download = "Alessandro-Argenziano-CV.pdf";

    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  return (
    <CommandMenuContext.Provider value={commandMenuContextValue}>
      {children}

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        onCloseAutoFocus={(event) => {
          const element = restoreFocusRef.current;
          const shouldRestoreFocus = shouldRestoreFocusRef.current;

          restoreFocusRef.current = null;
          shouldRestoreFocusRef.current = true;

          event.preventDefault();

          if (shouldRestoreFocus && element?.isConnected) {
            element.focus();
          }
        }}
        title="Command palette"
        description="Navigate the portfolio and access useful links."
        className="rounded-3xl! dark:bg-accent dark:ring-1 dark:ring-foreground/20"
      >
        <Command value={selectedValue} onValueChange={setSelectedValue}>
          <CommandInput placeholder="Type a command or search…" />

          <div className="rounded-2xl bg-background ring-1 ring-border">
            <CommandList className="min-h-80 scroll-fade">
              <CommandEmpty>No results found.</CommandEmpty>

              <CommandGroup heading="Portfolio">
                {homepageNavigation.map((item) => {
                  const Icon = navigationIcons[item.id];

                  return (
                    <CommandItem
                      key={item.id}
                      value={item.label}
                      onSelect={() => navigateToPage(`/#${item.id}`)}
                    >
                      <Icon aria-hidden="true" />
                      <span>{item.label}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>

              <CommandGroup heading="Projects">
                {projects.map((project) => {
                  if (!project.slug) {
                    return null;
                  }

                  return (
                    <CommandItem
                      key={project.slug}
                      value={project.title}
                      keywords={[
                        "project",
                        "overview",
                        project.slug,
                        ...project.technologies,
                      ]}
                      onSelect={() =>
                        navigateToPage(`/projects/${project.slug}`)
                      }
                    >
                      <Box aria-hidden="true" />
                      <span>{project.title}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>

              <CommandGroup heading="Links">
                <CommandItem
                  value="GitHub"
                  onSelect={() => openExternalLink(profile.contact.github)}
                >
                  <GitHubIcon className="size-4 p-0.5" />
                  <span>GitHub</span>
                </CommandItem>

                <CommandItem
                  value="LinkedIn"
                  onSelect={() => openExternalLink(profile.contact.linkedin)}
                >
                  <LinkedInIcon className="size-4 p-0.5" />
                  <span>LinkedIn</span>
                </CommandItem>
              </CommandGroup>

              <CommandGroup heading="Theme">
                <CommandItem
                  value="Light"
                  keywords={["theme", "mode"]}
                  onSelect={() => changeTheme("light")}
                >
                  <Sun aria-hidden="true" />
                  <span>Light</span>
                </CommandItem>

                <CommandItem
                  value="Dark"
                  keywords={["theme", "mode"]}
                  onSelect={() => changeTheme("dark")}
                >
                  <MoonStar aria-hidden="true" />
                  <span>Dark</span>
                </CommandItem>

                <CommandItem
                  value="System"
                  keywords={["theme", "mode"]}
                  onSelect={() => changeTheme("system")}
                >
                  <Monitor aria-hidden="true" />
                  <span>System</span>
                </CommandItem>
              </CommandGroup>

              <CommandGroup heading="Other">
                <CommandItem
                  value="Download CV"
                  keywords={["cv", "resume", "curriculum vitae", "download"]}
                  onSelect={downloadCv}
                >
                  <Download aria-hidden="true" />
                  <span>Download CV</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </div>

          <CommandMenuFooter kind={selectedCommandKind} />
        </Command>
      </CommandDialog>
    </CommandMenuContext.Provider>
  );
}

function CommandMenuFooter({ kind }: { kind: CommandKind }) {
  const labels: Record<CommandKind, string> = {
    page: "Go to page",
    link: "Open link",
    command: "Run command",
  };

  return (
    <>
      <div className="h-10" />

      <div className="absolute inset-x-0 bottom-0 flex h-10 items-center justify-between gap-2 rounded-b-3xl px-4 text-xs font-medium">
        <span
          aria-hidden="true"
          className="size-6 bg-muted-foreground [mask-image:url('/icons/icon0.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]"
        />

        <div className="flex items-center gap-2 max-sm:hidden">
          <span>{labels[kind]}</span>

          <Kbd>
            <CornerDownLeft className="size-3" aria-hidden="true" />
          </Kbd>
        </div>
      </div>
    </>
  );
}
