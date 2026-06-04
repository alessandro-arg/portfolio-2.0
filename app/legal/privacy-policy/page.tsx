import ContactSection from "@/app/contact/ContactSection";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function PrivacyPolicy() {
  const t = useTranslations("PrivacyPolicy");
  return (
    <>
      <div className="absolute inset-0 z-[-1] h-[450px] w-full overflow-hidden bg-neutral-100/60 dark:bg-neutral-950/80 [mask-image:linear-gradient(rgb(0,0,0)_40%,rgba(0,0,0,0)_100%)] opacity-30">
        <Image
          src="/images/nature-bg.webp"
          alt="nature background"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[-1] h-[450px] w-full object-cover mix-blend-overlay select-none grayscale"
          decoding="async"
          sizes="100vw"
        />
      </div>
      <main className="px-4 py-16 pt-36 md:px-1">
        <h2 className="relative z-2 text-balance font-medium text-5xl tracking-tight sm:text-5xl md:mb-36 md:text-6xl text-center max-w-xl mx-auto mb-20 [text-shadow:rgba(255,255,255,0.05)_0_4px_8px,rgba(255,255,255,0.25)_0_8px_30px]">
          <p className="mb-3 font-mono font-normal text-black/80 text-xs uppercase tracking-widest md:text-sm dark:text-white/70">
            {t("eyebrow")}
          </p>
          <span className="font-instrument truncate line-clamp-1">
            <span className="md:text-6xl">{t("title")}</span>
            <AnimatedGradientText
              colorFrom="#4aeedd"
              colorTo="#16b1ff"
              className="tracking-normal italic w-full"
            >
              {t("highlight")}
            </AnimatedGradientText>
          </span>
        </h2>
        <div className="text-lg mx-auto max-w-xl lg:max-w-4xl leading-relaxed text-neutral-700 dark:text-neutral-300 space-y-6">
          <p>
            {t("intro_before_link")}
            <a
              href="https://www.alessandro-argenziano.com"
              className="text-sky-600 dark:text-sky-400 underline hover:no-underline"
            >
              https://alessandro-argenziano.com
            </a>
            {t("intro_after_link")}
          </p>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">
            {t("section_1_title")}
          </h3>
          <p>{t("section_1_text")}</p>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">
            {t("section_2_title")}
          </h3>
          <p>{t("section_2_text")}</p>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">
            {t("section_3_title")}
          </h3>
          <p>{t("section_3_text")}</p>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">
            {t("section_4_title")}
          </h3>
          <p>{t("section_4_text")}</p>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">
            {t("section_5_title")}
          </h3>
          <p className="space-y-1">
            <span className="block">Alessandro Argenziano</span>
            <span className="block">
              {t("email_label")}{" "}
              <a
                href="mailto:contact@alessandro-argenziano.com"
                target="_blank"
                className="text-sky-600 dark:text-sky-400 underline hover:no-underline"
              >
                contact@alessandro-argenziano.com
              </a>
            </span>
          </p>

          <p className="text-xs text-neutral-500 dark:text-neutral-400 pt-6 border-t border-neutral-200 dark:border-neutral-700">
            {t("last_updated")}
          </p>
        </div>
      </main>
      <ContactSection mtClassName="mt-0 sm:mt-40" />
    </>
  );
}
