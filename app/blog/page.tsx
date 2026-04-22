import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Developer journal documenting my road to DevOps.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="container py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12 space-y-4">
          <p className="text-sm text-muted-foreground">Developer Journal</p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Blog
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Notes from my road to DevOps: what I am learning, building, testing,
            and understanding along the way.
          </p>
        </header>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:bg-accent/40"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span>{post.date}</span>
                <span>{post.readingTime}</span>
                <span>{post.topic}</span>
              </div>

              <h2 className="mb-2 text-2xl font-semibold">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="mb-4 text-muted-foreground">{post.description}</p>

              {post.tags?.length ? (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
