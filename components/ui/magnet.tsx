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
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
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
  const frame = useRef<number | null>(null);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  useEffect(() => {
    if (disabled || typeof window === "undefined") {
      setIsActive(false);
      setPosition({ x: 0, y: 0 });
      return;
    }

    const handlePointerMove = (e: PointerEvent) => {
      const node = magnetRef.current;
      if (!node) return;

      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        // The node may have unmounted between event and rAF
        if (!mounted.current) return;
        if (!node.isConnected) return;

        const rect = node.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distX = Math.abs(centerX - e.clientX);
        const distY = Math.abs(centerY - e.clientY);

        const within =
          distX < rect.width / 2 + padding && distY < rect.height / 2 + padding;

        if (!mounted.current) return;

        if (within) {
          const offsetX = (e.clientX - centerX) / magnetStrength;
          const offsetY = (e.clientY - centerY) / magnetStrength;
          setIsActive(true);
          setPosition({ x: offsetX, y: offsetY });
        } else {
          setIsActive(false);
          setPosition({ x: 0, y: 0 });
        }
      });
    };

    const reset = () => {
      if (!mounted.current) return;
      setIsActive(false);
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerleave", reset, { passive: true });
    window.addEventListener("pointercancel", reset, { passive: true });
    window.addEventListener("blur", reset, { passive: true }); // tab switch safety

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", reset);
      window.removeEventListener("pointercancel", reset);
      window.removeEventListener("blur", reset);
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
