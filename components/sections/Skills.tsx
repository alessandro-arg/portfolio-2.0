"use client";

import { AnimatedGradientText } from "../ui/animated-gradient-text";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto mt-10 flex h-full flex-col py-0"
    >
      <div>
        <section className="w-full overflow-hidden">
          <div className="relative mx-auto size-fit overflow-hidden">
            <div className="[mask-image:linear-gradient(to_top,transparent,black_50%,black_90%,transparent)]">
              <div className="relative mx-auto size-[300px] translate-y-36 md:size-[380px] md:translate-y-40 will-change-scroll">
                <img
                  src="/images/steel-flower.webp"
                  alt="skills cover rotating image"
                  draggable="false"
                  className="z-10 w-full opacity-65 select-none"
                />
              </div>
            </div>
          </div>

          <h2 className="relative text-5xl font-medium tracking-tight text-balance sm:text-5xl md:text-6xl text-center z-30 mb-0 md:mb-0 size-full -translate-y-10 [text-shadow:0px_4px_8px_rgba(255,255,255,0.05),0px_8px_30px_rgba(255,255,255,0.25)]">
            <p className="mb-3 font-mono text-xs font-normal tracking-widest text-black/80 uppercase md:text-sm dark:text-white/70">
              My Skills
            </p>
            <span className="font-instrument">
              <span>The secret </span>
              <AnimatedGradientText
                colorFrom="#4aeedd"
                colorTo="#16b1ff"
                className="pe-2 tracking-tight italic"
              >
                sauce
              </AnimatedGradientText>
            </span>
          </h2>
        </section>
      </div>
    </section>
  );
}
