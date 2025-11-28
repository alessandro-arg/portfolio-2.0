import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import ExperienceSection from "./ExperienceSection";
import SocialButtons from "./ui/social-buttons";
import GithubSection from "./GithubSection";
import ContactSection from "../contact/ContactSection";
import ImageCarousel from "./ui/ImageCarousel";
import BackgroundFade from "@/components/ui/background-fade";

export default function AboutPage() {
  return (
    <>
      <BackgroundFade />
      <div className="relative mx-auto max-w-6xl px-4 pt-28 pb-12 md:pt-36 md:pb-20">
        <h2 className="relative z-2 text-5xl font-medium self-center tracking-tight text-balance sm:text-5xl md:text-6xl text-center mb-10 lg:mb-0 lg:text-left lg:max-w-lg [text-shadow:rgba(255,255,255,0.05)_0px_4px_8px,rgba(255,255,255,0.25)_0px_8px_30px]">
          <p className="mb-3 font-mono text-xs font-normal tracking-widest text-black/80 uppercase md:text-sm dark:text-white/70">
            More about me
          </p>
          <span className="font-instrument">
            <span>
              I&apos;m Alessandro, a <br /> creative{" "}
            </span>
            <AnimatedGradientText
              colorFrom="#4aeedd"
              colorTo="#16b1ff"
              className="pe-2 tracking-tight italic"
            >
              developer
            </AnimatedGradientText>
          </span>
        </h2>
        <div className="flex flex-col items-center justify-between lg:justify-between sm:justify-normal lg:flex-row">
          <div className="relative z-5 mx-auto flex max-w-xl flex-col gap-y-8 text-center text-base font-light tracking-wider text-black/80 lg:mx-0 md:max-w-[500px] lg:max-w-[550px] lg:text-left lg:text-lg dark:text-neutral-300">
            <p>
              I&apos;m Alessandro Argenziano, a full-stack developer passionate
              about creating dynamic web experiences. From frontend to backend,
              I solve complex problems with clean, efficient code. My expertise
              spans React, Next.js, and Django, and I&apos;m always motivated to
              learn more.
            </p>
            <p>
              When I&apos;m not immersed in work, I&apos;m exploring new ideas
              and staying curious.
            </p>
            <p>I believe in waking up each day eager to make a difference!</p>
            <SocialButtons />
          </div>
          <div className="relative flex h-[350px] w-full max-w-[180px] flex-col items-center justify-center max-lg:mt-12 lg:h-[450px] lg:max-w-[270px] lg:mr-20">
            <ImageCarousel />
          </div>
        </div>
      </div>
      <ExperienceSection />
      <GithubSection />
      <ContactSection />
    </>
  );
}
