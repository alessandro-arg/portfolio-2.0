"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloudRain, Moon, Sun, Sunrise, Sunset } from "lucide-react";

type TimeOfDay = "dawn" | "morning" | "day" | "evening" | "dusk" | "night";

interface TimeData {
  hours: string;
  minutes: string;
  date: string;
  timeOfDay: TimeOfDay;
  greeting: string;
}

// Flip Number Component
const FlipNumber = ({ digit }: { digit: string }) => {
  return (
    <div className="relative w-12 h-16 sm:w-16 sm:h-20">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={digit}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-neutral-900 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg"
          style={{ backfaceVisibility: "hidden", perspective: 1000 }}
        >
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 tabular-nums">
            {digit}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const TimeGradientCard = () => {
  const [timeData, setTimeData] = useState<TimeData>({
    hours: "--",
    minutes: "--",
    date: "",
    timeOfDay: "day",
    greeting: "",
  });
  const [mounted, setMounted] = useState(false);

  const getTimeOfDay = (hour: number): TimeOfDay => {
    if (hour >= 5 && hour < 7) return "dawn";
    if (hour >= 7 && hour < 12) return "morning";
    if (hour >= 12 && hour < 17) return "day";
    if (hour >= 17 && hour < 18) return "evening";
    if (hour >= 18 && hour < 20) return "dusk";
    return "night";
  };

  const getGreeting = (hour: number): string => {
    if (hour >= 5 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  useEffect(() => {
    setMounted(true);

    const updateTime = () => {
      const now = new Date();
      const hour = now.getHours();
      const timeOfDay = getTimeOfDay(hour);
      const greeting = getGreeting(hour);

      setTimeData({
        hours: String(hour).padStart(2, "0"),
        minutes: String(now.getMinutes()).padStart(2, "0"),
        date: now.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
        timeOfDay,
        greeting,
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Subtle edge gradients - color fades from edges to transparent center
  const edgeGradients = {
    dawn: {
      light: "rgba(99, 102, 241, 0.25)",
      dark: "rgba(129, 140, 248, 0.2)",
    },
    morning: {
      light: "rgba(59, 130, 246, 0.2)",
      dark: "rgba(96, 165, 250, 0.18)",
    },
    day: {
      light: "rgba(14, 165, 233, 0.2)",
      dark: "rgba(56, 189, 248, 0.18)",
    },
    evening: {
      light: "rgba(251, 146, 60, 0.25)",
      dark: "rgba(251, 191, 36, 0.2)",
    },
    dusk: {
      light: "rgba(168, 85, 247, 0.25)",
      dark: "rgba(192, 132, 252, 0.2)",
    },
    night: {
      light: "rgba(71, 85, 105, 0.25)",
      dark: "rgba(100, 116, 139, 0.2)",
    },
  };

  // Accent colors for icon and pulsing dot
  const accentColors = {
    dawn: {
      icon: "text-indigo-600 dark:text-indigo-400",
      dot: "bg-indigo-500",
    },
    morning: { icon: "text-blue-600 dark:text-blue-400", dot: "bg-blue-500" },
    day: { icon: "text-sky-600 dark:text-sky-400", dot: "bg-sky-500" },
    evening: {
      icon: "text-orange-600 dark:text-orange-400",
      dot: "bg-orange-500",
    },
    dusk: {
      icon: "text-purple-600 dark:text-purple-400",
      dot: "bg-purple-500",
    },
    night: { icon: "text-slate-600 dark:text-slate-400", dot: "bg-slate-500" },
  };

  const icons = {
    dawn: Sunrise,
    morning: Sun,
    day: Sun,
    evening: Sunset,
    dusk: CloudRain,
    night: Moon,
  };

  const Icon = icons[timeData.timeOfDay];
  const colors = accentColors[timeData.timeOfDay];

  // Minimal floating particles
  const particles = [
    { x: 10, y: 15, scale: 0.6 },
    { x: 90, y: 20, scale: 0.5 },
    { x: 15, y: 85, scale: 0.7 },
    { x: 85, y: 80, scale: 0.6 },
  ];

  if (!mounted) {
    return (
      <div className="absolute inset-0 w-full h-full overflow-hidden rounded-3xl bg-transparent" />
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Subtle Radial Edge Gradient - Multiple layers for smooth fade */}
      <motion.div
        key={timeData.timeOfDay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        {/* Top-left radial */}
        <div
          className={`absolute inset-0 bg-gradient-radial ${edgeGradients[timeData.timeOfDay]}`}
          style={{
            background: `radial-gradient(circle at 0% 0%, var(--tw-gradient-stops))`,
          }}
        />

        {/* Top-right radial */}
        <div
          className={`absolute inset-0 bg-gradient-radial ${edgeGradients[timeData.timeOfDay]}`}
          style={{
            background: `radial-gradient(circle at 100% 0%, var(--tw-gradient-stops))`,
          }}
        />

        {/* Bottom-left radial */}
        <div
          className={`absolute inset-0 bg-gradient-radial ${edgeGradients[timeData.timeOfDay]}`}
          style={{
            background: `radial-gradient(circle at 0% 100%, var(--tw-gradient-stops))`,
          }}
        />

        {/* Bottom-right radial */}
        <div
          className={`absolute inset-0 bg-gradient-radial ${edgeGradients[timeData.timeOfDay]}`}
          style={{
            background: `radial-gradient(circle at 100% 100%, var(--tw-gradient-stops))`,
          }}
        />
      </motion.div>

      {/* Minimal Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-400/30 dark:bg-gray-500/30 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            initial={{
              scale: particle.scale,
              opacity: 0.2,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content Layer */}
      <div className="absolute inset-0 w-full h-full p-4 sm:p-6 md:p-8 flex flex-col justify-between min-h-full">
        {/* Top Section - Icon and Date */}
        <div className="flex items-start justify-between">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative"
          >
            <div className="relative bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-black/10 dark:border-white/10">
              <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${colors.icon}`} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-right"
          >
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium">
              {timeData.date}
            </p>
          </motion.div>
        </div>

        {/* Middle Section - Flip Clock Display */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              {/* Hours */}
              <FlipNumber digit={timeData.hours[0]} />
              <FlipNumber digit={timeData.hours[1]} />

              {/* Separator */}
              <div className="flex flex-col gap-2 mx-1">
                <motion.div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full" />
                <motion.div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full" />
              </div>

              {/* Minutes */}
              <FlipNumber digit={timeData.minutes[0]} />
              <FlipNumber digit={timeData.minutes[1]} />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium"
            >
              {timeData.greeting}
            </motion.p>
          </div>
        </div>

        {/* Bottom Section - Location & Status */}
        <div className="flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 border border-black/10 dark:border-white/10"
          >
            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium">
              Hohentengen, DE
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`w-2 h-2 ${colors.dot} rounded-full shadow-lg`}
            />
            <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium">
              Available
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TimeGradientCard;
