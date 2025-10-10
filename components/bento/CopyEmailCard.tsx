import React from "react";
import { toast } from "sonner";
import { SparklesCore } from "../ui/sparkles";
import { CheckCheck, Copy } from "lucide-react";
import { useTheme } from "next-themes";

const EMAIL = "contact@alessandro-argenziano.com";

export default function CopyEmailCard() {
  const { theme } = useTheme();
  const [copied, setCopied] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 3000);

      const body = encodeURIComponent(
        "Hi Alessandro,\n\nI’d like to connect about..."
      );
      const mailtoUrl = `mailto:${EMAIL}?body=${body}`;

      toast("Copied to clipboard!", {
        description: "Email address copied successfully.",
        action: {
          label: "Send Email",
          onClick: () =>
            window.open(mailtoUrl, "_blank", "noopener,noreferrer"),
        },
      });
    } catch {
      toast.warning("Something went wrong.");
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
            maxSize={theme === "dark" ? 1 : 3}
            particleDensity={100}
            className="w-full h-full"
            particleColor={theme === "dark" ? "#FFFFFF" : "#000000"}
          />
        </div>
        <span className="w-full bg-linear-to-b from-black to-[#83d6ff90] bg-clip-text px-4 text-center text-3xl font-semibold tracking-normal text-transparent select-none dark:from-white max-w-80 -translate-y-4 py-2">
          Let's work together on your next project
        </span>
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
            {copied ? "Copied to clipboard" : EMAIL}
          </button>
        </div>
      </div>
    </div>
  );
}
