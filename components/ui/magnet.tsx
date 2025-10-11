"use client";

import {
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";

export type MagnetProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  /** Extra hover area beyond the element’s bounds */
  padding?: number;
  /** Disable magnetic behavior */
  disabled?: boolean;
  /** Lower = stronger pull (distance is divided by this) */
  magnetStrength?: number;
  /** CSS transition while active */
  activeTransition?: string;
  /** CSS transition when returning to rest */
  inactiveTransition?: string;
  /** Tailwind/class for the outer wrapper */
  wrapperClassName?: string;
  /** Tailwind/class for the moving inner node */
  innerClassName?: string;
};

export default function Magnet({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.5s ease-in-out",
  wrapperClassName = "",
  innerClassName = "",
  ...props
}: MagnetProps) {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement>(null);

  // rAF throttle for smoother motion
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (disabled) {
      setIsActive(false);
      setPosition({ x: 0, y: 0 });
      return;
    }
    // Guard for SSR (shouldn’t run on server anyway due to 'use client')
    if (typeof window === "undefined") return;

    const handlePointerMove = (e: PointerEvent) => {
      if (!magnetRef.current) return;

      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const rect = magnetRef.current!.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distX = Math.abs(centerX - e.clientX);
        const distY = Math.abs(centerY - e.clientY);

        if (
          distX < rect.width / 2 + padding &&
          distY < rect.height / 2 + padding
        ) {
          setIsActive(true);
          const offsetX = (e.clientX - centerX) / magnetStrength;
          const offsetY = (e.clientY - centerY) / magnetStrength;
          setPosition({ x: offsetX, y: offsetY });
        } else {
          setIsActive(false);
          setPosition({ x: 0, y: 0 });
        }
      });
    };

    const handlePointerLeave = () => {
      setIsActive(false);
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerleave", handlePointerLeave, {
      passive: true,
    });

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [padding, disabled, magnetStrength]);

  const transitionStyle = isActive ? activeTransition : inactiveTransition;

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: "relative", display: "inline-block" }}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: transitionStyle,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
