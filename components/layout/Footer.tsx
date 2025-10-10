import { FooterLinks } from "./FooterLinks";
import { footerCategories } from "./footer.data";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export default function Footer() {
  return (
    <footer className="mx-auto my-6 container">
      <div className="relative flex flex-col items-center g-6 mb-10 md:flex-row">
        <div className="flex flex-1 flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="hidden flex-col gap-y-6 md:flex md:w-1/2">
            <a href="/" className="inline-block">
              Alessandro
            </a>
            <p className="w-60 text-base leading-5 dark:text-gray-300">
              I'm Alessandro - a full-stack developer, gamer and problem solver.
              Thanks for checking out my site!
            </p>
          </div>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:gap-16 lg:gap-32 max-sm:bg-primary/[0.05] rounded-3xl p-5">
            {footerCategories.map((cat) => (
              <FooterLinks key={cat.title} category={cat} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center justify-between gap-4 text-sm text-neutral-600 md:flex-row dark:text-neutral-400">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
          <p className="whitespace-nowrap">
            © 2025{" "}
            <a
              href="/"
              className="whitespace-nowrap transition-colors hover:text-black dark:hover:text-white"
            >
              Alessandro Argenziano
            </a>
            . All rights reserved
          </p>
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <a
              href="/legal/privacy"
              className="whitespace-nowrap transition-colors hover:text-black dark:hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="/legal/terms"
              className="whitespace-nowrap transition-colors hover:text-black dark:hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-end">
          <ThemeToggle className="ms-auto" />
          <div className="flex gap-3">
            <div className="relative group">
              <button>
                <a
                  href="https://www.linkedin.com/in/alessandro-argenziano/"
                  target="_blank"
                  className="text-neutral-900 dark:text-neutral-300 transition-colors hover:text-neutral-700 dark:hover:text-neutral-100"
                >
                  <span className="sr-only">LinkedIn</span>
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
                </a>
              </button>
              {/* Tooltip */}
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-9 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none
                bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black
                px-3 py-1.5 text-xs font-medium rounded-lg shadow-md whitespace-nowrap"
              >
                LinkedIn
              </div>
            </div>
            <div className="relative group">
              <button>
                <a
                  href="https://github.com/alessandro-arg"
                  target="_blank"
                  className="text-neutral-900 dark:text-neutral-300 transition-colors hover:text-neutral-700 dark:hover:text-neutral-100"
                >
                  <span className="sr-only">GitHub</span>
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
                    className="stroke-1"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
              </button>
              {/* Tooltip */}
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-9 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none
                bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black
                px-3 py-1.5 text-xs font-medium rounded-lg shadow-md whitespace-nowrap"
              >
                GitHub
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
