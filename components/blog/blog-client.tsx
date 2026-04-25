"use client";

import Link from "next/link";
import { useState } from "react";
import type { BlogPostMeta } from "../../lib/blog/blog-types";

function getCardTopicStyle(topic: string): {
  className: string;
  style?: React.CSSProperties;
} {
  const t = topic.toLowerCase();

  if (t === "frontend") return { className: "text-destructive" };
  if (["js", "javascript"].includes(t)) return { className: "text-yellow-400" };
  if (["ts", "typescript"].includes(t)) return { className: "text-blue-400" };
  if (t === "backend") return { className: "text-green-400" };
  if (t === "devops-journey")
    return {
      className: "",
      style: { color: "#16b1ff" },
    };
  return { className: "text-muted-foreground" };
}

export function BlogClient({ posts }: { posts: BlogPostMeta[] }) {
  const topics = [
    "all posts",
    ...Array.from(new Set(posts.map((p) => p.topic))),
  ];
  const [active, setActive] = useState("all posts");

  const filtered =
    active === "all posts"
      ? posts
      : posts.filter((p) => p.topic.toLowerCase() === active.toLowerCase());

  return (
    <>
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-14 flex items-start justify-between gap-8">
          {/* Left: title + description */}
          <div>
            <p className="font-mono text-xs text-muted-foreground mb-3 tracking-widest uppercase">
              Developer Journal
            </p>
            <h1 className="font-mono text-5xl md:text-7xl font-bold tracking-tight mb-5 leading-none">
              Blog
            </h1>
            <p className="font-mono text-base text-muted-foreground max-w-lg leading-relaxed">
              Notes from my journey: what I&apos;m learning, building, testing,
              and understanding along the way.
            </p>
          </div>

          {/* Right: filters */}
          <nav className="hidden md:flex flex-col items-end gap-1 shrink-0 pt-1">
            {topics.map((topic) => {
              const isActive = active === topic;
              return (
                <button
                  key={topic}
                  onClick={() => setActive(topic)}
                  className={[
                    "font-mono text-base px-1 py-0.5 transition-colors duration-100 cursor-pointer",
                    isActive
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground",
                  ].join(" ")}
                >
                  {topic}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Mobile filters — horizontal scroll */}
        <div className="md:hidden flex gap-2 overflow-x-auto px-8 pb-4 scrollbar-none">
          {topics.map((topic) => {
            const isActive = active === topic;
            return (
              <button
                key={topic}
                onClick={() => setActive(topic)}
                className={[
                  "font-mono text-xs px-2 py-0.5 whitespace-nowrap transition-colors duration-100 cursor-pointer shrink-0",
                  isActive
                    ? "bg-foreground text-background"
                    : "border border-border text-muted-foreground",
                ].join(" ")}
              >
                {topic}
              </button>
            );
          })}
        </div>
      </header>

      {/* Post grid */}
      <div className="max-w-7xl mx-auto">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-border">
            {filtered.map((post) => {
              const topicStyle = getCardTopicStyle(post.topic);
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative flex flex-col border-r border-b border-border p-6 min-h-70 transition-colors duration-150 hover:bg-accent/25 overflow-hidden"
                >
                  {/* Top row: date left, reading time right (on hover) */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex flex-col gap-1">
                      <span
                        className={`font-mono text-xs font-bold uppercase tracking-widest ${topicStyle.className}`}
                        style={topicStyle.style}
                      >
                        {post.topic}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {post.date}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0 ml-2">
                      {post.readingTime}
                    </span>
                  </div>

                  {/* Title — centered */}
                  <div className="flex-1 flex items-center justify-center">
                    <h2 className="font-mono text-2xl md:text-3xl font-semibold mx-3 text-foreground text-center transition-transform duration-200 group-hover:scale-105 origin-center">
                      {post.title}
                    </h2>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="px-8 py-24 text-center border-t border-border">
            <p className="font-mono text-sm text-muted-foreground">
              No posts for &quot;{active}&quot;.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
