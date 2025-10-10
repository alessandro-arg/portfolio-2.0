"use client";

import { ArrowRight } from "lucide-react";

type FooterLink = {
  name: string;
  href: string;
};

type FooterCategory = {
  title: string;
  links: FooterLink[];
};

const footerCategories: FooterCategory[] = [
  {
    title: "General",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Projects", href: "/projects" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Bucket List", href: "/bucket-list" },
      { name: "Uses", href: "/uses" },
      { name: "Attribution", href: "/attribution" },
    ],
  },
  {
    title: "More",
    links: [
      { name: "Links", href: "/links" },
      { name: "RSS", href: "/rss" },
    ],
  },
];

export function FooterLinks() {
  return (
    <div className="flex flex-col gap-2 sm:gap-4 cursor-default">
      {footerCategories.map((category) => (
        <div key={category.title}>
          <h4 className="text-base text-neutral-700 dark:text-white/90 font-mono">
            {category.title}
          </h4>

          <ul className="flex flex-wrap items-start gap-x-4 gap-y-2 text-base sm:flex-col sm:gap-y-3 dark:text-neutral-50">
            {category.links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="group relative inline-flex items-center before:pointer-events-none before:absolute before:top-[1.5em] before:left-0 before:h-[0.05em] before:w-full before:bg-current before:content-[''] before:origin-right before:scale-x-0 before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)] hover:before:origin-left hover:before:scale-x-100"
                >
                  {link.name}
                </a>
                <ArrowRight className="ml-[0.3em] size-[0.65em] -translate-x-1 opacity-0 transition-all duration-300 [motion-reduce:transition-none] group-hover:translate-x-0 group-hover:opacity-100" />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
