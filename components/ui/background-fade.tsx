"use client";

import Image from "next/image";

export default function BackgroundFade() {
  return (
    <div className="absolute inset-0 z-[-1] h-[450px] w-full overflow-hidden bg-neutral-100/60 dark:bg-neutral-950/70 [mask-image:linear-gradient(rgb(0,0,0)_80%,rgba(0,0,0,0)_100%)] opacity-30">
      <Image
        src="/images/nature-bg.webp"
        alt="nature background"
        fill
        priority
        className="pointer-events-none absolute inset-0 z-[-1] h-[450px] w-full object-cover mix-blend-overlay select-none grayscale"
        decoding="async"
        sizes="100vw"
      />
    </div>
  );
}
