import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const focusRef = useRef<[number, number]>([0, 0]);

  const locationToAngles = (lat: number, long: number): [number, number] => {
    return [
      Math.PI - ((long * Math.PI) / 180 - Math.PI / 2),
      (lat * Math.PI) / 180,
    ];
  };

  useEffect(() => {
    let width = 0;
    let currentPhi = 0;
    let currentTheta = 0;
    const doublePi = Math.PI * 2;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 200 / 255, 21 / 255],
      glowColor: [1.2, 1.2, 1.2],
      markers: [
        { location: [47.6231, 8.2172], size: 0.15 },
        { location: [40.8522, 14.2681], size: 0.15 },
      ],
      onRender: (state) => {
        state.phi = currentPhi;
        state.theta = currentTheta;
        const [focusPhi, focusTheta] = focusRef.current;
        const distPositive = (focusPhi - currentPhi + doublePi) % doublePi;
        const distNegative = (currentPhi - focusPhi + doublePi) % doublePi;

        if (distPositive < distNegative) {
          currentPhi += distPositive * 0.08;
        } else {
          currentPhi -= distNegative * 0.08;
        }

        currentTheta = currentTheta * 0.92 + focusTheta * 0.08;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className="-left-33 -bottom-75"
      style={{
        width: "700px",
        aspectRatio: 1,
        margin: "auto",
        position: "absolute",
      }}
    >
      <div
        className="mx-auto flex flex-wrap justify-center gap-2 text-md"
        style={{ gap: ".5rem", marginBottom: "0" }}
      >
        <button
          className="z-50 flex cursor-pointer items-center gap-1.5 rounded-sm px-1.5 py-0.5 transition-all duration-150 bg-sky-500/10 text-sky-600 ring-1 ring-sky-500/40 ring-inset dark:text-sky-400"
          onClick={() => {
            focusRef.current = locationToAngles(47.6231, 8.2172);
          }}
        >
          🇩🇪 Waldshut
        </button>
        <button
          className="z-50 flex cursor-pointer items-center gap-1.5 rounded-sm px-1.5 py-0.5 transition-all duration-150 bg-neutral-100 text-neutral-600 hover:bg-neutral-200/80 dark:bg-neutral-800/50 dark:text-neutral-400 dark:hover:bg-neutral-800 font-mono"
          onClick={() => {
            focusRef.current = locationToAngles(40.8522, 14.2681);
          }}
        >
          🇮🇹 Napoli
        </button>
      </div>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          opacity: 0,
          transition: "opacity 1s ease",
        }}
      />
    </div>
  );
}
