import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";
import { BlogClient } from "@/components/blog/blog-client";

export const metadata: Metadata = {
  title: "Blog",
  description: "Developer journal documenting my road to DevOps and more.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-background text-foreground my-20">
      <BlogClient posts={posts} />
    </main>
  );
}
