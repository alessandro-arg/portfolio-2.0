"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Github, Linkedin } from "lucide-react";
import ContactForm from "./ContactForm";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isShort, setIsShort] = useState(false);
  const [isEvenShorter, setIsEvenShorter] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsShort(window.innerHeight < 740);
      setIsEvenShorter(window.innerHeight < 670);
    };
    check();
    window.addEventListener("resize", check);
    window.addEventListener("orientationchange", check);
    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("orientationchange", check);
    };
  }, []);

  // modal-only scroll lock
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleEmailClick = () => {
    window.open("mailto:contact@alessandro-argenziano.com", "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50"
            onClick={onClose}
          />

          {/* Modal wrapper */}
          <div className="fixed inset-0 z-50 flex items-center justify-center sm:p-4 pointer-events-none cursor-default">
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 16 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className={[
                "pointer-events-auto relative w-dvw h-dvh rounded-none",
                "sm:w-full sm:max-w-lg sm:h-auto sm:rounded-2xl",
                "bg-card border border-border shadow-2xl overflow-hidden",
              ].join(" ")}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary/80 hover:bg-secondary transition-colors duration-200 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div
                className={[
                  "relative",
                  "p-5 sm:p-8",
                  "h-full sm:h-auto",
                  "grid place-items-center sm:block",
                ].join(" ")}
              >
                <div className="w-full max-w-md sm:max-w-none sm:w-auto font-outfit">
                  {/* Header */}
                  <div className="mb-5 sm:mb-6">
                    <motion.h2
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.12 }}
                      className="text-xl sm:text-3xl font-semibold text-foreground mb-1.5 sm:mb-2"
                    >
                      Get in Touch
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.16 }}
                      className="text-sm sm:text-base text-muted-foreground"
                    >
                      Have a project in mind? Let&apos;s talk about it.
                    </motion.p>
                  </div>

                  {/* The extracted reusable form */}
                  <ContactForm onSubmitted={onClose} />

                  {/* Separator */}
                  {!isEvenShorter && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ delay: 0.4, duration: 0.35 }}
                      className="relative my-5 sm:my-6"
                    >
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border"></div>
                      </div>
                      <div className="relative flex justify-center text-[10px] sm:text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">
                          Or
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {/* Extras (keep modal-only) */}
                  <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row justify-between items-center">
                    {!isShort && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                      >
                        <button
                          onClick={handleEmailClick}
                          className="w-fit bg-secondary/50 hover:bg-secondary border py-3 px-4 rounded-lg transition-all duration-200 group cursor-pointer flex gap-x-3 border-b bg-gradient-to-r to-transparent p-4 border-neutral-200 dark:border-neutral-700/30 from-blue-900/20"
                        >
                          <div className="flex items-center justify-center gap-2">
                            <Mail className="w-5 h-5 group-hover:text-blue-500 text-blue-400 transition-colors" />
                            <div className="flex flex-col items-start">
                              <span className="text-sm font-medium text-foreground">
                                contact@alessandro-argenziano.com
                              </span>
                              <span className="text-xs text-muted-foreground">
                                Send me an email directly
                              </span>
                            </div>
                          </div>
                        </button>
                      </motion.div>
                    )}

                    {!isEvenShorter && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center justify-center gap-3 sm:gap-4"
                      >
                        <div className="relative group">
                          <a
                            href="https://github.com/alessandro-arg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-secondary/50 hover:bg-secondary border border-border transition-all duration-200 group"
                            aria-label="GitHub Profile"
                          >
                            <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                          </a>
                          <div
                            className="z-60 absolute left-1/2 -translate-x-1/2 -top-9 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none
                            bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black px-3 py-1.5 text-xs font-medium rounded-lg shadow-md whitespace-nowrap"
                          >
                            GitHub
                          </div>
                        </div>
                        <div className="relative group">
                          <a
                            href="https://www.linkedin.com/in/alessandro-argenziano/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-secondary/50 hover:bg-secondary border border-border transition-all duration-200 group"
                            aria-label="LinkedIn Profile"
                          >
                            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                          </a>
                          <div
                            className="z-60 absolute left-1/2 -translate-x-1/2 -top-9 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none
                            bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black px-3 py-1.5 text-xs font-medium rounded-lg shadow-md whitespace-nowrap"
                          >
                            LinkedIn
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
