import { ImageResponse } from "next/og";

import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

type ProjectOpenGraphImageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const alt = `${profile.name} Project Preview`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export default async function OpenGraphImage({
  params,
}: ProjectOpenGraphImageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  const websiteLabel = new URL(profile.contact.website).hostname.replace(
    /^www\./,
    "",
  );

  const projectType = project?.liveUrl ? "Live Project" : "Case Study";
  const projectTitle = project?.title ?? "Project";
  const projectSummary =
    project?.summary ?? "Project details are available on the portfolio.";
  const projectMeta = project
    ? `${project.year} · ${project.liveUrl ? "Live Demo Available" : "Open Source Project"}`
    : "Portfolio Project";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0a0a0a",
        color: "#fafafa",
        padding: "72px 80px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 24,
          color: "#a3a3a3",
        }}
      >
        <span>PROJECT</span>
        <span>{websiteLabel}</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 980,
        }}
      >
        <span
          style={{
            marginBottom: 20,
            fontSize: 26,
            color: "#a3a3a3",
          }}
        >
          {projectType}
        </span>

        <span
          style={{
            fontSize: 78,
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          {projectTitle}
        </span>

        <span
          style={{
            marginTop: 28,
            fontSize: 32,
            color: "#d4d4d4",
            lineHeight: 1.35,
          }}
        >
          {projectSummary}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: 22,
          color: "#737373",
        }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            marginRight: 14,
            background: "#fafafa",
          }}
        />
        {projectMeta}
      </div>
    </div>,
    {
      ...size,
    },
  );
}
