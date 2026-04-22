import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { BlogPost, BlogPostMeta } from "./blog-types";
import readingTime from "reading-time";

const BLOG_CONTENT_PATH = path.join(process.cwd(), "content", "blog");

function getAllMdxFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return getAllMdxFiles(fullPath);
    }

    if (entry.isFile() && entry.name.endsWith(".mdx")) {
      return [fullPath];
    }

    return [];
  });
}

function filePathToSlug(filePath: string): string {
  const relativePath = path.relative(BLOG_CONTENT_PATH, filePath);
  return relativePath.replace(/\.mdx$/, "").replace(/\\/g, "/");
}

export function getAllPosts(): BlogPostMeta[] {
  const files = getAllMdxFiles(BLOG_CONTENT_PATH);

  const posts = files.map((filePath) => {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const stats = readingTime(content);

    return {
      ...(data as Omit<BlogPostMeta, "slug" | "readingTime">),
      slug: filePathToSlug(filePath),
      readingTime: stats.text,
    };
  });

  return posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_CONTENT_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    ...(data as Omit<BlogPost, "slug" | "content" | "readingTime">),
    slug,
    content,
    readingTime: stats.text,
  };
}
