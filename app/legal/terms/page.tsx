import ContactSection from "@/app/contact/ContactSection";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import Image from "next/image";
import Link from "next/link";

export default function Terms() {
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
            Legal
          </p>
          <span className="font-instrument">
            <span className="md:text-6xl">Terms & </span>
            <AnimatedGradientText
              colorFrom="#4aeedd"
              colorTo="#16b1ff"
              className="tracking-normal italic w-full"
            >
              conditions
            </AnimatedGradientText>
          </span>
        </h2>
        <div className="text-lg mx-auto max-w-xl lg:max-w-4xl leading-relaxed text-neutral-700 dark:text-neutral-300 space-y-6">
          <p>
            Welcome to{" "}
            <a
              href="https://www.alessandro-argenziano.com"
              className="text-sky-600 dark:text-sky-400 underline hover:no-underline"
            >
              https://alessandro-argenziano.com
            </a>
            . These Terms and Conditions outline the rules and regulations for
            using this website, operated by Alessandro Argenziano.
          </p>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">
            1. Acceptance of Terms
          </h3>
          <p>
            By accessing and using this website, you accept these Terms and
            Conditions in full. If you disagree with any part of these terms,
            please do not use this website.
          </p>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">
            2. Purpose of the Website
          </h3>
          <p>
            This portfolio site is intended to present my personal work,
            projects, and professional background. All content is provided for
            informational purposes only and does not constitute professional or
            legal advice.
          </p>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">
            3. Intellectual Property
          </h3>
          <p>
            Unless otherwise stated, all materials on this website — including
            text, images, design, and code — are owned by Alessandro Argenziano.
            You may view and share content for personal, non-commercial purposes
            only. Reproduction or distribution without permission is prohibited.
          </p>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">
            4. External Links
          </h3>
          <p>
            This website may contain links to external sites. I am not
            responsible for the content or privacy practices of those
            third-party websites. Visiting such links is at your own discretion.
          </p>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">
            5. Limitation of Liability
          </h3>
          <p>
            I make no warranties regarding the accuracy or completeness of the
            information presented on this website. I am not liable for any
            damages or losses arising from the use of this site or its content.
          </p>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">
            6. Privacy and Data Protection
          </h3>
          <p>
            Please refer to the{" "}
            <Link
              href="/legal/privacy-policy"
              className="text-sky-600 dark:text-sky-400 underline hover:no-underline"
            >
              Privacy Policy
            </Link>
            to learn more about how I handle your personal information in
            compliance with the General Data Protection Regulation (GDPR).
          </p>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">
            7. Changes to These Terms
          </h3>
          <p>
            I may update these Terms and Conditions occasionally to reflect new
            features or legal requirements. Updates will be posted on this page
            with the revised date.
          </p>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">
            8. Contact
          </h3>
          <p className="space-y-1">
            <span className="block">Alessandro Argenziano</span>
            <span className="block">Kirchstrasse 2</span>
            <span className="block">79801 Hohentengen, Germany</span>
            <span className="block">
              Email:{" "}
              <a
                href="mailto:contact@alessandro-argenziano.com"
                className="text-sky-600 dark:text-sky-400 underline hover:no-underline"
              >
                contact@alessandro-argenziano.com
              </a>
            </span>
            <span className="block">Phone: +49 016092965227</span>
          </p>

          <p className="text-xs text-neutral-500 dark:text-neutral-400 pt-6 border-t border-neutral-200 dark:border-neutral-700">
            Last updated: October 2025
          </p>
        </div>
      </main>
      <ContactSection mtClassName="mt-0 sm:mt-40" />
    </>
  );
}
