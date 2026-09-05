import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { ProjectOverview } from "@/components/project-overview";
import { projectOverviews } from "@/content/project-overviews";
import { projects } from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projectOverviews.map((overview) => ({
    slug: overview.projectSlug,
  }));
}

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

function getProjectOverview(slug: string) {
  return projectOverviews.find((overview) => overview.projectSlug === slug);
}

export async function generateMetadata(
  { params }: ProjectPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;

  const project = getProject(slug);
  const overview = getProjectOverview(slug);

  if (!project || !overview) {
    return {};
  }

  const projectPath = `/projects/${slug}`;
  const parentMetadata = await parent;

  return {
    title: project.title,
    description: project.summary,

    alternates: {
      canonical: projectPath,
    },

    openGraph: {
      ...(parentMetadata.openGraph ?? {}),
      title: project.title,
      description: project.summary,
      url: projectPath,
    },

    twitter: {
      ...(parentMetadata.twitter ?? {}),
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = getProject(slug);
  const overview = getProjectOverview(slug);

  if (!project || !overview) {
    notFound();
  }

  return <ProjectOverview project={project} overview={overview} />;
}
