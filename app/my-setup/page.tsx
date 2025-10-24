import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import ContactSection from "../contact/ContactSection";

export default function MySetup() {
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
      <main className="px-4 py-16 pt-36 md:px-1">
        <h2 className="relative z-2 mb-12 text-balance font-medium text-5xl tracking-tight sm:text-5xl md:mb-20 md:text-6xl text-center max-w-xl mx-auto [text-shadow:rgba(255,255,255,0.05)_0_4px_8px,rgba(255,255,255,0.25)_0_8px_30px]">
          <p className="mb-3 font-mono font-normal text-black/80 text-xs uppercase tracking-widest md:text-sm dark:text-white/70">
            My tools
          </p>
          <span className="font-instrument">
            <span className="md:text-6xl">The</span>
            <AnimatedGradientText
              colorFrom="#4aeedd"
              colorTo="#16b1ff"
              className="tracking-normal italic w-full"
            >
              Setup
            </AnimatedGradientText>
          </span>
        </h2>
        <div className="mx-auto my-20 max-w-5xl">
          <div className="overflow-hidden rounded-2xl border-1 border-neutral-200/50 shadow-lg dark:border-white/10">
            <img src="/images/mac-m4-air.avif" alt="MacBook" loading="lazy" />
          </div>
          <h3 className="mt-2 text-center font-light text-base text-neutral-900 dark:text-neutral-100">
            MacBook Air
          </h3>
        </div>
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-left font-bold text-2xl text-neutral-900 dark:text-neutral-100">
            Software & Tools
          </h2>
        </div>
      </main>
      <ContactSection />
    </>
  );
}
