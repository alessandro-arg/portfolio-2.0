"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Fancy light/dark theme toggle with:
 * - Sliding, curved "pill" indicator (with glow + blur)
 * - Accessible (aria-pressed, keyboard support)
 * - Hydration-safe (waits for mount)
 *
 * Tailwind must be in class mode: darkMode: "class"
 */
export function ThemeToggle({
  className,
  size = 26, // icon button square size in px
}: {
  className?: string;
  size?: number;
}) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Determine active theme safely after mount
  const active = mounted
    ? theme === "system"
      ? resolvedTheme
      : theme
    : undefined;
  const isLight = active === "light";
  const isDark = active === "dark";

  // Layout constants (mirror the container padding so the pill lines up perfectly)
  const containerPadding = 4; // p-1 => 4px
  const pillLeft = useMemo(
    () => (isDark ? containerPadding + size : containerPadding),
    [isDark, size]
  );

  // Keyboard support: use left/right arrows to switch themes
  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowLeft") setTheme("light");
    if (e.key === "ArrowRight") setTheme("dark");
  }

  return (
    <div
      className={[
        "relative flex items-center rounded-full p-1 ring-1 ring-border",
        // subtle background to better showcase the pill (optional—remove if not desired)
        "bg-background/40 dark:bg-background/30",
        "backdrop-blur-[2px]",
        className ?? "",
      ].join(" ")}
      role="group"
      aria-label="Toggle Theme"
      data-theme-toggle
      tabIndex={0}
      onKeyDown={onKeyDown}
      // prevent text selection when toggling rapidly
      style={{ userSelect: "none", WebkitUserSelect: "none" }}
    >
      {/* Sliding pill (curved + glow) */}
      {mounted && (
        <motion.div
          key="pill"
          layout
          className={[
            "absolute rounded-full",
            "top-1 bottom-1", // match container padding for perfect fit
            "backdrop-blur-sm",
            // soft gradient fill that works in light & dark
            "bg-gradient-to-b from-foreground/10 to-foreground/15 dark:from-white/10 dark:to-white/15",
            // thin inner ring for definition
            "ring-1 ring-foreground/10 dark:ring-white/10",
            // shadow stack for premium depth
            "shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_10px_rgba(0,0,0,0.08)]",
          ].join(" ")}
          style={{
            width: size,
            left: pillLeft,
            // subtle outer glow that adapts to theme
            boxShadow:
              active === "dark"
                ? "0 0 24px rgba(255,255,255,0.12)"
                : "0 0 24px rgba(0,0,0,0.06)",
          }}
          transition={{
            type: "spring",
            stiffness: 520,
            damping: 32,
            mass: 0.5,
          }}
        >
          {/* extra inner glow (radial), no pointer hit */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              background:
                active === "dark"
                  ? "radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.18), transparent 70%)"
                  : "radial-gradient(60% 60% at 50% 50%, rgba(0,0,0,0.08), transparent 70%)",
              filter: "blur(2px)",
            }}
          />
        </motion.div>
      )}

      {/* Light button */}
      <button
        type="button"
        aria-label="Light theme"
        aria-pressed={isLight}
        onClick={() => setTheme("light")}
        className={[
          "relative grid place-items-center rounded-full p-1.5 transition-colors",
          "text-fd-muted-foreground",
          isLight ? "text-fd-accent-foreground" : "",
        ].join(" ")}
        style={{ width: size, height: size }}
      >
        <Sun className="relative m-auto w-full h-full" />
      </button>

      {/* Dark button */}
      <button
        type="button"
        aria-label="Dark theme"
        aria-pressed={isDark}
        onClick={() => setTheme("dark")}
        className={[
          "relative grid place-items-center rounded-full p-1.5 transition-colors",
          "text-fd-muted-foreground",
          isDark ? "text-fd-accent-foreground" : "",
        ].join(" ")}
        style={{ width: size, height: size }}
      >
        <Moon className="relative m-auto w-full h-full" />
      </button>
    </div>
  );
}
