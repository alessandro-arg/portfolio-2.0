"use client";

import type { CSSProperties } from "react";
import { AnimatedGradientText } from "../ui/animated-gradient-text";
import { Ripple } from "../ui/ripple";
import { useRef } from "react";
import Image from "next/image";

type CSSWithVars = CSSProperties & {
  [key: `--${string}`]: string | number;
};

const skillsRow1 = ["angular", "react", "nextjs", "ts", "js"];

const skillsRow2 = ["firebase", "nodejs", "py", "django", "postman"];

const skillsRow3 = ["vercel", "tailwind", "figma", "git", "github"];

const mobileSkills = [
  "angular",
  "react",
  "nextjs",
  "ts",
  "js",
  "firebase",
  "nodejs",
  "py",
  "django",
  "postman",
  "vercel",
  "tailwind",
  "figma",
  "git",
  "github",
];

const SkillIcon = ({ skill }: { skill: string }) => (
  <Image
    src={`https://skillicons.dev/icons?i=${skill}&theme=dark&titles=true`}
    alt={skill}
    width={56}
    height={56}
    className="w-12 h-12 md:w-14 md:h-14"
    draggable={false}
    unoptimized
  />
);

interface SkillRowProps {
  skills: string[];
  className?: string;
}

const SkillRow = ({ skills, className }: SkillRowProps) => (
  <div
    className={`flex justify-center flex-wrap gap-4 mb-4 ${className ?? ""}`}
  >
    {skills.map((skill) => (
      <SkillIcon key={skill} skill={skill} />
    ))}
  </div>
);

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  const sectionStyle: CSSWithVars = {
    "--ripple-y": "clamp(0.5rem, 16vw, 0.5rem)",
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative mx-auto flex h-full container flex-col mt-40 w-full py-20 cursor-default"
      style={sectionStyle}
    >
      <section className="relative w-full overflow-x-clip">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-y-visible overflow-x-clip">
          <div className="absolute left-1/2 top-(--ripple-y) -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-[90vw] aspect-square">
            <Ripple className="absolute inset-0 w-full h-full opacity-65 select-none rounded-full" />
          </div>
        </div>

        <h2 className="relative z-10 text-5xl font-medium tracking-tight text-balance sm:text-5xl md:text-6xl text-center mb-0 md:mb-5 size-full [text-shadow:0px_4px_8px_rgba(255,255,255,0.05),0px_8px_30px_rgba(255,255,255,0.25)]">
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

        <div className="relative z-10 box-border flex flex-col items-center justify-center gap-4 p-[2vw]">
          {/* Desktop */}
          <div className="font-geist w-full max-w-5xl text-center hidden md:block">
            <SkillRow skills={skillsRow1} />
            <SkillRow skills={skillsRow2} />
            <SkillRow skills={skillsRow3} />
          </div>

          {/* Mobile */}
          <div className="font-geist w-full max-w-5xl text-center md:hidden">
            <SkillRow skills={mobileSkills} className="gap-2 mb-2" />
          </div>
        </div>
      </section>
    </section>
  );
}
