import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog",
  description: "Developer journal documenting my road to DevOps.",
};

const topicColors: Record<string, string> = {
  css: "text-orange-400",
  js: "text-yellow-400",
  javascript: "text-yellow-400",
  html: "text-sky-400",
  typescript: "text-blue-400",
  devops: "text-green-400",
  linux: "text-purple-400",
  docker: "text-cyan-400",
  git: "text-red-400",
  default: "text-muted-foreground",
};

function getTopicColor(topic: string) {
  return topicColors[topic.toLowerCase()] ?? topicColors.default;
}

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const restPosts = posts.slice(1);

  return (
    <main className="min-h-screen bg-background text-foreground mt-20">
      {/* Header */}
      <header className="border-b border-border px-8 py-12 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-muted-foreground mb-2 tracking-widest uppercase">
            Developer Journal
          </p>
          <h1 className="font-mono text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Blog
          </h1>
          <p className="font-mono text-sm text-muted-foreground max-w-xl">
            Notes from my road to DevOps: what I&apos;m learning, building,
            testing, and understanding along the way.
          </p>
        </div>
      </header>

      {/* Post grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-border">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={[
                "group relative block p-6 border-border transition-colors duration-150",
                "hover:bg-accent/30",
                // right borders except last in row
                i % 4 !== 3 ? "border-r" : "",
                // bottom border for all except last row
                i < posts.length - (posts.length % 4 || 4) ? "border-b" : "",
              ].join(" ")}
            >
              {/* Topic + date row */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`font-mono text-xs font-bold uppercase tracking-widest ${getTopicColor(post.topic)}`}
                >
                  {post.topic}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {post.date}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-mono text-base md:text-lg font-semibold leading-snug text-foreground group-hover:text-foreground transition-colors">
                {post.title}
              </h2>

              {/* Reading time — revealed on hover */}
              <p className="mt-4 font-mono text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {post.readingTime}
              </p>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="px-8 py-24 text-center">
            <p className="font-mono text-sm text-muted-foreground">
              No posts published yet.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
