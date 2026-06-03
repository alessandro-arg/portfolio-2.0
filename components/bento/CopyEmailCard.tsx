import React from "react";
import { toast } from "sonner";
import { SparklesCore } from "../ui/sparkles";
import { CheckCheck, Copy } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

const EMAIL = "contact@alessandro-argenziano.com";

export default function CopyEmailCard() {
  const t = useTranslations();
  const { theme } = useTheme();
  const [copied, setCopied] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 3000);

      const body = encodeURIComponent(t("Hero.email_template"));
      const mailtoUrl = `mailto:${EMAIL}?body=${body}`;

      toast(t("Hero.copied"), {
        description: t("Hero.email_copied_successfully"),
        action: {
          label: t("Hero.send_email"),
          onClick: () =>
            window.open(mailtoUrl, "_blank", "noopener,noreferrer"),
        },
      });
    } catch {
      toast.warning(t("Hero.copy_error"));
    }
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 group">
      <div className="flex h-full w-full flex-col items-center justify-center bg-cover bg-center">
        <div className="h-40 w-full bg-blue absolute inset-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.3}
            maxSize={theme === "dark" ? 0.5 : 2}
            particleDensity={50}
            className="w-full h-full"
            particleColor={theme === "dark" ? "#FFFFFF" : "#000000"}
          />
        </div>
        <h3 className="w-full bg-linear-to-b from-black to-[#5db6e3] dark:to-[#83d6ff90] bg-clip-text px-4 text-center text-3xl font-semibold tracking-normal text-transparent select-none dark:from-white max-w-80 -translate-y-4 py-2">
          {t("BentoGrid.copy_email_card")}
        </h3>
        <div className="relative flex">
          <button
            type="button"
            onClick={handleCopy}
            className="items-center gap-2 py-2 text-base font-light text-black dark:text-white/75 outline-hidden transition-all duration-300 cursor-pointer hover:text-black/60 dark:hover:text-white/90 flex w-full justify-center rounded-sm dark:bg-white/10 bg-neutral-200 px-4 border dark:border-white/10 border-black/10 translate-y-4"
            aria-live="polite"
          >
            {copied ? (
              <CheckCheck className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Copy className="h-5 w-5" aria-hidden="true" />
            )}
            {copied ? (
              t("Hero.copied")
            ) : (
              <>
                <span className="hidden md:inline">{EMAIL}</span>
                <span className="inline md:hidden">
                  {t("BentoGrid.copy_email_card_sm")}
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
