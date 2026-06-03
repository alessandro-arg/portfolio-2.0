"use client";

import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/blog-types";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

function getTopicColor(topic: string): string {
  const t = topic.toLowerCase();
  if (t === "frontend") return "text-destructive";
  if (t === "backend") return "text-green-400";
  if (t === "devops-journey") return "text-[#16b1ff]";
  return "text-muted-foreground";
}

function PostTile({
  post,
  className = "",
}: {
  post: BlogPostMeta;
  className?: string;
}) {
  return (
    <Link
      key={post.slug}
      href={`/blog/${post.slug}`}
      className={`group relative flex flex-col p-6 py-8 overflow-hidden hover:bg-accent/25 transition-colors duration-150 ${className}`}
    >
      <div className="flex flex-col gap-1 mb-3">
        <span
          className={`font-mono text-xs font-bold uppercase tracking-widest ${getTopicColor(post.topic)}`}
        >
          {post.topic}
        </span>
        <p className="font-mono text-xs text-muted-foreground">{post.date}</p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <h2 className="font-mono text-xl mx-3 font-semibold text-foreground text-center group-hover:scale-103 transition-transform duration-200 origin-center">
          {post.title}
        </h2>
      </div>
      <p className="font-mono text-xs text-muted-foreground mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {post.readingTime}
      </p>
    </Link>
  );
}

export default function BlogCard({ posts }: { posts: BlogPostMeta[] }) {
  const [latest, second] = posts;
  const t = useTranslations("BentoGrid");

  return (
    <div className="absolute inset-0 flex overflow-hidden">
      <div className="flex flex-col justify-between w-full md:w-[50%] lg:w-[34%] border-r border-border px-4 py-8">
        <div className="flex items-start flex-col">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 px-4 whitespace-pre-line">
            {t("blog_card_subtitle")}
          </p>
          <h3 className="bg-linear-to-b from-black to-[#5db6e3] dark:to-[#83d6ff90] bg-clip-text px-4 text-2xl sm:text-3xl font-semibold tracking-normal text-transparent select-none dark:from-white whitespace-pre-line">
            {t("blog_card_title")}
          </h3>
        </div>
        <Link
          href="/blog"
          className="max-w-fit flex items-center gap-1 hover:bg-foreground hover:text-background font-mono text-base px-1 py-0.5 mx-3 text-muted-foreground transition-colors duration-200"
        >
          {t("blog_card_all_posts")}
          <ArrowRight size={16} />
        </Link>
      </div>

      {latest && (
        <PostTile
          post={latest}
          className="flex-1 border-r border-border hidden md:flex"
        />
      )}

      {second && <PostTile post={second} className="hidden lg:flex flex-1" />}
    </div>
  );
}
