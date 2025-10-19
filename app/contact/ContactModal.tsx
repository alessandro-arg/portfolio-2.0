"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Mail,
  User,
  MessageSquare,
  Github,
  Linkedin,
} from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // ---- NEW: detect short screens to enter "compact" mode ----
  const [isShort, setIsShort] = useState(false);
  const [isEvenShorter, setIsEvenShorter] = useState(false);
  useEffect(() => {
    const check = () => {
      // Tweak threshold to taste; 640 is a good starting point for "short"
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

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:your.email@example.com";
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

          {/* Modal wrapper (centers panel) */}
          <div className="fixed inset-0 z-50 flex items-center justify-center sm:p-4 pointer-events-none">
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 16 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className={[
                // Mobile: full-screen overlay
                "pointer-events-auto relative w-dvw h-dvh rounded-none",
                // Desktop: classic dialog card
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

              {/* Content container:
                  - Mobile: center content with grid
                  - Desktop: normal flow
              */}
              <div
                className={[
                  "relative",
                  "p-5 sm:p-8",
                  "h-full sm:h-auto",
                  "grid place-items-center sm:block",
                ].join(" ")}
              >
                {/* Inner content box to constrain width on mobile while centered */}
                <div className="w-full max-w-md sm:max-w-none sm:w-auto">
                  {/* Header */}
                  <div className="mb-5 sm:mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 }}
                      className="flex items-center gap-2.5 mb-3"
                    >
                      {/* Available Badge – keep it small on mobile */}
                      <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.85, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="w-2 h-2 rounded-full bg-emerald-500"
                        />
                        <span className="text-[11px] sm:text-xs font-medium text-emerald-600 dark:text-emerald-400">
                          Available for new opportunities
                        </span>
                      </div>
                    </motion.div>

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

                  {/* Form */}
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-5"
                  >
                    {/* Name */}
                    <motion.div
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 bg-secondary/50 border ${
                            errors.name ? "border-destructive" : "border-border"
                          } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200`}
                          placeholder="John Doe"
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.name}
                        </p>
                      )}
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 bg-secondary/50 border ${
                            errors.email
                              ? "border-destructive"
                              : "border-border"
                          } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200`}
                          placeholder="john@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.email}
                        </p>
                      )}
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your Message
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none">
                          <MessageSquare className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className={`w-full pl-10 pr-4 py-3 bg-secondary/50 border ${
                            errors.message
                              ? "border-destructive"
                              : "border-border"
                          } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 resize-none`}
                          placeholder="Tell me about your project..."
                        />
                      </div>
                      {errors.message && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.message}
                        </p>
                      )}
                    </motion.div>

                    {/* Submit */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                      className="pt-1.5 sm:pt-2"
                    >
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                          </>
                        )}
                      </button>
                    </motion.div>
                  </form>

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

                  <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row justify-between items-center">
                    {/* Direct Email Button */}
                    {!isShort && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                      >
                        <button
                          onClick={handleEmailClick}
                          className="w-fit bg-secondary/50 hover:bg-secondary border border-border py-3 px-4 rounded-lg transition-all duration-200 group cursor-pointer"
                        >
                          <div className="flex items-center justify-center gap-2">
                            <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
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

                    {/* Socials */}
                    {!isEvenShorter && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center justify-center gap-3 sm:gap-4"
                      >
                        <a
                          href="https://github.com/alessandro-arg"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-secondary/50 hover:bg-secondary border border-border transition-all duration-200 group"
                          aria-label="GitHub Profile"
                        >
                          <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/alessandro-argenziano/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-secondary/50 hover:bg-secondary border border-border transition-all duration-200 group"
                          aria-label="LinkedIn Profile"
                        >
                          <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                        </a>
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
