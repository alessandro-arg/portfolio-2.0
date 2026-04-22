export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  updated?: string;
  topic: string;
  tags?: string[];
  published: boolean;
  featured?: boolean;
  cover?: string;
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
  readingTime: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};
