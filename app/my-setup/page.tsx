import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import ContactSection from "../contact/ContactSection";
import Image from "next/image";
import BackgroundFade from "@/components/ui/background-fade";

interface SetupIcon {
  title: string;
  href: string;
  src: string;
}

const tools: SetupIcon[] = [
  {
    title: "VSCode",
    href: "https://code.visualstudio.com/",
    src: "/setup/vscode_logo.png",
  },
  {
    title: "GitHub",
    href: "https://github.com",
    src: "/setup/github_logo.png",
  },
  {
    title: "Spotify",
    href: "https://spotify.com",
    src: "/setup/spotify_logo.png",
  },
  {
    title: "Notion",
    href: "https://notion.com",
    src: "/setup/notion_logo.png",
  },
];

export default function MySetup() {
  return (
    <>
      <BackgroundFade />
      <main className="px-4 py-16 pt-36 md:px-1 container">
        <h2 className="relative z-2 mb-12 text-balance font-medium text-5xl tracking-tight sm:text-5xl md:mb-20 md:text-6xl text-center max-w-xl mx-auto [text-shadow:rgba(255,255,255,0.05)_0_4px_8px,rgba(255,255,255,0.25)_0_8px_30px]">
          <p className="mb-3 font-mono font-normal text-black/80 text-xs uppercase tracking-widest md:text-sm dark:text-white/70">
            My tools
          </p>
          <span className="font-instrument">
            <span className="md:text-6xl">The </span>
            <AnimatedGradientText
              colorFrom="#4aeedd"
              colorTo="#16b1ff"
              className="tracking-normal italic w-full"
            >
              setup
            </AnimatedGradientText>
          </span>
        </h2>
        <div className="mx-auto my-20 max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border-1 border-neutral-200/50 shadow-lg dark:border-white/10">
            <Image
              src="/images/setup.webp"
              alt="Setup by u/dee306"
              width={800}
              height={400}
              className="w-full h-auto object-cover"
              sizes="90vw"
              priority
            />
          </div>
        </div>
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-left font-bold text-2xl text-neutral-900 dark:text-neutral-100">
            Software & Tools
          </h2>
          <div className="relative flex flex-wrap items-center justify-center gap-x-2 gap-y-4 sm:gap-x-4 md:gap-x-6 lg:gap-10">
            {tools.map((tool, i) => (
              <a
                key={i}
                className="group hover:-translate-y-2 no-underline transition-all duration-500"
                href={tool.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="group inline-block text-center">
                  <div className="h-20 w-20 sm:h-28 sm:w-28 rounded-[20px] border-2 p-2 transition-all duration-300 group-hover:border-indigo-400 group-hover:shadow-lg dark:group-hover:border-indigo-500">
                    <div className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E] shadow-[inset_0px_2px_1.5px_0px_rgba(165,174,184,0.32)]">
                      <Image
                        alt={tool.title}
                        src={tool.src}
                        priority
                        width={40}
                        height={40}
                        className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-gray-500 text-sm">{tool.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <ContactSection mtClassName="mt-20 sm:mt-40" />
    </>
  );
}
