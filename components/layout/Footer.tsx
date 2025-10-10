import { FooterLinks } from "./FooterLinks";

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
            <FooterLinks />
            <FooterLinks />
            <FooterLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}
