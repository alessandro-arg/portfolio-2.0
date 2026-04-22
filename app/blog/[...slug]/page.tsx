import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/blog/mdx-components";
import type { Metadata } from "next";

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
      <article className="mx-auto max-w-3xl">
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
        </header>

        <div className="blog-prose">
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
