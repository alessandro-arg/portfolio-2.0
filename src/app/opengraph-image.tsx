import { ImageResponse } from "next/og";

import { profile } from "@/content/profile";

export const alt = `${profile.name} - ${profile.role}`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  const websiteLabel = new URL(profile.contact.website).hostname.replace(
    /^www\./,
    "",
  );

  const tagline = profile.heroSentences[0] ?? profile.role;

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
        <span>PORTFOLIO</span>
        <span>{websiteLabel}</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 1000,
        }}
      >
        <span
          style={{
            marginBottom: 20,
            fontSize: 26,
            color: "#a3a3a3",
          }}
        >
          {profile.role}
        </span>

        <span
          style={{
            fontSize: 78,
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          {profile.name}
        </span>

        <span
          style={{
            marginTop: 28,
            fontSize: 32,
            color: "#d4d4d4",
          }}
        >
          {tagline}
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
        Frontend · Backend · DevOps
      </div>
    </div>,
    {
      ...size,
    },
  );
}
