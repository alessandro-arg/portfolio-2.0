export default function Links() {
  return (
    <>
      <div className="absolute inset-0 z-[-1] h-[450px] w-full overflow-hidden bg-neutral-100/60 dark:bg-neutral-950/80 [mask-image:linear-gradient(rgb(0,0,0)_40%,rgba(0,0,0,0)_100%)] opacity-30">
        <img
          src="/images/nature-bg.webp"
          alt="nature background"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute inset-0 z-[-1] h-[450px] w-full object-cover mix-blend-overlay select-none grayscale-100"
        />
      </div>
      <section className="mx-auto w-full max-w-7xl overflow-x-hidden">
        <div className="relative mx-auto min-h-screen max-w-lg overflow-x-hidden px-4">
          <div className="relative mx-auto flex flex-col items-center justify-center gap-4 overflow-hidden pt-30 pb-6">
            <img
              src="/images/profile.jpg"
              alt="profile picture"
              className="rounded-full h-[120px] w-[120px] object-cover object-center"
            />
            <h1 className="font-semibold text-xl">Alessandro Argenziano</h1>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs md:text-sm">
              <span className="rounded-full px-2 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-500">
                Developer
              </span>
              <span className="rounded-full px-2 py-1 bg-green-500/10 text-green-600 dark:text-green-500">
                Problem Solver
              </span>
            </div>
          </div>
          <div className="mx-auto mb-4 flex w-fit gap-x-2 md:text-sm"></div>
        </div>
      </section>
    </>
  );
}
