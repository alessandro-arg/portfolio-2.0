import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Check } from "lucide-react";

interface Goal {
  id: string;
  title: string;
  description?: string;
  images?: string[];
  isChecked: boolean;
  hasImage: boolean;
}

const goals: Goal[] = [
  {
    id: "skydive",
    title: "Go skydiving",
    description: "Jump from 4,000m and savor that 60s freefall.",
    images: [],
    isChecked: false,
    hasImage: true,
  },
  {
    id: "surf-portugal",
    title: "Learn to surf in Portugal",
    description: "A week in Ericeira catching green waves.",
    images: ["https://images.unsplash.com/photo-1502786129293-79981df4e689"],
    isChecked: false,
    hasImage: true,
  },
  {
    id: "aurora",
    title: "See the Northern Lights",
    description: "Chase auroras around Tromsø in winter.",
    images: [],
    isChecked: true,
    hasImage: false,
  },
  {
    id: "tmb",
    title: "Hike the Tour du Mont Blanc",
    description: "10 days around Mont Blanc with huts and fondue.",
    images: [],
    isChecked: false,
    hasImage: true,
  },
  {
    id: "iceland-roadtrip",
    title: "Drive Iceland's Ring Road",
    description: "7–10 days, waterfalls, black sand beaches & hot springs.",
    images: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e"],
    isChecked: false,
    hasImage: true,
  },
  {
    id: "red-sea-scuba",
    title: "Scuba dive the Red Sea",
    description: "Get Advanced Open Water and dive Ras Mohammed.",
    images: [],
    isChecked: false,
    hasImage: false,
  },
  {
    id: "kyoto-sakura",
    title: "Cherry blossom season in Kyoto",
    description: "Philosopher's Path at full bloom.",
    images: ["https://images.unsplash.com/photo-1503264116251-35a269479413"],
    isChecked: false,
    hasImage: true,
  },
  {
    id: "cappadocia-balloon",
    title: "Hot air balloon over Cappadocia",
    description: "Sunrise flight over fairy chimneys.",
    images: [],
    isChecked: true,
    hasImage: false,
  },
  {
    id: "publish-story",
    title: "Publish a short story",
    description: "Submit to a lit mag and get one acceptance.",
    images: [],
    isChecked: false,
    hasImage: false,
  },
  {
    id: "half-marathon",
    title: "Run a half-marathon",
    description: "Finish sub 2 hours — steady pacing and vibes only.",
    images: [],
    isChecked: false,
    hasImage: true,
  },
];

export default function BucketList() {
  return (
    <main className="px-4 py-16 pt-36 md:px-1">
      <h2 className="relative z-2 text-balance font-medium text-5xl tracking-tight sm:text-5xl md:mb-36 md:text-6xl text-center max-w-xl mx-auto mb-20 [text-shadow:rgba(255,255,255,0.05)_0_4px_8px,rgba(255,255,255,0.25)_0_8px_30px]">
        <p className="mb-3 font-mono font-normal text-black/80 text-xs uppercase tracking-widest md:text-sm dark:text-white/70">
          The bucket list
        </p>
        <span className="font-instrument">
          <span className="md:text-5xl">Things I'll do </span>
          <br />
          <AnimatedGradientText
            colorFrom="#4aeedd"
            colorTo="#16b1ff"
            className="tracking-normal italic md:text-5xl w-full"
          >
            at least once
          </AnimatedGradientText>
        </span>
      </h2>
      <div className="mx-auto max-w-xl">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="relative flex items-start gap-4 border-white-3 border-b py-5 dark:border-white/5"
          >
            <div
              className={[
                "mt-1 size-5 shrink-0 rounded border",
                "border-white-3 dark:border-white/20",
                goal.isChecked
                  ? "bg-gradient-to-br from-[#3ebeb1] to-[#1ba0e2] text-white"
                  : "",
                "grid place-items-center",
              ].join(" ")}
              aria-checked={goal.isChecked}
              role="checkbox"
            >
              {goal.isChecked && <Check className="h-3.5 w-3.5" />}
            </div>
            <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
              <div className="flex flex-col flex-1">
                <h2 className="text-base md:text-xl">{goal.title}</h2>
                {goal.description && (
                  <p className="text-black/75 text-sm dark:text-white/60">
                    {goal.description}
                  </p>
                )}
              </div>
            </div>

            {goal.hasImage && goal.images && goal.images.length > 0 && (
              <div className="absolute right-2 flex top-6 min-h-10">
                {goal.images.map((src, idx) => (
                  <div
                    key={`${goal.id}-img-${idx}`}
                    className="overflow-hidden rounded-lg border border-white/10"
                  >
                    <img
                      src={src}
                      alt={`${goal.title} ${idx + 1}`}
                      className="h-10 w-10 object-cover md:h-10"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
