export type MoreLink = {
  title_key: string;
  description_key: string;
  href: string;
  icon: "Link2" | "Goal" | "Laptop";
};

export const moreLinks: MoreLink[] = [
  {
    title_key: "links_title",
    description_key: "links_description",
    href: "/links",
    icon: "Link2",
  },
  {
    title_key: "bucket_list_title",
    description_key: "bucket_list_description",
    href: "/bucket-list",
    icon: "Goal",
  },
  {
    title_key: "my_setup_title",
    description_key: "my_setup_description",
    href: "/my-setup",
    icon: "Laptop",
  },
];
