import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <main className="container py-24 h-[75vh] font-mono flex items-center justify-center">
      <div className="mx-auto max-w-2xl flex justify-center items-center flex-col">
        <p className="text-xl sm:text-2xl text-muted-foreground">404</p>
        <h1 className="mt-2 text-2xl sm:text-4xl font-semibold">
          Post not found
        </h1>
        <p className="mt-4 text-muted-foreground text-lg sm:text-xl text-center">
          The article you are looking for does not exist.
        </p>
        <Link
          href="/blog"
          className="mt-5 group gap-1 relative inline-flex items-center before:pointer-events-none before:absolute before:top-[1.5em] before:left-0 before:h-[0.05em] before:w-full before:bg-current before:content-[''] before:origin-right before:scale-x-0 before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)] hover:before:origin-left hover:before:scale-x-100 text-lg"
        >
          <ArrowLeft
            size={16}
            className="group-hover: pointer-events-none translate-x-0 transition-all duration-300 [motion-reduce:transition-none] group-hover:-translate-x-1 group-hover:opacity-100"
          />
          Back to Blog
        </Link>
      </div>
    </main>
  );
}
