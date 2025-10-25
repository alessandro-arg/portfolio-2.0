"use client";

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import SocialButtons from "../about/ui/social-buttons";
import ContactForm from "./ContactForm";
import ContactSection from "./ContactSection";
import { toast } from "sonner";
import React from "react";
import { CheckCheck, Copy } from "lucide-react";

const EMAIL = "contact@alessandro-argenziano.com";

export default function Contact() {
  const [copied, setCopied] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 3000);

      const body = encodeURIComponent(
        "Hi Alessandro,\n\nI’d like to connect about..."
      );
      const mailtoUrl = `mailto:${EMAIL}?body=${body}`;

      toast("Copied to clipboard!", {
        description: "Email address copied successfully.",
        action: {
          label: "Send Email",
          onClick: () => {
            window.open(mailtoUrl, "_blank", "noopener,noreferrer");
          },
        },
      });
    } catch {
      toast.warning("Something went wrong.");
    }
  };
  return (
    <>
      <div className="absolute inset-0 z-[-1] h-[450px] w-full overflow-hidden bg-neutral-100/60 dark:bg-neutral-950/80 [mask-image:linear-gradient(rgb(0,0,0)_40%,rgba(0,0,0,0)_100%)] opacity-30">
        <img
          src="/images/nature-bg.webp"
          alt="nature background"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute inset-0 z-[-1] h-[450px] w-full object-cover mix-blend-overlay select-none grayscale-100"
        />
      </div>
      <section className="relative px-4 pt-10">
        <div className="mt-24 mb-6 flex w-full flex-col items-center text-balance">
          <h2 className="relative z-2 mb-0 text-balance font-medium text-5xl tracking-tight sm:text-5xl md:text-6xl text-center [text-shadow:rgba(255,255,255,0.05)_0_4px_8px,rgba(255,255,255,0.25)_0_8px_30px]">
            <p className="mb-3 font-mono font-normal text-black/80 text-xs uppercase tracking-widest md:text-sm dark:text-white/70">
              Contact
            </p>
            <span className="font-instrument">
              <span className="">Get in </span>{" "}
              <AnimatedGradientText
                colorFrom="#4aeedd"
                colorTo="#16b1ff"
                className="tracking-normal w-full"
              >
                touch
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
            {copied ? "Copied to clipboard" : EMAIL}
          </button>
          <div className="mt-4 flex gap-3">
            <SocialButtons />
          </div>
        </div>
        <div className="mt-30 flex justify-center">
          {/* Inline (no modal) */}
          <ContactForm className="w-full max-w-md" />
        </div>
      </section>
      <ContactSection />
    </>
  );
}
