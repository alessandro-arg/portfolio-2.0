"use client";

import { AnimatedGradientText } from "../ui/animated-gradient-text";
import { Ripple } from "../ui/ripple";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo, useEffect, useState } from "react";

function useIsMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

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

interface SkillIconProps {
  skill: string;
  index: number;
  total: number;
  scrollProgress: any;
}

const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const SkillIcon = ({ skill, index, total, scrollProgress }: SkillIconProps) => {
  const mounted = useIsMounted();

  // deterministic randoms
  const randomValues = useMemo(() => {
    const randomDelay = seededRandom(index * 123) * 0.15;
    const randomYOffset = (seededRandom(index * 456) - 0.5) * 80;
    const randomRotation = seededRandom(index * 789) * 90 + 90;
    return { randomDelay, randomYOffset, randomRotation };
  }, [index]);

  const { randomDelay, randomYOffset, randomRotation } = randomValues;
  const fromLeft = index % 2 === 0;

  const startPoint = Math.max(0, 0.2 - randomDelay);
  const midPoint = 0.5;

  const x = useTransform(
    scrollProgress,
    [0, startPoint, midPoint],
    [fromLeft ? -250 : 250, fromLeft ? -250 : 250, 0]
  );
  const y = useTransform(
    scrollProgress,
    [0, startPoint, midPoint],
    [randomYOffset, randomYOffset, 0]
  );
  const rotate = useTransform(
    scrollProgress,
    [0, startPoint, midPoint],
    [
      fromLeft ? -randomRotation : randomRotation,
      fromLeft ? -randomRotation : randomRotation,
      0,
    ]
  );
  const opacity = useTransform(
    scrollProgress,
    [0, startPoint, startPoint + 0.1, 1],
    [0, 0, 1, 1]
  );

  const src = `https://skillicons.dev/icons?i=${skill}&theme=dark&titles=true`;
  const baseProps = {
    src,
    alt: skill,
    className: "w-10 h-10 md:w-12 md:h-12",
    draggable: false as const,
  };

  /** ---- IMPORTANT: on server + first client render, output a plain <img> ----
   * This guarantees the server HTML matches the client’s initial HTML,
   * avoiding React’s hydration mismatch caused by motion style serialization.
   */
  if (!mounted) {
    return <img {...baseProps} />;
  }

  // After mount, we can safely render the animated version
  return <motion.img {...baseProps} style={{ x, y, rotate, opacity }} />;
};

interface SkillRowProps {
  skills: string[];
  scrollProgress: any;
  className?: string;
}

const SkillRow = ({ skills, scrollProgress, className }: SkillRowProps) => {
  return (
    <div
      className={`flex justify-center flex-wrap gap-4 mb-4 ${className ?? ""}`}
    >
      {skills.map((skill, index) => (
        <SkillIcon
          key={skill}
          skill={skill}
          index={index}
          total={skills.length}
          scrollProgress={scrollProgress}
        />
      ))}
    </div>
  );
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative mx-auto flex h-full container flex-col mt-60 w-full py-20 cursor-default"
      style={{ ["--ripple-y" as any]: "clamp(0.5rem, 16vw, 0.5rem)" }}
    >
      <section className="relative w-full overflow-x-clip">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-y-visible overflow-x-clip">
          <div className="absolute left-1/2 top-[var(--ripple-y)] -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-[90vw] aspect-square">
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
              Sauce
            </AnimatedGradientText>
          </span>
        </h2>

        <div className="relative z-10 box-border flex flex-col items-center justify-center gap-4 p-[2vw]">
          {/* Desktop */}
          <div className="font-geist w-full max-w-5xl text-center hidden md:block">
            <SkillRow skills={skillsRow1} scrollProgress={scrollYProgress} />
            <SkillRow skills={skillsRow2} scrollProgress={scrollYProgress} />
            <SkillRow skills={skillsRow3} scrollProgress={scrollYProgress} />
          </div>

          {/* Mobile */}
          <div className="font-geist w-full max-w-5xl text-center md:hidden">
            <SkillRow
              skills={mobileSkills}
              scrollProgress={scrollYProgress}
              className="gap-2 mb-2"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
