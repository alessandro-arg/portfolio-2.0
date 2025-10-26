import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import ContactSection from "../contact/ContactSection";
import Link from "next/link";

export default function Attribution() {
  return (
    <>
      <div className="absolute inset-0 z-[-1] h-[450px] w-full overflow-hidden bg-neutral-100/60 dark:bg-neutral-950/80 [mask-image:linear-gradient(rgb(0,0,0)_40%,rgba(0,0,0,0)_100%)] opacity-30">
        <img
          alt="nature background"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute inset-0 z-[-1] h-[450px] w-full object-cover mix-blend-overlay select-none grayscale-100"
          src="/images/nature-bg.webp"
        />
      </div>
      <main className="container relative z-10 mx-auto pt-32">
        <h2 className="relative z-2 text-balance font-medium text-5xl tracking-tight sm:text-5xl md:mb-36 md:text-6xl text-center max-w-xl mx-auto mb-20 [text-shadow:rgba(255,255,255,0.05)_0_4px_8px,rgba(255,255,255,0.25)_0_8px_30px]">
          <p className="mb-3 font-mono font-normal text-black/80 text-xs uppercase tracking-widest md:text-sm dark:text-white/70">
            Attribution
          </p>
          <span className="font-instrument">
            <span className="md:text-6xl">Journey to create</span>
            <br />
            <span className="md:text-6xl">
              this {""}
              <AnimatedGradientText
                colorFrom="#4aeedd"
                colorTo="#16b1ff"
                className="tracking-normal italic w-full"
              >
                website
              </AnimatedGradientText>
            </span>
          </span>
        </h2>
        <div className="relative z-10 mx-auto max-w-4xl text-neutral-600 dark:text-neutral-400 sm:mb-50">
          <div className="flex flex-col gap-y-8">
            <h1 className="text-xl">Hello! Welcome to my website.</h1>
            <div className="flex flex-col gap-y-6 text-lg leading-relaxed">
              <p>
                The first version of this website was created in 2025. I was
                learning how to build a Multi-Page Application with Next.js back
                then. This version is actually open-source, so feel free to use
                it.
                <br />
                You can find the source code on my{" "}
                <Link
                  href={"https://github.com/alessandro-arg/portfolio-2.0"}
                  target="_blank"
                  className="text-black dark:text-neutral-300"
                >
                  GitHub Profile
                </Link>
              </p>
              <p>
                In 2024 i created my first portfolio using Angular and
                TypeScript. While learning how to use Next.js, i thought it was
                time for an evolution. I completely redesigned the site to
                better showcase my current front-end and back-end development
                capabilities, focusing on a clean aesthetic and animations.
              </p>
              <p>
                I would like to express my thanks to all of websites that
                inspired me to build this website. So, THANK YOU!
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-y-2">
              <p>Best,</p>
              <div className="relative text-black dark:text-neutral-200">
                Alessandro Argenziano
              </div>
            </div>
            <div className="mt-6">
              <p className="text-neutral-600 text-sm dark:text-neutral-400">
                I offer freelance development for custom websites that are fast,
                responsive, and SEO-optimized 🚀. To bring your vision to life
                with clean code, you can reach me at{" "}
                <a
                  className="text-black underline hover:text-blue-500 dark:text-neutral-200"
                  href="mailto:contact@alessandro-argenziano.com"
                  target="_blank"
                >
                  contact@alessandro-argenziano.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
      <ContactSection />
    </>
  );
}
