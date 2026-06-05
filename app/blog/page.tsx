import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";
import { BlogClient } from "@/components/blog/blog-client";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Blog");

  return {
    title: t("metadata_title"),
    description: t("metadata_description"),
  };
}

export default async function BlogPage() {
  const locale = await getLocale();
  const posts = getAllPosts(locale);

  return (
    <main className="min-h-screen bg-background text-foreground my-20">
      <BlogClient posts={posts} />
    </main>
  );
}
