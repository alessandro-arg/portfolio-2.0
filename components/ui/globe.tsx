"use client";

import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

type RGB = [number, number, number];

type Country = {
  key: string;
  label: string;
  flag: string;
  lat: number;
  lng: number;
};

const DEFAULT_THETA = 0.38;

const CITIES: Country[] = [
  { key: "germany", label: "Germany", flag: "🇩🇪", lat: 47.6231, lng: 8.2172 },
  { key: "italy", label: "Italy", flag: "🇮🇹", lat: 40.8522, lng: 14.2681 },
];

export type GlobeProps = {
  defaultCountryKey?: Country["key"];
  isDark?: boolean;
  colors?: {
    base?: RGB;
    glow?: RGB;
    marker?: RGB;
  };
  height?: string | number;
  horizontalOnly?: boolean;
};

export function Globe({
  defaultCountryKey = "germany",
  isDark = true,
  colors = {
    base: [1, 1, 1],
    glow: [1.15, 1.15, 1.2],
    marker: [0.1, 0.6, 1],
  },
  height = "50vh",
  horizontalOnly = true,
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [activeKey, setActiveKey] = useState<Country["key"]>(defaultCountryKey);
  const focusRef = useRef<[number, number]>([0, 0]);

  const currentPhiRef = useRef(0);
  const currentThetaRef = useRef(DEFAULT_THETA);

  const draggingRef = useRef(false);
  const snapRef = useRef(false);

  const locationToAngles = (lat: number, lng: number): [number, number] => [
    Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2),
    (lat * Math.PI) / 180,
  ];

  useEffect(() => {
    const initial =
      CITIES.find((c) => c.key === defaultCountryKey) ?? CITIES[0];
    const [phi, theta] = locationToAngles(initial.lat, initial.lng);
    focusRef.current = [phi, theta];
    currentPhiRef.current = phi;
    currentThetaRef.current = theta;
  }, [defaultCountryKey]);

  useEffect(() => {
    let width = 0;
    let heightPx = 0;
    const doublePi = Math.PI * 2;

    const onResize = () => {
      if (!containerRef.current || !canvasRef.current) return;
      width = containerRef.current.offsetWidth;
      heightPx =
        typeof height === "number" ? height : containerRef.current.offsetHeight;
    };

    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: heightPx * 2,
      phi: currentPhiRef.current,
      theta: currentThetaRef.current,
      dark: isDark ? 1 : 0,
      diffuse: isDark ? 2.7 : 3.2,
      mapSamples: 18000,
      mapBrightness: isDark ? 1.35 : 1.1,
      baseColor: colors.base ?? [1, 1, 1],
      markerColor: colors.marker ?? [0.1, 0.6, 1],
      glowColor: colors.glow ?? [1.15, 1.15, 1.2],
      markers: [
        { location: [47.6231, 8.2172], size: 0.15 },
        { location: [40.8522, 14.2681], size: 0.15 },
      ],
      onRender: (state) => {
        const [focusPhi] = focusRef.current;

        let phi = currentPhiRef.current;
        let theta = currentThetaRef.current;

        if (!draggingRef.current && snapRef.current) {
          const distPositive = (focusPhi - phi + doublePi) % doublePi;
          const distNegative = (phi - focusPhi + doublePi) % doublePi;
          if (distPositive < distNegative) phi += distPositive * 0.08;
          else phi -= distNegative * 0.08;

          // stop snapping when close enough
          if (
            Math.abs(((phi - focusPhi + Math.PI) % (2 * Math.PI)) - Math.PI) <
            0.002
          ) {
            snapRef.current = false;
          }
        }
        theta = horizontalOnly ? DEFAULT_THETA : theta;

        currentPhiRef.current = phi;
        currentThetaRef.current = theta;

        state.phi = phi;
        state.theta = theta;
        state.width = width * 2;
        state.height = heightPx * 2;
      },
    });

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1";
    }, 0);

    const canvas = canvasRef.current;
    canvas.style.opacity = "1";
    canvas.style.cursor = "grab";

    let startX = 0;
    let startPhi = 0;

    const onPointerDown = (e: PointerEvent) => {
      draggingRef.current = true;
      startX = e.clientX;
      startPhi = currentPhiRef.current;
      canvas.style.cursor = "grabbing";
      (e.target as Element).setPointerCapture?.(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      const deltaX = e.clientX - startX;
      const rotPerPx =
        (2 * Math.PI) / (containerRef.current?.offsetWidth || 800);
      currentPhiRef.current = startPhi + deltaX * rotPerPx;
      focusRef.current = [currentPhiRef.current, currentThetaRef.current];
    };
    const onPointerUp = () => {
      draggingRef.current = false;
      canvas.style.cursor = "grab";
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [colors.base, colors.glow, colors.marker, height, horizontalOnly, isDark]);

  const selectCity = (country: Country) => {
    setActiveKey(country.key);
    // set snap target and enable one-time easing
    focusRef.current = locationToAngles(country.lat, country.lng);
    snapRef.current = true;
  };

  return (
    <div ref={containerRef} className="relative w-full" style={{ height }}>
      {/* Buttons row */}
      <div className="absolute mx-auto w-full flex flex-wrap justify-center items-center gap-2 -top-12 sm:-top-4 lg:-top-4">
        {CITIES.map((c) => {
          const isActive = c.key === activeKey;
          return (
            <button
              key={c.key}
              onClick={() => selectCity(c)}
              className={clsx(
                "z-50 flex cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 transition-all duration-150",
                isActive
                  ? "bg-sky-500/10 text-sky-600 ring-1 ring-sky-500/40 ring-inset dark:text-sky-400"
                  : "bg-neutral-200 text-neutral-600 hover:bg-neutral-200/80 dark:bg-neutral-800/50 dark:text-neutral-400 dark:hover:bg-neutral-800"
              )}
            >
              <span>{c.flag}</span>
              <span className="font-mono">{c.label}</span>
            </button>
          );
        })}
      </div>

      {/* Globe canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-x-0 bottom-0 mx-auto"
        style={{
          width: "min(700px, 100%)",
          height: "100%",
          contain: "layout paint size",
          opacity: 0,
          transition: "opacity 0.6s ease",
        }}
      />
    </div>
  );
}
