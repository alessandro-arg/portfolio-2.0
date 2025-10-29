import ContactSection from "@/app/contact/ContactSection";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import Image from "next/image";

export default function PrivacyPolicy() {
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
            <span className="md:text-6xl">Privacy </span>
            <AnimatedGradientText
              colorFrom="#4aeedd"
              colorTo="#16b1ff"
              className="tracking-normal italic w-full"
            >
              policy
            </AnimatedGradientText>
          </span>
        </h2>
        <div className="text-lg mx-auto max-w-xl lg:max-w-4xl leading-relaxed text-neutral-700 dark:text-neutral-300 space-y-6">
          <p>
            This website (
            <a
              href="https://alessandro-argenziano.com"
              className="text-sky-600 dark:text-sky-400 underline hover:no-underline"
            >
              https://alessandro-argenziano.com
            </a>
            ) is operated by Alessandro Argenziano. I take your privacy
            seriously and handle your personal data responsibly and in
            accordance with applicable data protection laws.
          </p>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">
            1. Data Collection
          </h3>
          <p>
            This portfolio website does not actively collect personal data
            except when you contact me via email or contact form. In that case,
            I only collect the information you provide (such as your name, email
            address, and message) to respond to your inquiry.
          </p>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">
            2. Use of Personal Data
          </h3>
          <p>
            Any personal information you share will only be used to communicate
            with you regarding your request and will not be shared with third
            parties unless required by law.
          </p>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">
            3. Cookies & Analytics
          </h3>
          <p>
            This site may use basic cookies or analytics tools to improve user
            experience and website performance. These tools collect anonymized
            data such as browser type, visit duration, and visited pages.
          </p>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">
            4. Your Rights
          </h3>
          <p>
            You have the right to request access, correction, or deletion of
            your personal data. For any privacy-related inquiries, please
            contact me directly.
          </p>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">
            5. Contact
          </h3>
          <p className="space-y-1">
            <span className="block">Alessandro Argenziano</span>
            <span className="block">Kirchstrasse 2</span>
            <span className="block">79801 Hohentengen, Germany</span>
            <span className="block">
              Email:{" "}
              <a
                href="mailto:contact@alessandro-argenziano.com"
                target="_blank"
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
