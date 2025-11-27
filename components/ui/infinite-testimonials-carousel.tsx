"use client";

import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

type TestimonialItem = {
  quote: string;
  name: string;
  title: string;
  role: string;
  bg?: string;
};

type InfiniteTestimonialsCarouselProps = {
  items: TestimonialItem[];
  className?: string;
  autoPlayDelay?: number;
  pauseOnHover?: boolean;
};

export const InfiniteTestimonialsCarousel: React.FC<
  InfiniteTestimonialsCarouselProps
> = ({ items, className, autoPlayDelay = 5000, pauseOnHover = true }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
  });

  const autoplayTimer = useRef<number | null>(null);
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);

  const clearAutoplay = useCallback(() => {
    if (autoplayTimer.current !== null) {
      clearInterval(autoplayTimer.current);
      autoplayTimer.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (!emblaApi) return;

    clearAutoplay();

    autoplayTimer.current = window.setInterval(() => {
      if (isHoveredRef.current || isDraggingRef.current) return;
      if (!emblaApi) return;

      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, autoPlayDelay);
  }, [autoPlayDelay, emblaApi, clearAutoplay]);

  useEffect(() => {
    if (!emblaApi) return;

    startAutoplay();

    const onPointerDown = () => {
      isDraggingRef.current = true;
      clearAutoplay();
    };

    const onPointerUp = () => {
      isDraggingRef.current = false;
      startAutoplay();
    };

    const onDestroy = () => {
      clearAutoplay();
    };

    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("pointerUp", onPointerUp);
    emblaApi.on("destroy", onDestroy);

    return () => {
      clearAutoplay();
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("pointerUp", onPointerUp);
      emblaApi.off("destroy", onDestroy);
    };
  }, [emblaApi, clearAutoplay, startAutoplay]);

  const handleMouseEnter = () => {
    if (!pauseOnHover) return;
    isHoveredRef.current = true;
    clearAutoplay();
  };

  const handleMouseLeave = () => {
    if (!pauseOnHover) return;
    isHoveredRef.current = false;
    startAutoplay();
  };

  if (!items?.length) return null;

  return (
    <div
      className={cn(
        "relative z-20 w-full max-w-7xl overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      <div
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="embla__viewport overflow-hidden"
      >
        <ul className="embla__container flex gap-4 px-[15px]">
          {items.map((item, index) => (
            <li
              key={`${item.name}-${index}`}
              className={cn("embla__slide flex-none snap-center")}
            >
              <article
                className={cn(
                  // 👇 your original fixed size styles
                  "relative flex h-[370px] w-[300px] flex-col justify-between overflow-hidden",
                  "rounded-xl p-5 antialiased select-none text-white",
                  "md:h-[440px] md:w-[400px] md:rounded-2xl lg:px-6 lg:py-7"
                )}
                style={{
                  background: item.bg,
                }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-[2px] -z-10 rounded-2xl opacity-40"
                />

                <div>
                  <h4 className="mb-5 text-lg font-bold tracking-wide md:text-2xl font-instrument">
                    {item.title}
                  </h4>
                  <p className="mb-3 line-clamp-7 text-base font-extralight tracking-tight md:line-clamp-10 md:text-lg">
                    {item.quote}
                  </p>
                </div>

                <div>
                  <span className="text-base font-bold tracking-wide md:text-xl">
                    {item.name}
                  </span>
                  <p className="text-sm md:text-base opacity-80">{item.role}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
