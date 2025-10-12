"use client";

import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import React from "react";

type Scheme = "purple" | "yellow" | "green" | "blue";

const schemes: Record<
  Scheme,
  {
    border: string;
    hoverBg: string;
    iconWrapBg: string;
    iconColor: string;
  }
> = {
  purple: {
    border: "border-purple-500/30",
    hoverBg: "hover:bg-purple-500/5",
    iconWrapBg: "bg-purple-900/20",
    iconColor: "text-purple-400",
  },
  yellow: {
    border: "border-yellow-500/30",
    hoverBg: "hover:bg-yellow-500/5 ",
    iconWrapBg: "bg-yellow-900/20",
    iconColor: "text-yellow-400",
  },
  green: {
    border: "border-green-500/30",
    hoverBg: "hover:bg-green-500/5",
    iconWrapBg: "bg-green-900/20",
    iconColor: "text-green-400",
  },
  blue: {
    border: "border-blue-500/30",
    hoverBg: "hover:bg-blue-500/5",
    iconWrapBg: "bg-blue-900/20",
    iconColor: "text-blue-400",
  },
};

export interface StatsCardProps {
  title: string;
  value: React.ReactNode;
  icon: LucideIcon;
  scheme?: Scheme;
  className?: string;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  scheme = "purple",
  className,
}: StatsCardProps) {
  const s = schemes[scheme];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl cursor-default border p-3 md:p-4 transition-all duration-300 bg-zinc-900/50",
        s.border,
        s.hoverBg,
        "col-span-1",
        className
      )}
      role="status"
      aria-label={`${title}: ${typeof value === "string" ? value : ""}`}
    >
      <div className="flex items-center gap-3 md:gap-4">
        <div className={cn("rounded-lg p-3", s.iconWrapBg)}>
          <Icon className={cn("h-6 w-6", s.iconColor)} aria-hidden="true" />
        </div>
        <div>
          <p className="line-clamp-1 text-sm text-neutral-400 dark:text-zinc-400">
            {title}
          </p>
          <p className="text-xl md:text-2xl font-bold text-neutral-100 dark:text-zinc-100">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}
