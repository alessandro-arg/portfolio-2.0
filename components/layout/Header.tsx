"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

function useScrollDirection(threshold = 6) {
  // returns "up" | "down"
  const [dir, setDir] = useState<"up" | "down">("up");
  const lastY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      const y = window.scrollY || 0;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const delta = y - lastY.current;
          if (Math.abs(delta) > threshold) {
            setDir(delta > 0 ? "down" : "up");
            lastY.current = y <= 0 ? 0 : y;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return dir;
}

export default function Header() {
  const dir = useScrollDirection(8);
  const barRef = useRef<HTMLDivElement>(null);
  const underlineLayoutId = useMemo(() => "nav-underline", []);
  const [active, setActive] = useState("#home");

  // Mount animation + show/hide on scroll with GSAP
  useEffect(() => {
    if (!barRef.current) return;
    const el = barRef.current;

    // enter animation
    gsap.fromTo(
      el,
      { y: -40, opacity: 0, filter: "blur(6px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power3.out",
        delay: 0.05,
      }
    );
  }, []);

  useEffect(() => {
    if (!barRef.current) return;
    const el = barRef.current;
    // hide when scrolling down, show when up
    gsap.to(el, {
      y: dir === "down" ? -80 : 12, // 12px margin from the top when shown
      duration: 0.45,
      ease: "power3.out",
    });
  }, [dir]);

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-3 z-50">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* The floating shell we animate with GSAP */}
        <div
          ref={barRef}
          className="pointer-events-auto mx-auto"
          style={{ willChange: "transform" }}
        >
          <nav
            className={[
              // pill look
              "relative flex items-center justify-between gap-4",
              "rounded-full border-2 border-black bg-gray-800/80 backdrop-blur supports-[backdrop-filter]:bg-gray-800/80",
              "shadow-[2px_3px_0_0_#000] px-4 py-2 sm:px-5 sm:py-2.5",
            ].join(" ")}
          >
            {/* Name/Logo */}
            <Link
              href="/"
              className="select-none text-base font-semibold tracking-tight sm:text-lg"
              onMouseDown={(e) => e.currentTarget.classList.add("scale-95")}
              onMouseUp={(e) => e.currentTarget.classList.remove("scale-95")}
            >
              Alessandro
            </Link>

            {/* Nav */}
            <ul className="hidden items-center gap-6 sm:flex">
              {NAV.map((item) => {
                const isActive = active === item.href;
                return (
                  <li key={item.href} className="relative">
                    <Link
                      href={item.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                      onClick={() => setActive(item.href)}
                    >
                      {item.label}
                    </Link>

                    {/* animated underline */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          layoutId={underlineLayoutId}
                          className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#16b1ff]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>

            {/* Contact button */}
            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97, y: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <Link
                href="#contact"
                className={[
                  "inline-flex items-center justify-center rounded-full",
                  "border-2 border-black bg-[#16b1ff] px-4 py-1.5 text-sm font-semibold text-black",
                  "shadow-[2px_3px_0_0_#000] hover:shadow-[1px_2px_0_0_#000] transition-shadow",
                ].join(" ")}
                onClick={() => setActive("#contact")}
              >
                Contact
              </Link>
            </motion.div>
          </nav>
        </div>
      </div>
    </div>
  );
}
