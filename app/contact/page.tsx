"use client";

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import SocialButtons from "../about/ui/social-buttons";
import ContactForm from "./ContactForm";
import ContactSection from "./ContactSection";
import { toast } from "sonner";
import React from "react";
import { CheckCheck, Copy } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const EMAIL = "contact@alessandro-argenziano.com";

export default function Contact() {
  const t = useTranslations();
  const [copied, setCopied] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 3000);

      const body = encodeURIComponent(t("Hero.email_template"));
      const mailtoUrl = `mailto:${EMAIL}?body=${body}`;

      toast(t("Hero.copied"), {
        description: t("Hero.email_copied_successfully"),
        action: {
          label: t("Hero.send_email"),
          onClick: () => {
            window.open(mailtoUrl, "_blank", "noopener,noreferrer");
          },
        },
      });
    } catch {
      toast.warning(t("Hero.copy_error"));
    }
  };
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
      <section className="relative px-4 pt-10">
        <div className="mt-24 mb-6 flex w-full flex-col items-center text-balance">
          <h2 className="relative z-2 mb-0 text-balance font-medium text-5xl tracking-tight sm:text-5xl md:text-6xl text-center [text-shadow:rgba(255,255,255,0.05)_0_4px_8px,rgba(255,255,255,0.25)_0_8px_30px]">
            <p className="mb-3 font-mono font-normal text-black/80 text-xs uppercase tracking-widest md:text-sm dark:text-white/70">
              {t("Contact.page_subtitle")}
            </p>
            <span className="font-instrument">
              <span className="">{t("Contact.page_title")}</span>{" "}
              <AnimatedGradientText
                colorFrom="#4aeedd"
                colorTo="#16b1ff"
                className="tracking-normal w-full"
              >
                {t("Contact.page_title_2")}
              </AnimatedGradientText>
            </span>
          </h2>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-2 py-2 font-light outline-hidden transition-all duration-300 cursor-pointer hover:text-black/60 dark:hover:text-white/90 text-black/85 text-lg sm:text-xl md:text-2xl dark:text-white/85"
            aria-live="polite"
          >
            {copied ? (
              <CheckCheck className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Copy className="h-5 w-5" aria-hidden="true" />
            )}
            {copied ? t("Hero.copied") : EMAIL}
          </button>
          <div className="mt-4 flex gap-3">
            <SocialButtons />
          </div>
        </div>
        <div className="mt-30 flex justify-center">
          <ContactForm className="w-full max-w-md" />
        </div>
      </section>
      <ContactSection />
    </>
  );
}
