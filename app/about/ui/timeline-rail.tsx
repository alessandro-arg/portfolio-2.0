"use client";

import { useEffect, useRef, useState } from "react";

function TimelineRail() {
  const railWrapRef = useRef<HTMLDivElement | null>(null); // wrapper for the whole timeline column
  const lineRef = useRef<HTMLDivElement | null>(null); // vertical rail
  const fillRef = useRef<HTMLDivElement | null>(null); // gradient fill element
  const avatarRef = useRef<HTMLDivElement | null>(null); // avatar circle

  const [avatarH, setAvatarH] = useState(0);

  // Measure avatar height to keep it centered at 50vh
  useEffect(() => {
    const updateAvatarH = () =>
      setAvatarH(avatarRef.current?.offsetHeight ?? 0);
    updateAvatarH();
    const ro = new ResizeObserver(updateAvatarH);
    if (avatarRef.current) ro.observe(avatarRef.current);
    window.addEventListener("resize", updateAvatarH);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateAvatarH);
    };
  }, []);

  useEffect(() => {
    let rafId = 0;
    let scheduled = false;

    const compute = () => {
      scheduled = false;
      const lineEl = lineRef.current;
      const fillEl = fillRef.current;
      if (!lineEl || !fillEl) return;

      const railRect = lineEl.getBoundingClientRect();
      const vhMid = window.innerHeight / 2;

      // Distance from rail's top to the avatar center (pinned at vhMid)
      const distance = vhMid - railRect.top - avatarH / 2;

      // Max travel inside the rail (so avatar never overshoots)
      const maxTravel = Math.max(railRect.height - avatarH, 1);

      // Normalize and clamp to [0..1]
      const progress = Math.min(1, Math.max(0, distance / maxTravel));

      // Direct, synchronous update → no library buffering, no lag
      // Use GPU-friendly transform with origin-top set in className
      fillEl.style.transform = `scaleY(${progress})`;
    };

    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      rafId = requestAnimationFrame(compute);
    };

    // Initial paint
    schedule();

    // Update on scroll/resize at paint cadence
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [avatarH]);

  return (
    <div
      ref={railWrapRef}
      className="absolute top-0 h-full w-8 max-md:ms-2 md:left-[calc(32%_-_1rem)]"
      aria-hidden
    >
      <div className="relative h-full w-full">
        {/* Sticky avatar: locks to 50% of viewport, stays inside rail bounds */}
        <div
          className="sticky -left-0.5 z-10 flex"
          style={{ top: `calc(50vh - ${Math.max(avatarH, 36) / 2}px)` }}
        >
          <div
            ref={avatarRef}
            className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white/60 shadow-md dark:border-white/20"
          >
            {/* Perfect circular cover */}
            <img
              src="/images/profile.jpg"
              alt="profile"
              loading="lazy"
              decoding="async"
              draggable={false}
              className="block h-full w-full object-cover object-center select-none"
            />
          </div>
        </div>

        {/* Rail + fill — fill follows avatar 1:1 */}
        <div
          ref={lineRef}
          className="absolute top-1 bottom-1 left-1/2 w-1.5 -translate-x-1/2 rounded-full bg-neutral-200 dark:bg-neutral-800 shadow-[inset_0_2px_1.5px_rgba(165,174,184,0.62)]"
        >
          <div
            ref={fillRef}
            className="absolute inset-0 w-full origin-top rounded-full bg-gradient-to-t from-cyan-300 from-[0%] via-blue-700 via-[10%] to-transparent will-change-transform transform-gpu"
            // transform is set imperatively in JS for zero-lag sync
            style={{ transform: "scaleY(0)" }}
          />
        </div>
      </div>
    </div>
  );
}

export default TimelineRail;
