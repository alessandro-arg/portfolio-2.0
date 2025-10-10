import { Globe } from "../ui/globe";
import { useTheme } from "next-themes";

export default function GlobeCard() {
  const { theme } = useTheme();

  return (
    <div className="flex h-full flex-col gap-10 py-12">
      <h3 className="w-full bg-linear-to-b from-black to-[#83d6ff90] bg-clip-text px-4 text-center text-3xl font-semibold tracking-normal text-transparent select-none dark:from-white">
        I'm very flexible with <br /> time zone comunications
      </h3>
      <div className="absolute inset-x-0 size-full flex items-center -bottom-55">
        <Globe
          defaultCountryKey="germany"
          height="55vh"
          horizontalOnly
          isDark={theme === "dark"}
          colors={
            theme === "dark"
              ? {
                  base: [0.9, 0.95, 1.0],
                  glow: [0.85, 1.05, 1.28],
                  marker: [0.1, 0.6, 1.0],
                }
              : {
                  base: [0.92, 0.94, 0.96],
                  glow: [1.08, 1.16, 1.3],
                  marker: [0.25, 0.55, 0.95],
                }
          }
        />
      </div>
    </div>
  );
}
