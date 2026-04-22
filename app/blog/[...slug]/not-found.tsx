export default function BlogPostNotFound() {
  return (
    <main className="container py-24 h-dvh">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm text-muted-foreground">404</p>
        <h1 className="mt-2 text-3xl font-semibold">Post not found</h1>
        <p className="mt-4 text-muted-foreground">
          The article you are looking for does not exist.
        </p>
      </div>
    </main>
  );
}
