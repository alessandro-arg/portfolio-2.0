import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, BookOpen, FolderKanban, User } from "lucide-react";

import { BackButton } from "@/components/ui/back-button";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");

  const links = [
    {
      href: "/projects",
      icon: <FolderKanban className="h-5 w-5 text-foreground/70" />,
      title: t("projects_title"),
      description: t("projects_description"),
    },
    {
      href: "/about",
      icon: <User className="h-5 w-5 text-foreground/70" />,
      title: t("about_title"),
      description: t("about_description"),
    },
    {
      href: "/blog",
      icon: <BookOpen className="h-5 w-5 text-foreground/70" />,
      title: t("blog_title"),
      description: t("blog_description"),
    },
  ];

  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-background px-4 py-12 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 45%, var(--background) 100%)",
        }}
      />

      <section className="relative z-10 flex w-full max-w-xl flex-col items-center gap-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 font-mono text-sm text-muted-foreground shadow-sm">
          <span className="h-2 w-2 rounded-full bg-[#16b1ff]" />
          404 error
        </span>

        <div className="space-y-3">
          <h1 className="font-outfit text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {t("Blog.not_found_title")}
          </h1>

          <p className="mx-auto max-w-sm text-base text-muted-foreground sm:text-lg">
            {t("Blog.not_found_description")}
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
          <BackButton />

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-[#16b1ff] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-opacity"
          >
            {t("go_home")}
          </Link>
        </div>

        <div className="mt-4 w-full divide-y divide-border overflow-hidden rounded-xl border border-border bg-background/80 backdrop-blur-sm">
          {links.map((link) => (
            <LinkRow key={link.href} {...link} />
          ))}
        </div>
      </section>
    </main>
  );
}

function LinkRow({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 px-4 py-4 text-left transition-colors hover:bg-muted/50 sm:px-5"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background shadow-sm">
        {icon}
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-foreground">
          {title}
        </span>
        <span className="block text-sm text-muted-foreground">
          {description}
        </span>
      </span>

      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
