"use client";

import { BentoCard, BentoGrid } from "../ui/bento-grid";
import TechCard from "../bento/TechCard";
import React from "react";
import GlobeCard from "../bento/GlobeCard";
import CopyEmailCard from "../bento/CopyEmailCard";
import TimeGradientCard from "../bento/TimeGradientCard";
import type { BlogPostMeta } from "@/lib/blog/blog-types";
import BlogCard from "../bento/BlogCard";

/**
 * Renders the responsive bento-style feature grid for the homepage.
 */
export default function Grid({ posts }: { posts: BlogPostMeta[] }) {
  const features = [
    {
      className:
        "relative overflow-hidden row-start-1 row-end-3 lg:row-start-1 lg:row-end-3 lg:col-1",
      background: <TechCard />,
    },
    {
      className:
        "hidden sm:block sm:row-start-1 sm:row-end-2 lg:row-1 lg:col-start-2 lg:col-end-4",
      background: <BlogCard posts={posts} />,
    },
    {
      className: "hidden sm:block sm:row-3 lg:row-2 lg:col-2",
      background: <CopyEmailCard />,
    },
    {
      className:
        "sm:col-start-1 sm:col-end-7 lg:row-3 lg:col-start-1 lg:col-end-3",
      background: <TimeGradientCard />,
    },
    {
      className:
        "row-start-4 row-end-6 sm:row-start-2 sm:row-end-4 lg:row-start-2 lg:row-end-4 lg:col-3",
      background: <GlobeCard />,
    },
  ];

  return (
    <div className="w-full max-w-7xl px-4">
      <div className="mx-auto w-full gap-4 md:max-w-full mb-30 sm:mb-20">
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
