import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/blog/mdx-components";
import type { Metadata } from "next";
import Image from "next/image";
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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const joinedSlug = slug.join("/");
  const post = getPostBySlug(joinedSlug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container py-16 md:py-24">
      <article className="mx-auto max-w-3xl lg:max-w-4xl">
        <Link
          href="/blog"
          className="mb-8 inline-flex text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to Blog
        </Link>
        <header className="mb-10 space-y-4">
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span>{post.date}</span>
            <span>{post.readingTime}</span>
            <span>{post.topic}</span>
          </div>

          <h1 className="text-4xl font-mono font-semibold tracking-tight md:text-5xl">
            {post.title}
          </h1>

          <p className="text-lg text-muted-foreground">{post.description}</p>

          {post.cover ? (
            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <Image
                src={post.cover}
                alt={post.title}
                width={1200}
                height={630}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          ) : null}
        </header>

        <div className="blog-prose mx-auto max-w-3xl">
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
    </main>
  );
}
