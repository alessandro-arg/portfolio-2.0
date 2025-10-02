import { Globe } from "../ui/globe";

export default function GlobeCard() {
  return (
    <div className="flex h-full flex-col gap-10 py-12">
      <h3 className="w-full bg-linear-to-b from-black to-[#83d6ff90] bg-clip-text px-4 text-center text-3xl font-semibold tracking-normal text-transparent select-none dark:from-white">
        I'm very flexible with <br /> time zone comunications
      </h3>
      <div className="absolute inset-x-0 size-full flex items-center -bottom-55">
        <Globe
          defaultCityKey="germany"
          height="55vh"
          horizontalOnly
          colors={{
            base: [0.95, 0.98, 1.0],
            glow: [1.15, 1.2, 1.35],
            marker: [0.1, 0.6, 1.0],
          }}
        />
      </div>
    </div>
  );
}
