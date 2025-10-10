export type FooterLink = {
  name: string;
  href: string;
};

export type FooterCategory = {
  title: string;
  links: FooterLink[];
};

export const footerCategories: FooterCategory[] = [
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
