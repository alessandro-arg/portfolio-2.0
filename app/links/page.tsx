import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { siFacebook } from "simple-icons";
import ContactSection from "../contact/ContactSection";
import { Facebook } from "lucide-react";

export default function Links() {
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
      <section className="mx-auto w-full max-w-7xl overflow-x-hidden">
        <div className="relative mx-auto min-h-[75vh] max-w-lg overflow-x-hidden px-4">
          <div className="relative mx-auto flex flex-col items-center justify-center gap-4 overflow-hidden pt-30 pb-6">
            <img
              src="/images/profile.jpg"
              alt="profile picture"
              className="rounded-full h-[120px] w-[120px] object-cover object-center"
            />
            <h1 className="font-semibold text-xl">Alessandro Argenziano</h1>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs md:text-sm">
              <span className="rounded-full px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-500">
                Developer
              </span>
              <span className="rounded-full px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-500">
                Problem Solver
              </span>
            </div>
          </div>
          <div className="mx-auto justify-center items-center sm:justify-normal mb-4 flex flex-col sm:flex-row w-fit gap-4 sm:gap-2 md:text-sm">
            <a
              href="https://alessandro-argenziano.com"
              className="group relative flex w-fit items-center justify-between rounded-full bg-black text-white opacity-90 hover:bg-black/80 dark:bg-neutral-200 dark:text-black dark:hover:bg-neutral-300"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              <span className="pl-4 font-light text-base">Website</span>
              <div className="relative mr-1 size-9 overflow-hidden rounded-full bg-transparent">
                <div className="absolute top-[0.85em] left-[-0.1em] grid size-full place-content-center transition-all duration-200 group-hover:translate-x-4 group-hover:-translate-y-5">
                  {/* lucide: arrow-up-right x2 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right size-5"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right mb-1 size-5 -translate-x-4"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </div>
              </div>
            </a>
            <a
              href="mailto:contact@alessandro-argenziano.com"
              className="group relative flex w-fit items-center justify-between rounded-full bg-black/20 text-black opacity-90 hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              <span className="pl-4 font-light text-base">
                contact@alessandro-argenziano.com
              </span>
              <div className="relative mr-1 size-9 overflow-hidden rounded-full bg-transparent">
                <div className="absolute top-[0.85em] left-[-0.1em] grid size-full place-content-center transition-all duration-200 group-hover:translate-x-4 group-hover:-translate-y-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right size-5"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right mb-1 size-5 -translate-x-4"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
          <div className="flex flex-col gap-4 py-3">
            <a
              href="https://www.linkedin.com/in/alessandro-argenziano/"
              className="relative flex h-14 w-full items-center justify-center rounded-xl border border-white-3 bg-white-2 px-8 py-4 transition-colors duration-300 dark:border-neutral-700 dark:bg-[#151414]"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="absolute left-8">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  className="stroke-1"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width={4} height={12} x={2} y={9}></rect>
                  <circle cx={4} cy={4} r={2}></circle>
                </svg>
              </div>
              <div className="text-neutral-800 dark:text-neutral-200">
                LinkedIn
              </div>
            </a>
            <a
              href="https://www.instagram.com/alessandro_7.5r/"
              className="relative flex h-14 w-full items-center justify-center rounded-xl border border-white-3 bg-white-2 px-8 py-4 transition-colors duration-300 dark:border-neutral-700 dark:bg-[#151414]"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="absolute left-8">
                <InstagramLogoIcon className="text-neutral-800 dark:text-neutral-200 w-5 h-5" />
              </div>
              <div className="text-neutral-800 dark:text-neutral-200">
                Instagram
              </div>
            </a>
            <a
              href="https://github.com/alessandro-arg"
              className="relative flex h-14 w-full items-center justify-center rounded-xl border border-white-3 bg-white-2 px-8 py-4 transition-colors duration-300 dark:border-neutral-700 dark:bg-[#151414]"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="absolute left-8">
                {" "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  className="text-black dark:text-neutral-300"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </div>
              <div className="text-neutral-800 dark:text-neutral-200">
                GitHub
              </div>
            </a>
            <a
              href="https://www.instagram.com/alessandro_7.5r/"
              className="relative flex h-14 w-full items-center justify-center rounded-xl border border-white-3 bg-white-2 px-8 py-4 transition-colors duration-300 dark:border-neutral-700 dark:bg-[#151414]"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="absolute left-8">
                <Facebook className="text-neutral-800 dark:text-neutral-200 w-5 h-5" />
              </div>
              <div className="text-neutral-800 dark:text-neutral-200">
                Facebook
              </div>
            </a>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
