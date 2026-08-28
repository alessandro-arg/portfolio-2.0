import { ArrowUpRight, Mail } from "lucide-react";

import { profile } from "@/content/profile";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand-icons";

const iconClassName =
  "grid size-7 shrink-0 place-items-center rounded-md border border-border bg-surface text-muted-foreground";

const linkClassName =
  "group flex min-h-14 items-center justify-center gap-2 px-2 font-mono text-sm text-muted-foreground transition-colors hover:bg-surface/50 hover:text-foreground sm:gap-2.5 sm:px-page";

export function SocialLinks() {
  return (
    <nav aria-label="Social links" className="screen-line-top grid grid-cols-3">
      <a
        href={profile.contact.github}
        target="_blank"
        rel="noreferrer"
        className={`${linkClassName} border-border border-r`}
      >
        <span className={iconClassName}>
          <GitHubIcon className="size-4 transition-colors group-hover:text-foreground" />
        </span>

        <span className="hidden sm:inline">GitHub</span>

        <ArrowUpRight
          className="size-4 group-hover:rotate-45 transition-transform duration-300"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </a>

      <a
        href={profile.contact.linkedin}
        target="_blank"
        rel="noreferrer"
        className={`${linkClassName} border-border border-r`}
      >
        <span className={iconClassName}>
          <LinkedInIcon className="size-4 transition-colors group-hover:text-foreground" />
        </span>

        <span className="hidden sm:inline">LinkedIn</span>

        <ArrowUpRight
          className="size-4 group-hover:rotate-45 transition-transform duration-300"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </a>

      <a
        href={`mailto:${profile.contact.email}`}
        className={`${linkClassName}`}
      >
        <span className={iconClassName}>
          <Mail
            className="size-4 transition-colors group-hover:text-foreground"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </span>

        <span className="hidden sm:inline">Email</span>

        <ArrowUpRight
          className="size-4 group-hover:rotate-45 transition-transform duration-300"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </a>
    </nav>
  );
}
