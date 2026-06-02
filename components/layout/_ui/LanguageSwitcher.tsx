"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { ChevronDown } from "lucide-react";

const languages = [
  { code: "en", label: "English", short: "EN" },
  { code: "de", label: "Deutsch", short: "DE" },
] as const;

type Locale = (typeof languages)[number]["code"];

export default function LanguageSwitcher() {
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

  const current = languages.find((l) => l.code === locale) ?? languages[0];

  return (
    <div ref={wrapperRef} className="relative">
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="
          flex items-center gap-1.5
          rounded-xl
          border border-black/8 dark:border-white/10
          bg-white dark:bg-zinc-900
          pl-1 pr-2.5 py-1
          shadow-[0_2px_8px_rgba(0,0,0,0.06)]
          transition-all duration-150
          hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)]
          hover:border-black/12 dark:hover:border-white/15
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
        "
      >
        {/* Letter badge */}
        <span
          className="
            inline-flex items-center justify-center
            h-6 w-8
            rounded-md
            bg-zinc-100 dark:bg-zinc-800
            text-[11px] font-semibold tracking-wider
            text-zinc-700 dark:text-zinc-300
            font-mono
            select-none
          "
        >
          {current.short}
        </span>

        <ChevronDown
          className={`
            h-3.5 w-3.5
            text-zinc-400 dark:text-zinc-500
            transition-transform duration-200
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="listbox"
          aria-label="Select language"
          className="
            absolute right-0 top-[calc(100%+8px)]
            min-w-[148px]
            overflow-hidden
            rounded-xl
            border border-black/8 dark:border-white/10
            bg-white dark:bg-zinc-900
            shadow-[0_8px_30px_rgba(0,0,0,0.10)]
            z-50
            animate-in fade-in-0 zoom-in-95
            duration-100
          "
        >
          {/* Callout arrow */}
          <div
            className="
              absolute -top-[7px] right-5
              h-3 w-3
              rotate-45
              border-l border-t border-black/8 dark:border-white/10
              bg-white dark:bg-zinc-900
            "
          />

          <div className="py-1">
            {languages.map((lang) => {
              const isActive = locale === lang.code;
              return (
                <button
                  key={lang.code}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => switchLanguage(lang.code)}
                  className={`
                    w-full flex items-center gap-3
                    px-3 py-2.5
                    text-left transition-colors duration-100
                    ${
                      isActive
                        ? "bg-zinc-50 dark:bg-zinc-800/70"
                        : "hover:bg-zinc-50 dark:hover:bg-zinc-800/40"
                    }
                  `}
                >
                  {/* Letter badge */}
                  <span
                    className={`
                      inline-flex items-center justify-center
                      h-5 w-7 flex-shrink-0
                      rounded
                      text-[10px] font-semibold tracking-wider font-mono
                      transition-colors
                      ${
                        isActive
                          ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                      }
                    `}
                  >
                    {lang.short}
                  </span>

                  <span
                    className={`
                      text-sm font-outfit
                      ${
                        isActive
                          ? "text-zinc-900 dark:text-white font-medium"
                          : "text-zinc-500 dark:text-zinc-400"
                      }
                    `}
                  >
                    {lang.label}
                  </span>

                  {/* Active dot */}
                  {isActive && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-white flex-shrink-0" />
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
