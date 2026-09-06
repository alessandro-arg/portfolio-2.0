"use client";

import { useEffect, useState } from "react";

type LocalTimeProps = {
  timeZone: string;
};

function getTimeZoneOffsetMinutes(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat("de-DE", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const values = Object.fromEntries(
    parts
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value]),
  );

  const utcTime = Date.UTC(
    Number(values.year),
    Number(values.month) - 1,
    Number(values.day),
    Number(values.hour),
    Number(values.minute),
    Number(values.second),
  );

  return Math.round((utcTime - date.getTime()) / 60_000);
}

function formatTimeDifference(minutes: number) {
  if (minutes === 0) {
    return "same time";
  }

  const absoluteMinutes = Math.abs(minutes);
  const hours = Math.floor(absoluteMinutes / 60);
  const remainingMinutes = absoluteMinutes % 60;

  const difference =
    remainingMinutes === 0
      ? `${hours}h`
      : hours === 0
        ? `${remainingMinutes}m`
        : `${hours}h ${remainingMinutes}m`;

  return `${difference} ${minutes > 0 ? "ahead" : "behind"}`;
}

export function LocalTime({ timeZone }: LocalTimeProps) {
  const [now, setNow] = useState<Date | null>(null);
  const [visitorTimeZone, setVisitorTimeZone] = useState<string | null>(null);

  useEffect(() => {
    const resolvedVisitorTimeZone =
      Intl.DateTimeFormat().resolvedOptions().timeZone;

    const initialUpdate = window.setTimeout(() => {
      setVisitorTimeZone(resolvedVisitorTimeZone);
      setNow(new Date());
    }, 0);

    const interval = window.setInterval(() => {
      setNow(new Date());
    }, 30_000);

    return () => {
      window.clearTimeout(initialUpdate);
      window.clearInterval(interval);
    };
  }, []);

  if (!now) {
    return (
      <span className="flex items-center gap-2">
        <span>--:-- --</span>
        <span className="text-muted-foreground">{"// ..."}</span>
      </span>
    );
  }

  const time = new Intl.DateTimeFormat("de-DE", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(now);

  const difference = visitorTimeZone
    ? getTimeZoneOffsetMinutes(now, timeZone) -
      getTimeZoneOffsetMinutes(now, visitorTimeZone)
    : null;

  return (
    <span className="flex items-center gap-2">
      <time dateTime={now.toISOString()}>{time}</time>

      {difference !== null && (
        <span className="text-muted-foreground">
          {`// ${formatTimeDifference(difference)}`}
        </span>
      )}
    </span>
  );
}
