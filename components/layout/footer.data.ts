export type FooterLink = {
  name_key: string;
  href: string;
};

export type FooterCategory = {
  title_key: string;
  links: FooterLink[];
};

export const footerCategories: FooterCategory[] = [
  {
    title_key: "general",
    links: [
      { name_key: "home", href: "/" },
      { name_key: "about", href: "/about" },
      { name_key: "projects", href: "/projects" },
    ],
  },
  {
    title_key: "resources",
    links: [
      { name_key: "bucket_list", href: "/bucket-list" },
      { name_key: "my_setup", href: "/my-setup" },
      { name_key: "blog", href: "/blog" },
    ],
  },
  {
    title_key: "more",
    links: [
      { name_key: "links", href: "/links" },
      { name_key: "attribution", href: "/attribution" },
    ],
  },
];
