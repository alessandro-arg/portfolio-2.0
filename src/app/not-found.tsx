export default function NotFound() {
  return (
    <div className="screen-line-bottom flex min-h-[calc(100vh-3.5rem)] items-center justify-center px-4 text-foreground">
      <div className="flex items-center py-4 screen-line-top screen-line-bottom">
        <h1 className="mr-5 border-r border-border pr-5 text-2xl font-medium">
          404
        </h1>

        <p className="text-sm">This page could not be found.</p>
      </div>
    </div>
  );
}
