import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden px-4 pt-20">
      <div className="relative py-10 lg:max-h-[1300px]">
        <section className="relative mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 lg:size-full lg:flex-row lg:justify-between">
          <div className="max-w-[60%]">
            <h2 className="relative z-2 text-5xl font-medium tracking-tight sm:text-5xl md:text-6xl text-center lg:text-left mb-8 text-balance md:mt-28 [text-shadow:0px_4px_8px_rgba(255,255,255,0.05),0px_8px_30px_rgba(255,255,255,0.25)]">
              <p className="mb-3 font-mono text-xs font-normal tracking-widest text-black/80 uppercase md:text-sm dark:text-white/70">
                Know about me
              </p>
              <span className="font-instrument">
                <span>Full-Stack Developer and a little bit of </span>
                <AnimatedGradientText
                  colorFrom="#4aeedd"
                  colorTo="#16b1ff"
                  className="pe-2 tracking-tight italic"
                >
                  everything
                </AnimatedGradientText>
              </span>
            </h2>
            <div className="relative z-5 mx-auto flex max-w-xl flex-col gap-8 text-center text-base font-light tracking-wider text-black/80 lg:mx-0 lg:max-w-[550px] lg:text-left lg:text-lg dark:text-neutral-200">
              <p>
                I'm Alessandro Argenziano, a full-stack developer passionate
                about creating dynamic web experiences. From frontend to
                backend, I thrive on solving complex problems with clean,
                efficient code. My expertise spans Angular, React, Next.js, and
                Django, and I'm always ready to learn more.
              </p>
              <p>
                When I'm not immersed in work, I'm exploring new ideas and
                staying curious. Life's about balance, and I love embracing
                every part of it.
              </p>
              <p>I believe in waking up each day to make a difference!</p>
              <div className="flex gap-3 mx-auto -mt-4 w-fit lg:mx-0">
                <button>
                  <a
                    href="https://www.linkedin.com/in/alessandro-argenziano/"
                    target="_blank"
                    className="text-neutral-900 dark:text-neutral-300 transition-colors hover:text-neutral-700 dark:hover:text-neutral-100"
                  >
                    <span className="sr-only">Linkedin</span>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      className="stroke-1"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width={4} height={12} x={2} y={9}></rect>
                      <circle cx={4} cy={4} r={2}></circle>
                    </svg>
                  </a>
                </button>
                <button>
                  <a
                    href="https://github.com/alessandro-arg"
                    target="_blank"
                    className="text-neutral-900 dark:text-neutral-300 transition-colors hover:text-neutral-700 dark:hover:text-neutral-100"
                  >
                    <span className="sr-only">Github</span>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      className="stroke-1"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                </button>
              </div>
            </div>
            <a
              href="/about#experience"
              className="group dark:text-white flex w-fit items-center justify-center gap-2 font-mono text-neutral-800 transition-colors hover:text-black mt-10 lg:justify-start"
            >
              Work Experience
              <div className="bg-white-1/50 size-[25px] overflow-hidden rounded-full border border-neutral-300 transition-all duration-500 group-hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:group-hover:bg-white/10">
                <div className="flex w-12 -translate-x-1/2 transition-transform duration-500 ease-in-out group-hover:translate-x-0">
                  <span className="flex size-6">
                    <ArrowRight
                      className="m-auto size-[14px]"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="flex size-6">
                    <ArrowRight
                      className="m-auto size-[14px]"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="relative grid aspect-square w-52 place-content-center lg:me-10 lg:mt-20 lg:w-[500px]"></div>
        </section>
      </div>
    </section>
  );
}
