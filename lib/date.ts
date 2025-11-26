export function formatProjectDate(
  dateISO: string,
  locale = "en-US",
  timeZone = "Europe/Berlin"
) {
  const d = new Date(dateISO);
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone,
  }).format(d);
}

export function relativeAgeLabel(dateISO: string, now = new Date()): string {
  const d = new Date(dateISO);

  if (d.getTime() > now.getTime()) return "(upcoming)";

  const monthsNow = now.getFullYear() * 12 + now.getMonth();
  const monthsThen = d.getFullYear() * 12 + d.getMonth();
  const diffMonths = monthsNow - monthsThen;

  if (diffMonths < 6) return "";
  if (diffMonths < 12) return "(over 6 months ago)";

  const yrs = Math.floor(diffMonths / 12);
  if (yrs === 1) return "(over 1 yr ago)";
  return `(over ${yrs} yrs ago)`;
}
