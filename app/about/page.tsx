import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import ExperienceSection from "./ExperienceSection";
import SocialButtons from "./social-buttons";
import { ThreeDDraggableCarousel } from "./ThreeDDraggableCarousel";

export default function ProjectsPage() {
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
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="relative z-5 mx-auto flex max-w-xl flex-col gap-y-8 text-center text-base font-light tracking-wider text-black/80 lg:mx-0 lg:max-w-[550px] lg:text-left lg:text-lg dark:text-neutral-300">
            <p>
              I'm Alessandro Argenziano, a full-stack developer passionate about
              creating dynamic web experiences. From frontend to backend, I
              solve complex problems with clean, efficient code. My expertise
              spans React, Next.js, and Django, and I'm always motivated to
              learn more.
            </p>
            <p>
              When I'm not immersed in work, I'm exploring new ideas and staying
              curious.
            </p>
            <p>I believe in waking up each day eager to make a difference!</p>
            <SocialButtons />
          </div>
          <div className="relative flex h-[350px] w-full max-w-[200px] flex-col items-center justify-center max-lg:mt-12 lg:h-[450px] lg:max-w-[270px] cursor-grab active:cursor-grabbing lg:me-20">
            <ThreeDDraggableCarousel
              height={350} // parent already changes height on lg; you can pass 450 for lg via CSS if preferred
              items={[
                { src: "/images/profile.jpg", title: "Design Lead" },
                { src: "/images/profile.jpg", title: "Frontend Engineer" },
                { src: "/images/profile.jpg", title: "System Engineer" },
              ]}
            />
          </div>
        </div>
      </div>
      <ExperienceSection />
    </>
  );
}
