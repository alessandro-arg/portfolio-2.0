"use client";

import React, { useRef } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
};

type TestimonialsMarqueeProps = {
  testimonials: Testimonial[];
  duration?: number;
  pauseOnHover?: boolean;
  className?: string;
};

export function TestimonialsMarquee({
  testimonials,
  duration = 80,
  pauseOnHover = true,
  className,
}: TestimonialsMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (pauseOnHover && trackRef.current) {
      trackRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && trackRef.current) {
      trackRef.current.style.animationPlayState = "running";
    }
  };

  const doubled = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div
      className={`w-full overflow-hidden ${className ?? ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={trackRef}
        className="flex flex-row gap-6 testimonial-marquee-track"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {doubled.map((t, i) => (
          <div
            key={i}
            className="flex flex-col justify-between items-start p-6 border border-dashed border-stone-300 dark:border-border w-[300px] min-w-[300px] max-w-xs bg-stone-100 dark:bg-primary/5 flex-shrink-0"
          >
            <p className="mb-4 text-stone-500 dark:text-stone-400 text-base text-start">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex flex-row justify-center items-center gap-4 mt-4">
              <div className="flex flex-col">
                <p className="font-instrument text-primary text-2xl italic tracking-wide">
                  {t.name}
                </p>
                <p className="text-stone-500 dark:text-muted-foreground text-sm line-clamp-1">
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .testimonial-marquee-track {
          animation: testimonial-marquee var(--marquee-duration, 80s) linear infinite;
          width: max-content;
        }
 
        @keyframes testimonial-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </div>
  );
}
