"use client";

import * as React from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

type Item = { src: string; title: string; alt?: string };

export function ThreeDDraggableCarousel({
  items,
  className,
  height = 350,
}: {
  items: Item[];
  className?: string;
  height?: number;
}) {
  const [index, setIndex] = React.useState(0);

  const data = React.useMemo(() => {
    if (!items?.length) return [];
    if (items.length >= 3) return items.slice(0, 3);
    const dup: Item[] = [];
    while (dup.length < 3) dup.push(items[dup.length % items.length]);
    return dup;
  }, [items]);

  if (!data.length) return null;

  const n = data.length;
  const leftIdx = (index - 1 + n) % n;
  const rightIdx = (index + 1) % n;

  const threshold = 60;

  function onDragEnd(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (info.offset.x <= -threshold) setIndex((i) => (i + 1) % n);
    else if (info.offset.x >= threshold) setIndex((i) => (i - 1 + n) % n);
  }

  function Card({
    item,
    position,
    draggable,
    keyId,
  }: {
    item: Item;
    position: -1 | 0 | 1;
    draggable: boolean;
    keyId: string;
  }) {
    const animate =
      position === 0
        ? { x: "0%", rotateY: 0, scale: 1, opacity: 1, zIndex: 30 }
        : position === -1
        ? { x: "-36%", rotateY: 18, scale: 0.92, opacity: 0.95, zIndex: 20 }
        : { x: "36%", rotateY: -18, scale: 0.92, opacity: 0.95, zIndex: 20 };

    return (
      <motion.div
        key={keyId}
        className="absolute inset-0 mx-auto flex select-none items-center justify-center"
        style={{
          perspective: 1000,
          pointerEvents: position === 0 ? "auto" : "none",
        }}
        initial={false}
        animate={animate}
        transition={{ type: "spring", stiffness: 220, damping: 28, mass: 0.6 }}
      >
        <motion.div
          className="relative aspect-[4/5] w-[200px] overflow-hidden rounded-[32px] shadow-xl ring-1 ring-black/5 dark:ring-white/5"
          style={{ transformStyle: "preserve-3d" }}
          drag={draggable ? "x" : false}
          dragElastic={0.12}
          dragMomentum={false}
          onDragEnd={draggable ? onDragEnd : undefined}
          whileTap={{ cursor: "grabbing", scale: 0.98 }}
          whileHover={draggable ? { scale: 1.02 } : undefined}
          // important for touch devices: vertical page scroll still works
          // while allowing horizontal drag
          // (TS ok because it's a valid HTML prop)
          {...({ style: { touchAction: "pan-y" } } as any)}
        >
          <img
            src={item.src}
            alt={item.alt ?? item.title}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/20" />
        </motion.div>
      </motion.div>
    );
  }

  const active = data[index];

  return (
    <div
      className={["relative w-full", className].filter(Boolean).join(" ")}
      style={{ height }}
      aria-roledescription="carousel"
    >
      <div className="relative h-full w-full" style={{ perspective: 1200 }}>
        <Card
          keyId={`left-${leftIdx}`}
          item={data[leftIdx]}
          position={-1}
          draggable={false}
        />
        <Card
          keyId={`center-${index}`}
          item={active}
          position={0}
          draggable={true}
        />
        <Card
          keyId={`right-${rightIdx}`}
          item={data[rightIdx]}
          position={1}
          draggable={false}
        />
      </div>

      <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 w-[220px] text-center">
        <AnimatePresence mode="wait">
          <motion.h3
            key={active.title + index}
            className="text-balance text-base font-semibold tracking-tight text-foreground"
            initial={{ opacity: 0, y: 8, filter: "blur(2px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(2px)" }}
            transition={{ duration: 0.22 }}
          >
            {active.title}
          </motion.h3>
        </AnimatePresence>
      </div>

      {/* FIX: make this overlay non-blocking */}
      <div className="pointer-events-none absolute inset-0" aria-hidden />
    </div>
  );
}
