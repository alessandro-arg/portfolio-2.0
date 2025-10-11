"use client";

import * as React from "react";
import { motion, PanInfo } from "framer-motion";

type Item = { src: string; title: string; alt?: string };

const EASE = "cubic-bezier(0.23, 1, 0.32, 1)";
const DURATION_MS = 600;
const THRESHOLD = 60;
const AUTOPLAY_MS = 2000;

export function ThreeDDraggableCarousel({
  items,
  className,
  height = 350,
  pauseOnHover = true,
}: {
  items: Item[]; // ideally 3
  className?: string;
  height?: number;
  pauseOnHover?: boolean;
}) {
  const [index, setIndex] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  // Normalize to exactly 3 for the 3-slot layout
  const data = React.useMemo(() => {
    if (!items?.length) return [];
    if (items.length >= 3) return items.slice(0, 3);
    const out: Item[] = [];
    while (out.length < 3) out.push(items[out.length % items.length]);
    return out;
  }, [items]);

  if (!data.length) return null;

  const n = data.length;

  // For each item, compute its "slot" relative to the active index: -1 (left), 0 (center), 1 (right)
  const slotOf = (i: number) => {
    const rel = (i - index + n) % n; // 0,1,2 map to 0,1,2
    if (rel === 0) return 0; // center
    if (rel === 1) return 1; // right
    return -1; // left
  };

  // Autoplay
  React.useEffect(() => {
    if ((pauseOnHover && isHovered) || isDragging) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % n), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [n, isHovered, isDragging, pauseOnHover]);

  function handleDragEnd(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) {
    setIsDragging(false);
    if (info.offset.x <= -THRESHOLD) setIndex((i) => (i + 1) % n);
    else if (info.offset.x >= THRESHOLD) setIndex((i) => (i - 1 + n) % n);
  }

  function Card({
    item,
    slot, // -1 | 0 | 1
    draggable, // only center is draggable
  }: {
    item: Item;
    slot: -1 | 0 | 1;
    draggable: boolean;
  }) {
    // Your exact three states + a tiny Y-arc for circular feeling
    // We animate with **pure CSS transitions** so changes tween smoothly.
    const base: React.CSSProperties = {
      position: "absolute",
      borderRadius: 30,
      boxShadow: "rgba(0, 0, 0, 0.5) 0px 10px 30px",
      transition: `left ${DURATION_MS}ms ${EASE}, transform ${DURATION_MS}ms ${EASE}, filter ${DURATION_MS}ms ${EASE}, z-index ${DURATION_MS}ms ${EASE}`,
      // defaults: center
      left: "50%",
      transform:
        "translateX(-50%) translateY(0px) perspective(1000px) scale(1)",
      zIndex: 3,
      filter: "none",
    };

    if (slot === -1) {
      base.left = "5%";
      base.transform =
        "translateX(-50%) translateY(6px) perspective(1000px) rotateY(45deg) scale(0.85)";
      base.zIndex = 1;
      base.filter = "brightness(0.7)";
    } else if (slot === 1) {
      base.left = "95%";
      base.transform =
        "translateX(-50%) translateY(6px) perspective(1000px) rotateY(-45deg) scale(0.85)";
      base.zIndex = 1;
      base.filter = "brightness(0.7)";
    } else {
      // center: a small lift to emphasize circular motion
      base.transform =
        "translateX(-50%) translateY(-6px) perspective(1000px) scale(1)";
    }

    return (
      <div style={base} className="pointer-events-none">
        <motion.div
          className="relative aspect-[4/5] w-[220px] lg:w-[300px] overflow-hidden pointer-events-auto"
          drag={draggable ? "x" : false}
          dragElastic={0.12}
          dragMomentum={false}
          onDragStart={draggable ? () => setIsDragging(true) : undefined}
          onDragEnd={draggable ? handleDragEnd : undefined}
          whileTap={draggable ? { scale: 0.98, cursor: "grabbing" } : undefined}
          style={{ touchAction: "pan-y" }}
        >
          <img
            src={item.src}
            alt={item.alt ?? item.title}
            className="h-full w-full rounded-3xl object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    );
  }

  const active = data[index];

  return (
    <div
      className={["relative w-full", className].filter(Boolean).join(" ")}
      style={{ height }}
      aria-roledescription="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Stage */}
      <div className="relative h-full w-full">
        {data.map((item, i) => {
          const slot = slotOf(i) as -1 | 0 | 1;
          const draggable = slot === 0;
          // IMPORTANT: stable keys per item so DOM nodes persist and CSS transitions can run
          const key = item.src + "|" + (item.title ?? i);
          return (
            <Card key={key} item={item} slot={slot} draggable={draggable} />
          );
        })}
      </div>

      {/* Caption */}
      <div className="mt-3 text-center lg:mt-4">
        <h3 className="text-balance text-base font-semibold tracking-tight text-foreground">
          {active.title}
        </h3>
      </div>
    </div>
  );
}
