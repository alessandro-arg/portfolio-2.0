import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { BlogPost, BlogPostMeta } from "./blog-types";
import readingTime from "reading-time";

const BLOG_CONTENT_PATH = path.join(process.cwd(), "content", "blog");

type Locale = "en" | "de";

function normalizeLocale(locale?: string): Locale {
  return locale === "de" ? "de" : "en";
}

function getBlogContentPath(locale?: string) {
  return path.join(BLOG_CONTENT_PATH, normalizeLocale(locale));
}

/**
 * Formats a raw date string into a readable blog post date.
 */
function formatDate(date: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "de" ? "de-DE" : "en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

/**
 * Recursively reads a directory and returns all public `.mdx` blog files.
 */
function getAllMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];

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
function filePathToSlug(filePath: string, locale: Locale): string {
  const localePath = getBlogContentPath(locale);
  const relativePath = path.relative(localePath, filePath);

  return relativePath.replace(/\.mdx$/, "").replace(/\\/g, "/");
}

/**
 * Loads all published blog posts, enriches them with metadata, and sorts them by newest first.
 */
export function getAllPosts(locale?: string): BlogPostMeta[] {
  const normalizedLocale = normalizeLocale(locale);
  const contentPath = getBlogContentPath(normalizedLocale);
  const files = getAllMdxFiles(contentPath);

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
      date: formatDate(data.date as string, normalizedLocale),
      slug: filePathToSlug(filePath, normalizedLocale),
      readingTime: String(Math.ceil(stats.minutes)),
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
export function getPostBySlug(slug: string, locale?: string): BlogPost | null {
  const normalizedLocale = normalizeLocale(locale);
  const filePath = path.join(
    getBlogContentPath(normalizedLocale),
    `${slug}.mdx`,
  );

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
    date: formatDate(data.date as string, normalizedLocale),
    updated: formatDate(data.date as string, normalizedLocale),
    slug,
    content,
    readingTime: String(Math.ceil(stats.minutes)),
  };
}
