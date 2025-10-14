import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsData } from "../projects.data";
import { ProjectInfoPanel } from "../ProjectInfoPanel";
import { ProjectCard } from "../ProjectCard";

type PageProps = {
  params: { slug: string };
};

// Prebuild static params for all projects
export function generateStaticParams() {
  return projectsData
    .filter((p) => p.slug)
    .map((p) => ({ slug: p.slug as string }));
}

// Optional: SEO per project
export function generateMetadata({ params }: PageProps): Metadata {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} - Projects`,
    description: project.smallDescription ?? project.description?.slice(0, 140),
    openGraph: {
      title: project.title,
      description: project.smallDescription ?? project.description,
      images: project.src ? [{ url: project.src }] : undefined,
      type: "website",
    },
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="relative mx-auto w-full">
      <div className="absolute inset-0 z-[-1] h-[300px] w-full overflow-hidden [mask-image:linear-gradient(rgb(0,0,0)_40%,rgba(0,0,0,0)_100%)] opacity-100">
        <img
          src={project.src}
          alt={project.title}
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="halftone pointer-events-none absolute inset-0 z-[-1] h-[300px] w-full object-cover mix-blend-overlay grayscale select-none"
        />
      </div>
      <div className="relative pt-60"></div>
      <article className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div>
          {/* You can render a richer hero using your ProjectCard */}
          <ProjectCard project={project} />
        </div>

        <aside className="lg:sticky lg:top-28">
          <ProjectInfoPanel project={project} />
        </aside>
      </article>
    </main>
  );
}
