import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

export default function BucketList() {
  return (
    <main className="px-4 py-16 pt-36 md:px-1">
      <h2 className="relative z-2 text-balance font-medium text-5xl tracking-tight sm:text-5xl md:mb-36 md:text-6xl text-center max-w-xl mx-auto mb-20 [text-shadow:rgba(255,255,255,0.05)_0_4px_8px,rgba(255,255,255,0.25)_0_8px_30px]">
        <p className="mb-3 font-mono font-normal text-black/80 text-xs uppercase tracking-widest md:text-sm dark:text-white/70">
          The bucket list
        </p>
        <span className="font-instrument">
          <span className="md:text-5xl">The things I'll do </span>
          <AnimatedGradientText
            colorFrom="#4aeedd"
            colorTo="#16b1ff"
            className="tracking-tight italic"
          >
            before I'm gone
          </AnimatedGradientText>
        </span>
      </h2>
    </main>
  );
}
