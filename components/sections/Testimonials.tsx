import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ArrowRight } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="my-32 dark:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [text-shadow:0px_4px_8px_rgba(255,255,255,0.05),0px_8px_30px_rgba(255,255,255,0.25)]"
    >
      <h2 className="relative z-2 text-5xl font-medium tracking-tight text-balance sm:text-5xl md:mb-36 md:text-6xl text-center mt-44 md:mt-28 mb-16 mx-12 md:mx-2">
        <p className="mb-3 font-mono text-xs font-normal tracking-widest text-black/80 uppercase md:text-sm dark:text-white/70">
          Testimonials
        </p>
      </h2>
    </section>
  );
}
