export type MoreLink = {
  title: string;
  description: string;
  href: string;
  icon: "Link2" | "Goal" | "Laptop";
};

export const moreLinks: MoreLink[] = [
  {
    title: "Links",
    description: "All my links are here",
    href: "/links",
    icon: "Link2",
  },
  {
    title: "Bucket List",
    description: "Thinks to do at least once in my life",
    href: "/bucket-list",
    icon: "Goal",
  },
  {
    title: "My setup",
    description: "My digital workspace",
    href: "/my-setup",
    icon: "Laptop",
  },
];
