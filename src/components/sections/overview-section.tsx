import type { LucideIcon } from "lucide-react";
import { Clock3, Code2, Link2, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { LocalTime } from "@/components/interactive/local-time";
import { profile } from "@/content/profile";

type OverviewItemProps = {
  icon: LucideIcon;
  children: ReactNode;
  href?: string;
};

function OverviewItem({ icon: Icon, children, href }: OverviewItemProps) {
  const content = (
    <>
      <span className="grid size-7 shrink-0 place-items-center rounded-md border border-border bg-surface text-muted-foreground">
        <Icon className="size-4" strokeWidth={1.75} aria-hidden="true" />
      </span>

      <span className="min-w-0">{children}</span>
    </>
  );

  const className = "flex min-w-0 items-center gap-3 font-mono text-sm";

  if (href) {
    return (
      <a
        href={href}
        className={`${className} hover:underline underline-offset-3 w-fit`}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

export function OverviewSection() {
  const phoneHref = `tel:${profile.contact.phone
    .replace("(0)", "")
    .replace(/[^\d+]/g, "")}`;

  const websiteLabel = new URL(profile.contact.website).hostname.replace(
    /^www\./,
    "",
  );

  return (
    <section
      aria-labelledby="overview-heading"
      className="relative p-4 grid gap-x-4 gap-y-2.5 sm:grid-cols-2"
    >
      <h2 id="overview-heading" className="sr-only">
        Overview
      </h2>

      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-1/2 hidden border-l border-dashed border-border sm:block"
      />

      <div className="grid content-start gap-3 md:pr-8">
        <OverviewItem icon={Code2}>{profile.role}</OverviewItem>

        <OverviewItem icon={MapPin}>{profile.location}</OverviewItem>

        <OverviewItem icon={Phone} href={phoneHref}>
          {profile.contact.phone}
        </OverviewItem>

        <OverviewItem icon={Link2} href={profile.contact.website}>
          {websiteLabel}
        </OverviewItem>
      </div>

      <div className="grid content-start gap-3 md:pl-4">
        <OverviewItem icon={Clock3}>
          <LocalTime timeZone={profile.timeZone} />
        </OverviewItem>

        <OverviewItem icon={Mail} href={`mailto:${profile.contact.email}`}>
          {profile.contact.email}
        </OverviewItem>
      </div>
    </section>
  );
}
