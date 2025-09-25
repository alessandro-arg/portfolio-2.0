"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

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

  const drawerVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 280, damping: 30, bounce: 0.15 },
    },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.25 } },
  };

  const itemVariants = {
    hidden: { x: 24, opacity: 0, rotate: 2 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        delay: 0.06 * i,
        type: "spring" as const,
        stiffness: 400,
        damping: 32,
      },
    }),
    exit: { x: 24, opacity: 0, transition: { duration: 0.15 } },
  };

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
              className="sm:hidden inline-flex items-center justify-center rounded-full border-2 border-neutral-900 dark:border-neutral-100 p-2 text-neutral-900 dark:text-neutral-100 bg-transparent"
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

      {/* MOBILE OVERLAY + DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
            />
            {/* Drawer */}
            <motion.aside
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              key="drawer"
              className={[
                "fixed right-0 top-0 z-50 h-full w-[82%] xs:w-3/4 max-w-[360px]",
                "rounded-l-3xl border-l-2 border-neutral-900 dark:border-neutral-100",
                "bg-white/90 dark:bg-neutral-900/95 backdrop-blur",
                "shadow-[-6px_0_24px_rgba(0,0,0,0.25)]",
                "flex flex-col",
              ].join(" ")}
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Header row inside drawer */}
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                  Menu
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={closeMobile}
                  className="inline-flex items-center justify-center rounded-full border-2 border-neutral-900 dark:border-neutral-100 p-2 text-neutral-900 dark:text-neutral-100"
                >
                  <svg
                    width="22"
                    height="22"
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

              <div className="mt-2 flex flex-col gap-2 px-3 pb-6">
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.href}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Link
                      href={item.href}
                      className="block rounded-xl border border-transparent px-4 py-3 text-lg font-medium text-neutral-800 hover:text-neutral-900 hover:border-neutral-300 dark:text-neutral-200 dark:hover:text-white dark:hover:border-neutral-700 transition-colors"
                      onClick={() => {
                        setActive(item.href);
                        closeMobile();
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  custom={NAV.length}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="mt-2"
                >
                  <Link
                    href="#contact"
                    className={[
                      "block text-center rounded-2xl",
                      "border-2 border-neutral-900 dark:border-neutral-100",
                      "bg-sky-500 text-neutral-900 dark:text-black",
                      "px-4 py-3 text-base font-semibold",
                      "shadow-[2px_3px_0_0_rgba(0,0,0,1)] dark:shadow-[2px_3px_0_0_rgba(255,255,255,0.15)]",
                    ].join(" ")}
                    onClick={() => {
                      setActive("#contact");
                      closeMobile();
                    }}
                  >
                    Contact
                  </Link>
                </motion.div>
              </div>

              {/* Fancy bottom accent */}
              <motion.div
                aria-hidden
                className="mt-auto h-20 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <svg
                  className="h-full w-full"
                  viewBox="0 0 600 120"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M0,0 C180,100 420,20 600,100 L600,120 L0,120 Z"
                    fill="url(#g)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="rgb(56,189,248)" />
                      {/* sky-400 */}
                      <stop offset="100%" stopColor="rgb(14,165,233)" />
                      {/* sky-500 */}
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
