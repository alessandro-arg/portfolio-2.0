"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, User, Send, CircleX } from "lucide-react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

type ContactFormProps = {
  className?: string;
  onSubmitted?: () => void;
};

export const MESSAGE_LIMIT = 100;

export default function ContactForm({
  className,
  onSubmitted,
}: ContactFormProps) {
  const t = useTranslations("ContactForm");
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
      newErrors.name = t("name_required");
    } else if (!onlyLettersAndSpaces) {
      newErrors.name = t("name_letters_only");
    } else if (letterCount < 3) {
      newErrors.name = t("name_min_letters");
    }

    // --- EMAIL: custom regex; requires @, something after @, and .something
    const email = formData.email.trim();
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // simple & robust for your rule
    if (!email) {
      newErrors.email = t("email_required");
    } else if (!emailRegex.test(email)) {
      newErrors.email = t("email_invalid");
    }

    // --- MESSAGE: unchanged
    if (!formData.message.trim()) newErrors.message = t("message_required");
    else if (formData.message.trim().length < 10)
      newErrors.message = t("message_min_length");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const { error } = await res
          .json()
          .catch(() => ({ error: t("unknown_error") }));
        throw new Error(error || `Request failed with ${res.status}`);
      }
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      toast.custom(
        (id) => (
          <div className="relative rounded-md p-4 pt-3 shadow-lg bg-emerald-600 text-white min-w-50">
            <button
              onClick={() => toast.dismiss(id)}
              className="absolute top-2 right-2 p-1 rounded hover:opacity-80 focus:outline-none"
              aria-label={t("close")}
            >
              <CircleX className="w-5 h-5" />
            </button>

            <div className="pr-20">
              <div className="font-medium">{t("message_sent")}</div>
              <p className="text-sm opacity-90">
                {t("message_sent_description")}
              </p>
            </div>
          </div>
        ),
        { duration: 3000 },
      );
      onSubmitted?.();
    } catch (err) {
      console.error(err);
      toast.custom(
        (id) => (
          <div className="relative rounded-md p-4 pt-3 shadow-lg bg-red-700 text-white min-w-50">
            <button
              onClick={() => toast.dismiss(id)}
              className="absolute top-2 right-2 p-1 rounded hover:opacity-80 focus:outline-none"
              aria-label={t("close")}
            >
              <CircleX className="w-5 h-5" />
            </button>

            <div className="pr-20">
              <div className="font-medium">{t("something_went_wrong")}</div>
              <p className="text-sm opacity-90">${String(err)}</p>
            </div>
          </div>
        ),
        { duration: 3000 },
      );
    } finally {
      setIsSubmitting(false);
    }
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
          {t("name")}
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
            placeholder={t("name_placeholder")}
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
          {t("email")}
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
            placeholder={t("email_placeholder")}
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
            {t("message")}
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
            placeholder={t("message_placeholder")}
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
          disabled={isSubmitting || !formData.name}
          className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap text-md disabled:pointer-events-none disabled:opacity-50 shadow-xs py-3 px-6 rounded-md group relative w-full overflow-hidden bg-[#16b1ff95] hover:bg-[#16b1ff] font-normal text-white transition-all duration-300"
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
              />
              {t("sending")}
            </>
          ) : (
            <>
              {t("send_message")}
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </>
          )}
        </button>
      </motion.div>
    </form>
  );
}
