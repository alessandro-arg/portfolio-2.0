import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/blog/mdx-components";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug.join("/"));

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

type PageProps = {
  params: Promise<{ slug: string[] }>;
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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const joinedSlug = slug.join("/");
  const post = getPostBySlug(joinedSlug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground my-10 sm:my-27">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-0">
          {/* Main content */}
          <article className="pb-10 lg:pb-20 lg:pr-12 min-w-0">
            <header className="relative mb-10 border-b border-border pb-10">
              <Link
                href="/blog"
                className="absolute top-0 right-0 gap-1 inline-flex items-center text-xl md:hidden"
              >
                <ArrowLeft size={18} className="pointer-events-none" />
                Back
              </Link>
              <h1 className="font-mono text-5xl md:text-7xl font-bold tracking-tight mb-5 leading-none pt-10">
                {post.title}
              </h1>
              <p className="font-mono text-lg text-muted-foreground leading-relaxed">
                {post.description}
              </p>
            </header>

            {post.cover && (
              <div className="mt-8 overflow-hidden border border-border rounded-xl">
                <Image
                  src={post.cover}
                  alt={post.title}
                  width={1200}
                  height={630}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            )}

            <div className="blog-prose border-b border-border pb-12 md:pb-0 md:border-none">
              <MDXRemote
                source={post.content}
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    rehypePlugins: [
                      [
                        (await import("rehype-pretty-code")).default,
                        {
                          theme: "github-dark",
                        },
                      ],
                    ],
                  },
                }}
              />
            </div>
          </article>

          <aside className="lg:border-l border-border lg:pl-12 lg:sticky lg:top-14 lg:self-start pt-5 md:pt-10 md:pb-62">
            <div className="space-y-6">
              <Link
                href="/blog"
                className="gap-1 flex items-center justify-end text-xl md:hidden w-full"
              >
                <ArrowLeft size={20} className="pointer-events-none" />
                Back
              </Link>
              <Link
                href="/blog"
                className="group gap-1 relative md:inline-flex items-center before:pointer-events-none before:absolute before:top-[1.5em] before:left-0 before:h-[0.05em] before:w-full before:bg-current before:content-[''] before:origin-right before:scale-x-0 before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)] hover:before:origin-left hover:before:scale-x-100 text-lg hidden"
              >
                <ArrowLeft
                  size={16}
                  className="group-hover: pointer-events-none translate-x-0 transition-all duration-300 [motion-reduce:transition-none] group-hover:-translate-x-1 group-hover:opacity-100"
                />
                Back
              </Link>
              <div className="hidden md:block pointer-events-none">
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  Title
                </p>
                <span className="font-mono text-base font-normal tracking-normal">
                  {post.title}
                </span>
              </div>
              <div className="pointer-events-none">
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  Topic
                </p>
                <span
                  className={`font-mono text-sm font-bold uppercase tracking-widest ${getTopicColor(post.topic)}`}
                >
                  {post.topic}
                </span>
              </div>

              <div className="pointer-events-none">
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  Published
                </p>
                <p className="font-mono text-sm text-foreground">{post.date}</p>
              </div>

              {post.updated && (
                <div className="pointer-events-none">
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
                    Updated
                  </p>
                  <p className="font-mono text-sm text-foreground">
                    {post.updated}
                  </p>
                </div>
              )}

              <div className="pointer-events-none">
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  Read time
                </p>
                <p className="font-mono text-sm text-foreground">
                  {post.readingTime}
                </p>
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="pointer-events-none">
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">
                    Tags
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs border border-border px-2 py-0.5 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
