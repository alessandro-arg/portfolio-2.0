"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const languages = [
  { code: "en", label: "English", short: "EN" },
  { code: "de", label: "Deutsch", short: "DE" },
] as const;

type Locale = (typeof languages)[number]["code"];

type LanguageSwitcherProps = {
  align?: "left" | "right";
  closeSignal?: number;
};

export default function LanguageSwitcher({
  align = "right",
  closeSignal,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const locale = useLocale() as Locale;

  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  function switchLanguage(nextLocale: Locale) {
    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
    setOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [closeSignal]);

  const current = languages.find((l) => l.code === locale) ?? languages[0];

  return (
    <div ref={wrapperRef} className="relative">
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="group cursor-pointer flex items-center gap-2 rounded-xl border border-border bg-zinc-300/50 dark:bg-neutral-800/80 pl-1.5 pr-3 py-1.5 shadow-sm transition-all duration-150 hover:shadow-md hover:bg-neutral-300 dark:hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {/* Letter badge */}
        <span className="inline-flex items-center justify-center h-7 w-9 rounded-md bg-zinc-50 dark:bg-zinc-700 text-xs font-semibold tracking-wider text-zinc-700 dark:text-zinc-300 font-mono select-none group-hover:bg-zinc-100/80 dark:group-hover:bg-zinc-600 transition-all duration-150">
          {current.short}
        </span>

        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-primary transition-transform duration-200",
            `${open ? "rotate-180" : ""}`,
          )}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="listbox"
          aria-label="Select language"
          className={cn(
            "absolute top-[calc(100%+10px)] min-w-[152px] rounded-xl overflow-hidden border border-border bg-card shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)] z-50 animate-in fade-in-0 zoom-in-95 duration-100",
            `${align === "right" ? "right-0" : "left-0"}`,
          )}
        >
          <div className="p-1 flex flex-col gap-0.5">
            {languages.map((lang) => {
              const isActive = locale === lang.code;
              return (
                <button
                  key={lang.code}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => switchLanguage(lang.code)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors duration-100",
                    `${isActive ? "bg-zinc-50 dark:bg-zinc-800/70" : "hover:bg-zinc-50 dark:hover:bg-zinc-800/40"}`,
                  )}
                >
                  {/* Badge */}
                  <span
                    className={cn(
                      "inline-flex items-center justify-center h-5 w-7 flex-shrink-0 rounded text-[10px] font-semibold tracking-wider font-mono transition-colors",
                      `${isActive ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"}`,
                    )}
                  >
                    {lang.short}
                  </span>

                  <span className="text-sm font-outfit font-medium">
                    {lang.label}
                  </span>

                  {/* Active dot */}
                  {isActive && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
