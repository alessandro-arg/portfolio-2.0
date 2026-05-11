import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { BlogPost, BlogPostMeta } from "./blog-types";
import readingTime from "reading-time";

const BLOG_CONTENT_PATH = path.join(process.cwd(), "content", "blog");

/**
 * Formats a raw date string into a readable blog post date.
 */
function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

/**
 * Recursively reads a directory and returns all public `.mdx` blog files.
 */
function getAllMdxFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return getAllMdxFiles(fullPath);
    }

    if (
      entry.isFile() &&
      entry.name.endsWith(".mdx") &&
      !entry.name.startsWith("_")
    ) {
      return [fullPath];
    }

    return [];
  });
}

/**
 * Converts an absolute blog content file path into a URL-safe slug.
 */
function filePathToSlug(filePath: string): string {
  const relativePath = path.relative(BLOG_CONTENT_PATH, filePath);
  return relativePath.replace(/\.mdx$/, "").replace(/\\/g, "/");
}

/**
 * Loads all published blog posts, enriches them with metadata, and sorts them by newest first.
 */
export function getAllPosts(): BlogPostMeta[] {
  const files = getAllMdxFiles(BLOG_CONTENT_PATH);

  const posts = files.map((filePath) => {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const stats = readingTime(content);

    return {
      ...(data as Omit<
        BlogPostMeta,
        "slug" | "readingTime" | "date" | "rawDate"
      >),
      rawDate: data.date as string,
      date: formatDate(data.date as string),
      slug: filePathToSlug(filePath),
      readingTime: stats.text,
    };
  });

  return posts
    .filter((post) => post.published)
    .sort(
      (a, b) => new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime(),
    );
}

/**
 * Loads a single blog post by slug and returns its metadata with MDX content.
 */
export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_CONTENT_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    ...(data as Omit<
      BlogPost,
      "slug" | "content" | "readingTime" | "date" | "rawDate"
    >),
    rawDate: data.date as string,
    date: formatDate(data.date as string),
    updated: formatDate(data.date as string),
    slug,
    content,
    readingTime: stats.text,
  };
}
