"use client";

import { useLocale, useTranslations } from "next-intl";
import { formatProjectDate, getRelativeAge } from "@/lib/date";

export function ProjectDate({ dateISO }: { dateISO: string }) {
  const t = useTranslations("ProjectDate");
  const locale = useLocale();

  const formatted = formatProjectDate(
    dateISO,
    locale === "de" ? "de-DE" : "en-US",
  );

  const relative = getRelativeAge(dateISO);

  let rel = "";

  if (relative) {
    rel =
      relative.key === "over_years"
        ? t(relative.key, { years: relative.years! })
        : t(relative.key);
  }

  return (
    <div className="gap-px text-sm">
      <time
        dateTime={new Date(dateISO).toISOString()}
        className="text-xs text-neutral-400"
      >
        {formatted} {rel}
      </time>
    </div>
  );
}
