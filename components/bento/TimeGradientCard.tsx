"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, CloudRain, Moon, Sun, Sunrise, Sunset } from "lucide-react";

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
          className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-2xl"
          style={{ backfaceVisibility: "hidden", perspective: 1000 }}
        >
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tabular-nums">
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

  const gradients = {
    dawn: "from-indigo-900 via-purple-500 to-orange-400",
    morning: "from-blue-400 via-cyan-300 to-yellow-200",
    day: "from-blue-500 via-sky-400 to-cyan-300",
    evening: "from-orange-400 via-pink-400 to-purple-500",
    dusk: "from-purple-600 via-pink-500 to-orange-500",
    night: "from-slate-900 via-blue-900 to-indigo-950",
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

  // Static particles positions (no random for hydration)
  const particles = [
    { x: 15, y: 20, scale: 0.8, delay: 0 },
    { x: 75, y: 35, scale: 0.6, delay: 2 },
    { x: 45, y: 65, scale: 0.9, delay: 4 },
    { x: 85, y: 80, scale: 0.7, delay: 6 },
    { x: 25, y: 50, scale: 0.5, delay: 8 },
    { x: 60, y: 15, scale: 0.85, delay: 10 },
    { x: 90, y: 45, scale: 0.65, delay: 12 },
    { x: 10, y: 75, scale: 0.75, delay: 14 },
    { x: 50, y: 90, scale: 0.55, delay: 16 },
    { x: 70, y: 60, scale: 0.95, delay: 18 },
    { x: 35, y: 30, scale: 0.7, delay: 20 },
    { x: 95, y: 25, scale: 0.8, delay: 22 },
  ];

  if (!mounted) {
    return (
      <div className="absolute inset-0 w-full h-full overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 via-sky-400 to-cyan-300" />
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Animated Gradient Background */}
      <motion.div
        key={timeData.timeOfDay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className={`absolute inset-0 bg-gradient-to-br ${
          gradients[timeData.timeOfDay]
        }`}
      />

      {/* Animated Overlay Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            initial={{
              scale: particle.scale,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -20, 0, 20, 0],
              x: [0, 10, 0, -10, 0],
              opacity: [0.3, 0.8, 0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 15 + particle.delay,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay * 0.5,
            }}
          />
        ))}
      </div>

      {/* Glass morphism card */}
      <div className="absolute inset-0 w-full h-full p-4 sm:p-6 md:p-8 flex flex-col justify-between min-h-full">
        {/* Top Section - Icon and Greeting */}
        <div className="flex items-start justify-between">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl" />
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-right"
          >
            <p className="text-white/80 text-xs sm:text-sm font-medium">
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
                <motion.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-2 bg-white rounded-full"
                />
                <motion.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-2 bg-white rounded-full"
                />
              </div>

              {/* Minutes */}
              <FlipNumber digit={timeData.minutes[0]} />
              <FlipNumber digit={timeData.minutes[1]} />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/90 font-medium"
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
            className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 border border-white/20"
          >
            <p className="text-white text-xs sm:text-sm font-medium">
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
              className="w-2 h-2 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"
            />
            <span className="text-white text-xs sm:text-sm font-medium">
              Available
            </span>
          </motion.div>
        </div>
      </div>

      {/* Ambient Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default TimeGradientCard;
