import { formatProjectDate, relativeAgeLabel } from "@/lib/date";

export function ProjectDate({ dateISO }: { dateISO: string }) {
  const formatted = formatProjectDate(dateISO);
  const rel = relativeAgeLabel(dateISO);

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
