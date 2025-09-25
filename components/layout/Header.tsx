"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import { gsap } from "gsap";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

const panelSpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

const panelVariants: Variants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ...panelSpring, when: "beforeChildren" },
  },
  exit: { x: "-100%", opacity: 0, transition: { duration: 0.25 } },
};

function useScrollDirection(threshold = 6) {
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

  // Mobile
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const toggleMobile = useCallback(() => setMobileOpen((s) => !s), []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const { overflow, paddingRight } = getComputedStyle(document.body);
      const scrollbar =
        window.innerWidth - document.documentElement.clientWidth;
      const prevOverflow = document.body.style.overflow;
      const prevPadding = document.body.style.paddingRight;
      document.body.style.overflow = "hidden";
      if (scrollbar > 0 && overflow !== "hidden") {
        document.body.style.paddingRight = `${scrollbar}px`;
      }
      return () => {
        document.body.style.overflow = prevOverflow;
        document.body.style.paddingRight = prevPadding;
      };
    }
  }, [mobileOpen]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeMobile]);

  // Mount animation + show/hide on scroll with GSAP
  useEffect(() => {
    if (!barRef.current) return;
    const el = barRef.current;

    // enter animation
    gsap.fromTo(
      el,
      { y: -40, opacity: 0, filter: "blur(6px)" },
      {
        y: 8,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power3.out",
        delay: 0.5,
      }
    );
  }, []);

  useEffect(() => {
    if (!barRef.current) return;
    const el = barRef.current;
    // hide when scrolling down, show when up
    gsap.to(el, {
      y: dir === "down" ? -80 : 8, // 12px margin from the top when shown
      duration: 0.45,
      ease: "power3.out",
    });
  }, [dir]);

  const listVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
    exit: {},
  };

  const linkVariants: Variants = {
    hidden: { x: -24, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: panelSpring },
    exit: { x: -24, opacity: 0, transition: { duration: 0.15 } },
  };

  return (
    <div className="pointer-events-auto fixed left-0 right-0 top-3 z-45">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* The floating shell we animate with GSAP */}
        <div
          ref={barRef}
          className="pointer-events-auto mx-auto"
          style={{ willChange: "transform" }}
        >
          <nav
            className={[
              "relative flex items-center justify-between gap-4",
              "rounded-full border-2 border-gray-300 dark:border-black bg-slate-200/90 dark:bg-gray-800/95 backdrop-blur supports-[backdrop-filter]:bg-slate-200/90 dark:supports-[backdrop-filter]:bg-gray-800/95",
              "shadow-[2px_3px_0_0_#d1d5dc] dark:shadow-[2px_3px_0_0_#16b1ff20] px-4 py-2 sm:px-5 sm:py-2.5",
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
                  <li key={item.href} className="relative font-medium">
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
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
            </ul>

            {/* Mobile burger */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-drawer"
              onClick={toggleMobile}
              className="sm:hidden inline-flex items-center justify-center rounded-full p-2 text-neutral-900 dark:text-neutral-100 bg-transparent cursor-pointer"
            >
              <span className="sr-only">Open menu</span>
              {/* simple burger icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>

      {/* MOBILE FULLSCREEN PANEL (no backdrop) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            key="drawer"
            className={[
              "fixed inset-0 z-50 h-dvh w-dvw",
              "bg-white dark:bg-neutral-900",
              "border-l-0",
              "flex flex-col",
            ].join(" ")}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Top bar with close */}
            <div className="flex items-center justify-end px-7 py-7">
              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMobile}
                className="inline-flex items-center justify-center rounded-full p-2 text-neutral-900 dark:text-neutral-100 cursor-pointer"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Centered big links with staggered slide-in */}
            <motion.ul
              variants={listVariants}
              className="flex flex-1 items-center justify-center flex-col gap-6 px-6 text-center"
            >
              {NAV.map((item) => (
                <motion.li key={item.href} variants={linkVariants}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-3xl font-semibold tracking-tight text-neutral-900 hover:text-neutral-700 dark:text-neutral-100 dark:hover:text-neutral-300 transition-colors"
                    onClick={() => {
                      setActive(item.href);
                      closeMobile();
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}

              <motion.li variants={linkVariants} className="mt-2">
                <Link
                  href="#contact"
                  className={[
                    "inline-flex items-center justify-center rounded-full",
                    "border-2 border-neutral-900 dark:border-neutral-100",
                    "bg-sky-500 text-neutral-900 dark:text-black",
                    "px-6 py-3 text-2xl font-bold",
                    "shadow-[2px_3px_0_0_rgba(0,0,0,1)] dark:shadow-[2px_3px_0_0_rgba(255,255,255,0.15)]",
                  ].join(" ")}
                  onClick={() => {
                    setActive("#contact");
                    closeMobile();
                  }}
                >
                  Contact
                </Link>
              </motion.li>
            </motion.ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
