"use client";

import React, { useEffect, useState } from "react";
import { CloudRain, Moon, Sun, Sunrise, Sunset } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

type TimeOfDay = "dawn" | "morning" | "day" | "evening" | "dusk" | "night";

const getTimeOfDay = (hour: number): TimeOfDay => {
  if (hour >= 5 && hour < 7) return "dawn";
  if (hour >= 7 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "day";
  if (hour >= 17 && hour < 18) return "evening";
  if (hour >= 18 && hour < 20) return "dusk";
  return "night";
};

const TimeGradientCard = () => {
  const [now, setNow] = useState<Date | null>(null);
  const t = useTranslations("BentoGrid");
  const locale = useLocale();

  const getGreeting = (hour: number) => {
    if (hour < 5) return t("good_night");
    if (hour < 12) return t("good_morning");
    if (hour < 18) return t("good_afternoon");
    if (hour >= 22) return t("good_night");
    return t("good_evening");
  };

  useEffect(() => {
    setNow(new Date());

    const interval = setInterval(() => {
      setNow(new Date());
    }, 30_000);

    return () => clearInterval(interval);
  }, []);

  if (!now) {
    return (
      <div className="absolute inset-0 w-full h-full overflow-hidden rounded-3xl bg-transparent" />
    );
  }

  const hour = now.getHours();
  const timeOfDay = getTimeOfDay(hour);

  const time = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = now.toLocaleDateString(locale, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const greeting = getGreeting(hour);

  const icons = {
    dawn: Sunrise,
    morning: Sun,
    day: Sun,
    evening: Sunset,
    dusk: CloudRain,
    night: Moon,
  };

  const styles = {
    dawn: {
      bg: "radial-gradient(circle at top left, rgba(99,102,241,0.25), transparent 45%)",
      icon: "text-indigo-600 dark:text-indigo-400",
      dot: "bg-indigo-500",
    },
    morning: {
      bg: "radial-gradient(circle at top left, rgba(59,130,246,0.2), transparent 45%)",
      icon: "text-blue-600 dark:text-blue-400",
      dot: "bg-blue-500",
    },
    day: {
      bg: "radial-gradient(circle at top left, rgba(14,165,233,0.2), transparent 45%)",
      icon: "text-sky-600 dark:text-sky-400",
      dot: "bg-sky-500",
    },
    evening: {
      bg: "radial-gradient(circle at top left, rgba(251,146,60,0.25), transparent 45%)",
      icon: "text-orange-600 dark:text-orange-400",
      dot: "bg-orange-500",
    },
    dusk: {
      bg: "radial-gradient(circle at top left, rgba(168,85,247,0.25), transparent 45%)",
      icon: "text-purple-600 dark:text-purple-400",
      dot: "bg-purple-500",
    },
    night: {
      bg: "radial-gradient(circle at top left, rgba(71,85,105,0.25), transparent 45%)",
      icon: "text-slate-600 dark:text-slate-400",
      dot: "bg-slate-500",
    },
  };

  const Icon = icons[timeOfDay];
  const currentStyle = styles[timeOfDay];

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{ background: currentStyle.bg }}
      />

      <div className="absolute inset-0 w-full h-full p-4 sm:p-6 md:p-8 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-black/10 dark:border-white/10">
            <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${currentStyle.icon}`} />
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium">
            {date}
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center text-center">
          <div>
            <div className="flex items-center justify-center gap-3 sm:gap-4 font-mono">
              <div className="bg-gray-100 dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg px-5 py-4 min-w-[110px]">
                <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 tabular-nums tracking-tight">
                  {time.split(":")[0]}
                </span>
              </div>

              <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-gray-100">
                :
              </span>

              <div className="bg-gray-100 dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg px-5 py-4 min-w-[110px]">
                <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 tabular-nums tracking-tight">
                  {time.split(":")[1]}
                </span>
              </div>
            </div>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium">
              {greeting}
            </p>
          </div>
        </div>

        <div className="flex items-end justify-end">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 ${currentStyle.dot} rounded-full`} />

            <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium">
              {t("available")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeGradientCard;
