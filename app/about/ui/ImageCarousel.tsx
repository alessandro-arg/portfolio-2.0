"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

const ImageCarousel = () => {
  const images = [
    {
      src: "/images/profile.jpg",
      title: "Developer",
      alt: "Developer",
    },
    {
      src: "/images/nature-bg.webp",
      title: "Snowboarder",
      alt: "Snowboarder",
    },
    {
      src: "/images/chess_mockup.webp",
      title: "Gamer",
      alt: "Gamer",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const handleDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 50;

    if (info.offset.x > threshold) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    } else if (info.offset.x < -threshold) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  };

  const getPosition = (index: number) => {
    const diff = (index - currentIndex + images.length) % images.length;

    if (diff === 0) {
      return { x: 0, z: 0, opacity: 1, scale: 1, rotateY: 0, zIndex: 30 };
    } else if (diff === 1 || diff === -(images.length - 1)) {
      return {
        x: 120,
        z: -150,
        opacity: 0.7,
        scale: 0.85,
        rotateY: -45,
        zIndex: 10,
      };
    } else {
      return {
        x: -120,
        z: -150,
        opacity: 0.7,
        scale: 0.85,
        rotateY: 45,
        zIndex: 10,
      };
    }
  };

  return (
    <div>
      <div
        className="relative flex h-[350px] w-full max-w-[200px] flex-col items-center justify-center max-lg:mt-12 lg:h-[450px] lg:max-w-[270px]"
        style={{ perspective: "1000px" }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence initial={false}>
          {images.map((image, index) => {
            const position = getPosition(index);
            const isCenter =
              (index - currentIndex + images.length) % images.length === 0;

            return (
              <motion.div
                key={index}
                drag={isCenter ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                animate={{
                  x: position.x,
                  z: position.z,
                  opacity: position.opacity,
                  scale: position.scale,
                  rotateY: position.rotateY,
                  zIndex: position.zIndex,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="absolute cursor-grab active:cursor-grabbing"
                style={{
                  transformStyle: "preserve-3d",
                  zIndex: position.zIndex,
                }}
              >
                <div className="relative">
                  <div
                    className="aspect-[4/5] w-[160px] sm:w-[200px] md:w-[240px] lg:w-[300px] overflow-hidden rounded-3xl"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.5) 0px 10px 30px",
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full rounded-3xl object-cover"
                      draggable="false"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: isCenter ? 1 : 0.5,
                      y: 0,
                    }}
                    className="text-center mt-4 sm:mt-5 lg:mt-6"
                  >
                    <h3 className="text-center text-2xl font-light transition-opacity duration-500">
                      {image.title}
                    </h3>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImageCarousel;
