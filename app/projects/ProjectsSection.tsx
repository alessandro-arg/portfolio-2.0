"use client";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative mx-auto mt-28 w-full container py-10"
    >
      <h2 className="relative z-2 text-5xl font-medium tracking-tight text-balance sm:text-5xl md:text-6xl text-center mb-20 md:mb-24">
        <p className="mb-3 font-mono text-xs font-normal tracking-widest text-black/80 uppercase md:text-sm dark:text-white/70">
          FEATURED CASE STUDIES
        </p>
        <span className="font-instrument">
          <span>Curated</span>
          <span className="text-colorfull animate-gradient-x font-instrument-serif pe-2 tracking-tight italic">
            {" "}
            work
          </span>
        </span>
      </h2>
    </section>
  );
}
