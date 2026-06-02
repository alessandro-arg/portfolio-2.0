"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale();

  function switchLanguage(nextLocale: "en" | "de") {
    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => switchLanguage("en")}
        className={locale === "en" ? "font-semibold" : "opacity-60"}
      >
        EN
      </button>

      <span>/</span>

      <button
        onClick={() => switchLanguage("de")}
        className={locale === "de" ? "font-semibold" : "opacity-60"}
      >
        DE
      </button>
    </div>
  );
}
