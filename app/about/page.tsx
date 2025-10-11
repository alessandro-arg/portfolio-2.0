import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

export default function ProjectsPage() {
  return (
    <section>
      <div className="absolute inset-0 z-[-1] h-[450px] w-full overflow-hidden bg-neutral-100/60 dark:bg-neutral-950/80 [mask-image:linear-gradient(rgb(0,0,0)_40%,rgba(0,0,0,0)_100%)] opacity-30">
        <img
          src="/images/nature-bg.webp"
          alt="nature background"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute inset-0 z-[-1] h-[450px] w-full object-cover mix-blend-overlay select-none grayscale-100"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 pt-28 pb-12 md:pt-36 md:pb-20">
        <h2 className="relative z-2 text-5xl font-medium tracking-tight text-balance sm:text-5xl md:text-6xl text-center mb-8 md:mb-0 lg:text-left max-w-lg [text-shadow:rgba(255,255,255,0.05)_0px_4px_8px,rgba(255,255,255,0.25)_0px_8px_30px]">
          <p className="mb-3 font-mono text-xs font-normal tracking-widest text-black/80 uppercase md:text-sm dark:text-white/70">
            More about me
          </p>
          <span className="font-instrument">
            <span>I'm Alessandro, a creative </span>
            <AnimatedGradientText
              colorFrom="#4aeedd"
              colorTo="#16b1ff"
              className="pe-2 tracking-tight italic"
            >
              developer
            </AnimatedGradientText>
          </span>
        </h2>
        <div className="flex flex-col items-center justify-between lg:flex-row"></div>
      </div>
    </section>
  );
}
