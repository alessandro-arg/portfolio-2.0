import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { PageFrame } from "@/components/layout/page-frame";
import { footerInspirations, footerLinks, footerStack } from "@/content/footer";
import { profile } from "@/content/profile";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand-icons";

type FooterItemProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

function FooterItem({ label, children, className }: FooterItemProps) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-col gap-1 bg-background px-4 py-3",
        className,
      )}
    >
      <dt className="font-mono text-[0.6875rem]/4 font-medium tracking-wider text-muted-foreground uppercase">
        {label}
      </dt>

      <dd className="text-sm">{children}</dd>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="underline underline-offset-3 decoration-muted-foreground/50 hover:decoration-foreground transition-colors motion-reduce:transition-none"
    >
      {children}
    </a>
  );
}

export function SiteFooter() {
  const commitSha = process.env.VERCEL_GIT_COMMIT_SHA;
  const shortCommitSha = commitSha?.slice(0, 7);
  const buildDate = process.env.PORTFOLIO_BUILD_DATE ?? "local";

  const commitUrl = commitSha
    ? `${footerLinks.repository}/commit/${commitSha}`
    : undefined;

  const websiteLabel = new URL(profile.contact.website).hostname.replace(
    /^www\./,
    "",
  );

  const topLinePhrase = "Built with care for the web.";

  return (
    <footer>
      <PageFrame>
        <div className="screen-line-bottom flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-3 text-sm">
          <span className="font-mono font-medium">{websiteLabel}</span>

          <span className="text-muted-foreground">{topLinePhrase}</span>
        </div>

        <dl className="grid grid-cols-2 gap-px bg-border font-mono sm:grid-cols-6">
          <FooterItem label="Build" className="sm:col-span-2">
            {commitUrl && shortCommitSha ? (
              <FooterLink href={commitUrl}>{shortCommitSha}</FooterLink>
            ) : (
              "local"
            )}
          </FooterItem>

          <FooterItem label="Date" className="sm:col-span-2">
            <time dateTime={buildDate}>{buildDate}</time>
          </FooterItem>

          <FooterItem label="Typeface" className="sm:col-span-2">
            Geist
          </FooterItem>

          <FooterItem label="Deployed on" className="sm:col-span-2">
            Vercel
          </FooterItem>

          <FooterItem label="Source code" className="sm:col-span-2">
            <FooterLink href={footerLinks.repository}>GitHub</FooterLink>
          </FooterItem>

          <FooterItem label="License" className="sm:col-span-2">
            <FooterLink href={footerLinks.license}>MIT License</FooterLink>
          </FooterItem>

          <FooterItem label="Stack" className="col-span-2 sm:col-span-3">
            <ul className="flex flex-col gap-0.5">
              {footerStack.map((technology) => (
                <li key={technology.name}>
                  {technology.name}@{technology.version}
                </li>
              ))}
            </ul>
          </FooterItem>

          <FooterItem label="Inspired by" className="col-span-2 sm:col-span-3">
            <ol className="grid grid-cols-2 gap-x-4 gap-y-0.5 font-sans">
              {footerInspirations.map((inspiration, index) => (
                <li
                  key={inspiration.name}
                  className="flex min-w-0 items-baseline gap-2"
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-mono text-xs text-muted-foreground/80"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {"href" in inspiration ? (
                    <a
                      href={inspiration.href}
                      target="_blank"
                      rel="noreferrer"
                      className="truncate hover:underline underline-offset-3"
                    >
                      {inspiration.name}
                    </a>
                  ) : (
                    <span className="truncate">{inspiration.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </FooterItem>
        </dl>

        <div className="screen-line-top h-4" />

        <div className="screen-line-top screen-line-bottom flex items-center gap-3 px-4 py-2 text-muted-foreground">
          <Link
            href="/"
            aria-label="Alessandro Argenziano Home"
            className="mr-auto"
          >
            <Image
              src="/icons/icon0.svg"
              alt=""
              width={28}
              height={28}
              className="dark:invert"
            />
          </Link>

          <a
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-8 place-items-center text-muted-foreground transition-colors hover:text-foreground"
          >
            <GitHubIcon className="size-4" />
          </a>

          <span aria-hidden="true" className="h-4 border-l border-border" />

          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid size-8 place-items-center text-muted-foreground transition-colors hover:text-foreground"
          >
            <LinkedInIcon className="size-4" />
          </a>
        </div>
      </PageFrame>

      <div aria-hidden="true" className="h-(--fade-bottom-height)" />
      <div aria-hidden="true" className="pb-[env(safe-area-inset-bottom,0)]" />
    </footer>
  );
}
