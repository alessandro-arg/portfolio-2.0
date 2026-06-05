import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import ContactSection from "../contact/ContactSection";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Attribution() {
  const t = useTranslations("Attribution");
  return (
    <>
      <div className="absolute inset-0 z-[-1] h-[450px] w-full overflow-hidden bg-neutral-100/60 dark:bg-neutral-950/80 mask-[linear-gradient(rgb(0,0,0)_40%,rgba(0,0,0,0)_100%)] opacity-30">
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
      <main className="container relative z-10 mx-auto pt-32">
        <h2 className="relative z-2 text-balance font-medium text-5xl tracking-tight sm:text-5xl md:mb-36 md:text-6xl text-center max-w-xl mx-auto mb-20 [text-shadow:rgba(255,255,255,0.05)_0_4px_8px,rgba(255,255,255,0.25)_0_8px_30px]">
          <p className="mb-3 font-mono font-normal text-black/80 text-xs uppercase tracking-widest md:text-sm dark:text-white/70">
            {t("eyebrow")}
          </p>
          <span className="font-instrument">
            <span className="md:text-6xl">{t("title_line_1")}</span>
            <br />
            <span className="md:text-6xl">
              {t("title_line_2")}
              {""}
              <AnimatedGradientText
                colorFrom="#4aeedd"
                colorTo="#16b1ff"
                className="tracking-normal italic w-full"
              >
                {t("highlight")}
              </AnimatedGradientText>
            </span>
          </span>
        </h2>
        <div className="relative z-10 mx-auto max-w-4xl text-neutral-600 dark:text-neutral-400 sm:mb-50">
          <div className="flex flex-col gap-y-8">
            <h1 className="text-xl"> {t("intro")}</h1>
            <div className="flex flex-col gap-y-6 text-lg leading-relaxed">
              <p>{t("text_1")}</p>
              <p>{t("text_2")}</p>
              <p>{t("text_3")}</p>
              <p> {t("thanks")}</p>
            </div>
            <div className="mt-6 flex flex-col gap-y-2">
              <p> {t("best")}</p>
              <div className="relative text-black dark:text-neutral-200">
                Alessandro Argenziano
              </div>
            </div>
          </div>
        </div>
      </main>
      <ContactSection />
    </>
  );
}
