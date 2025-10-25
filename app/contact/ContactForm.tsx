"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, User, Send } from "lucide-react";

type ContactFormProps = {
  className?: string;
  onSubmitted?: () => void;
};

export const MESSAGE_LIMIT = 100;

export default function ContactForm({
  className,
  onSubmitted,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // --- NAME: only letters + spaces, min 3 letters (spaces don't count)
    const name = formData.name.trim();
    const onlyLettersAndSpaces = /^[\p{L}\s]+$/u.test(name); // Unicode letters + spaces
    const letterCount = (name.match(/\p{L}/gu) || []).length; // count letters only

    if (!name) {
      newErrors.name = "Name is required";
    } else if (!onlyLettersAndSpaces) {
      newErrors.name = "Only letters and spaces are allowed";
    } else if (letterCount < 3) {
      newErrors.name = "Name must have at least 3 letters";
    }

    // --- EMAIL: custom regex; requires @, something after @, and .something
    const email = formData.email.trim();
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // simple & robust for your rule
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // --- MESSAGE: unchanged
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    // your async submit logic here:
    await fetch("/api/emails", { method: "POST" });
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
    onSubmitted?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={["space-y-3 sm:space-y-5", className]
        .filter(Boolean)
        .join(" ")}
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
          Name
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
            autoComplete="name"
            className={`w-full pl-10 pr-4 py-3 bg-secondary/50 border ${
              errors.name ? "border-destructive" : "border-border"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200`}
            placeholder="Your name"
          />
        </div>
        <div className="w-full h-5 mt-1">
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name}</p>
          )}
        </div>
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
          Email
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
            inputMode="email"
            autoComplete="email"
            onChange={handleChange}
            className={`w-full pl-10 pr-4 py-3 bg-secondary/50 border ${
              errors.email ? "border-destructive" : "border-border"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200`}
            placeholder="email@example.com"
          />
        </div>
        <div className="w-full h-5 mt-1">
          {errors.email && (
            <p className=" text-sm text-destructive">{errors.email}</p>
          )}
        </div>
      </motion.div>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="mb-2 flex items-center justify-between">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground"
          >
            Message
          </label>
          <span
            id="message-counter"
            aria-live="polite"
            className={[
              "text-xs tabular-nums",
              formData.message.length >= MESSAGE_LIMIT
                ? "text-destructive"
                : formData.message.length >= MESSAGE_LIMIT - 10
                  ? "text-amber-600 dark:text-amber-400"
                  : "text-muted-foreground",
            ].join(" ")}
          >
            {formData.message.length}/{MESSAGE_LIMIT}
          </span>
        </div>

        <div className="relative">
          <div className="absolute top-4 left-3 pointer-events-none">
            <MessageSquare className="w-5 h-5 text-muted-foreground" />
          </div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            maxLength={MESSAGE_LIMIT}
            aria-describedby="message-counter"
            className={`w-full pl-10 pr-4 py-3 bg-secondary/50 border ${
              errors.message ? "border-destructive" : "border-border"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 resize-none`}
            placeholder="What would you like to discuss?"
          />
        </div>

        <div className="w-full h-5 mt-1">
          {errors.message && (
            <p className="text-sm text-destructive">{errors.message}</p>
          )}
        </div>
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
          className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap text-md disabled:pointer-events-none disabled:opacity-50 shadow-xs py-3 px-6 rounded-md group relative w-full overflow-hidden bg-[#16b1ff95] hover:bg-[#16b1ff] font-normal text-white transition-all duration-300"
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
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
  );
}
