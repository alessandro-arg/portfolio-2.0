import { profile } from "@/content/profile";
import { LineDotRightHorizontal } from "lucide-react";

export function AboutSection() {
  return (
    <section aria-labelledby="about-heading">
      <header className="screen-line-bottom border-border p-4 py-2">
        <p className="mb-1 font-mono text-xs text-muted-foreground">/About</p>

        <h2 id="about-heading" className="text-3xl font-medium tracking-tight">
          A little about me
        </h2>
      </header>

      <div className="relative p-4">
        <ul className="flex max-w-2xl flex-col gap-4 text-base leading-relaxed">
          {profile.about.map((paragraph) => (
            <li
              key={paragraph}
              className="text-foreground flex gap-3 items-start sm:items-center"
            >
              <LineDotRightHorizontal
                className="size-5 shrink-0 text-muted-foreground mt-1 sm:mt-0"
                strokeWidth={0.5}
                aria-hidden="true"
              />
              <span>{paragraph}</span>
            </li>
          ))}
        </ul>

        <p
          aria-hidden="true"
          className="absolute right-4 bottom-4 hidden font-mono text-[0.6875rem] text-muted-foreground md:block"
        >
          Fig. 04
        </p>
      </div>
    </section>
  );
}
