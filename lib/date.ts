export function formatProjectDate(
  dateISO: string,
  locale = "en-US",
  timeZone = "Europe/Berlin",
) {
  const d = new Date(dateISO);

  return new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone,
  }).format(d);
}

export function getRelativeAge(dateISO: string, now = new Date()) {
  const d = new Date(dateISO);

  if (d.getTime() > now.getTime()) {
    return {
      key: "upcoming",
    };
  }

  const monthsNow = now.getFullYear() * 12 + now.getMonth();
  const monthsThen = d.getFullYear() * 12 + d.getMonth();

  const diffMonths = monthsNow - monthsThen;

  if (diffMonths < 6) return null;

  if (diffMonths < 12) {
    return {
      key: "over_6_months",
    };
  }

  const years = Math.floor(diffMonths / 12);

  if (years === 1) {
    return {
      key: "over_1_year",
    };
  }

  return {
    key: "over_years",
    years,
  };
}
