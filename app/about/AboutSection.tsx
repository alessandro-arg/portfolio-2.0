"use client";

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ArrowRight } from "lucide-react";
import SocialButtons from "./ui/social-buttons";
import SectionImage from "./ui/section-image";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("About");

  return (
    <section id="about" className="relative px-4 pt-20 container">
      <div className="relative py-10 lg:max-h-[1300px]">
        <section className="relative mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 lg:size-full lg:flex-row lg:justify-between">
          <div className="min-w-full lg:max-w-[55%] lg:min-w-auto">
            <p className="text-center lg:text-left mb-3 font-mono text-xs font-normal tracking-widest text-black/80 uppercase md:text-sm dark:text-white/70 md:mt-28">
              {t("landing_about_eyebrow")}
            </p>

            <h2 className="relative z-2 text-5xl font-medium tracking-tight sm:text-5xl md:text-6xl text-center lg:text-left mb-8 text-balance [text-shadow:0px_4px_8px_rgba(255,255,255,0.05),0px_8px_30px_rgba(255,255,255,0.25)]">
              <span className="font-instrument">
                <span>{t("landing_about_title")} </span>
                <AnimatedGradientText
                  colorFrom="#4aeedd"
                  colorTo="#16b1ff"
                  className="pe-2 tracking-tight italic"
                >
                  {t("landing_about_highlight")}
                </AnimatedGradientText>
              </span>
            </h2>

            <div className="relative z-5 mx-auto flex max-w-xl flex-col gap-8 text-center text-base font-light tracking-wider text-black/80 lg:mx-0 lg:max-w-[550px] lg:text-left lg:text-lg dark:text-neutral-200">
              <p>{t("landing_about_text_1")}</p>
              <p>{t("landing_about_text_2")}</p>
              <p>{t("landing_about_text_3")}</p>
              <SocialButtons />
            </div>

            <a
              href="/about#experience"
              className="group dark:text-white flex w-full lg:w-fit items-center justify-center gap-2 font-mono text-neutral-800 transition-colors hover:text-black mt-10 lg:justify-start"
            >
              {t("landing_about_cta")}
              <div className="bg-white-1/50 size-[25px] overflow-hidden rounded-full border border-neutral-300 transition-all duration-500 group-hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:group-hover:bg-white/10">
                <div className="flex w-12 -translate-x-1/2 transition-transform duration-500 ease-in-out group-hover:translate-x-0">
                  <span className="flex size-6">
                    <ArrowRight
                      className="m-auto size-3.5"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="flex size-6">
                    <ArrowRight
                      className="m-auto size-3.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </div>
            </a>
          </div>

          <div className="group relative grid aspect-square w-52 place-content-center mr-4 lg:me-10 mt-20 lg:w-[500px] border-dotted border-2">
            <SectionImage />
          </div>
        </section>
      </div>
    </section>
  );
}
