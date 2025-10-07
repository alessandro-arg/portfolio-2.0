"use client";

import { AnimatedGradientText } from "../ui/animated-gradient-text";
import { Ripple } from "../ui/ripple";

const skillsRow1 = [
  "angular",
  "react",
  "nextjs",
  "js",
  "ts",
  "html",
  "css",
  "tailwind",
  "figma",
  "materialui",
];
const skillsRow2 = [
  "postgresql",
  "firebase",
  "prisma",
  "bootstrap",
  "django",
  "npm",
  "bash",
  "git",
  "github",
];
const skillsRow3 = [
  "nodejs",
  "py",
  "vscode",
  "vercel",
  "flutter",
  "postman",
  "sentry",
];

const mobileSkills = [
  "angular",
  "react",
  "nextjs",
  "js",
  "ts",
  "html",
  "css",
  "tailwind",
  "figma",
  "materialui",
  "postgresql",
  "firebase",
  "prisma",
  "bootstrap",
  "django",
  "npm",
  "bash",
  "git",
  "github",
  "nodejs",
  "py",
  "vscode",
  "vercel",
  "flutter",
  "postman",
  "sentry",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto flex h-full container flex-col mt-28 w-full py-20 cursor-default"
    >
      <section className="relative w-full overflow-hidden">
        <div
          className="
            pointer-events-none absolute inset-0 z-0
            overflow-hidden
            [mask-image:linear-gradient(to_top,transparent,black_50%,black_90%,transparent)]
          "
        >
          <div
            className="
              absolute left-1/2
              -translate-x-1/2
              -translate-y-1/2
              top-[var(--ripple-anchor)]
              w-[700px] max-w-[90vw] aspect-square
            "
          >
            <Ripple className="absolute inset-0 w-full h-full opacity-65 select-none" />
          </div>
        </div>

        <h2 className="relative z-10 text-5xl font-medium tracking-tight text-balance sm:text-5xl md:text-6xl text-center mb-0 md:mb-0 size-full [text-shadow:0px_4px_8px_rgba(255,255,255,0.05),0px_8px_30px_rgba(255,255,255,0.25)]">
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
              Sauce
            </AnimatedGradientText>
          </span>
        </h2>

        <div className="relative z-10 box-border flex flex-col items-center justify-center gap-4 p-[2vw]">
          {/* Desktop */}
          <div className="font-geist w-full max-w-5xl text-center hidden md:block">
            <div className="flex justify-center flex-wrap gap-4 mb-4">
              {skillsRow1.map((skill) => (
                <img
                  key={skill}
                  src={`https://skillicons.dev/icons?i=${skill}&theme=dark&titles=true`}
                  alt={skill}
                  className="w-10 h-10 md:w-12 md:h-12"
                  draggable="false"
                />
              ))}
            </div>
            <div className="flex justify-center flex-wrap gap-4 mb-4">
              {skillsRow2.map((skill) => (
                <img
                  key={skill}
                  src={`https://skillicons.dev/icons?i=${skill}&theme=dark&titles=true`}
                  alt={skill}
                  className="w-10 h-10 md:w-12 md:h-12"
                  draggable="false"
                />
              ))}
            </div>
            <div className="flex justify-center flex-wrap gap-4 mb-4">
              {skillsRow3.map((skill) => (
                <img
                  key={skill}
                  src={`https://skillicons.dev/icons?i=${skill}&theme=dark&titles=true`}
                  alt={skill}
                  className="w-10 h-10 md:w-12 md:h-12"
                  draggable="false"
                />
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="font-geist w-full max-w-5xl text-center md:hidden">
            <div className="flex justify-center flex-wrap gap-2 mb-2">
              {mobileSkills.map((skill) => (
                <img
                  key={skill}
                  src={`https://skillicons.dev/icons?i=${skill}&theme=dark&titles=true`}
                  alt={skill}
                  className="w-10 h-10"
                  draggable="false"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
