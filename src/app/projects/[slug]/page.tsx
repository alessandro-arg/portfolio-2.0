import type { Metadata } from "next";
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

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProject(slug);
  const overview = getProjectOverview(slug);

  if (!project || !overview) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
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
