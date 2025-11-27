"use client";

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { MapPin, Briefcase } from "lucide-react";
import TimelineRail from "./ui/timeline-rail";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative px-4 pt-24 pb-12 md:pt-32 md:pb-20"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto w-full max-w-6xl md:px-10">
        <h2 className="relative z-2 text-5xl font-medium tracking-tight sm:text-5xl md:text-6xl text-center mb-4 md:mb-0 max-w-lg mx-auto text-balance [text-shadow:rgba(255,255,255,0.05)_0px_4px_8px,rgba(255,255,255,0.25)_0px_8px_30px]">
          <p className="mb-3 font-mono text-xs font-normal tracking-widest text-black/80 uppercase md:text-sm dark:text-white/70">
            The experience
          </p>
          <span className="font-instrument">
            <span>Experience that brings </span>
            <AnimatedGradientText
              colorFrom="#4aeedd"
              colorTo="#16b1ff"
              className="pe-2 tracking-tight italic"
            >
              Ideas to life
            </AnimatedGradientText>
          </span>
        </h2>
        <div className="relative mx-auto mt-20 mb-20 max-w-7xl">
          <div className="flex w-full flex-col max-md:pl-16 md:gap-10">
            <article className="grid grid-cols-1 gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr_1fr_4fr]">
              <div className="w-full lg:max-w-sm">
                <div className="flex flex-col items-start gap-y-3 text-sm font-light">
                  <time
                    className="text-muted-foreground text-xs font-medium tracking-wide uppercase"
                    dateTime="OCT 2025 - Present"
                  >
                    JAN 2026 - Present
                  </time>
                  <div className="flex items-center gap-2">
                    <h2 className="font-instrument text-2xl font-bold text-neutral-900 md:text-3xl dark:text-neutral-100 tracking-wide">
                      GFN
                    </h2>
                  </div>
                  <div className="font-outfit flex flex-col gap-2">
                    <div className="text-muted-foreground flex items-center gap-1.5">
                      <MapPin />
                      <span className="text-sm">Donaueschingen, Germany</span>
                    </div>
                    <div className="text-muted-foreground flex items-center gap-1.5">
                      <Briefcase />
                      <span className="text-sm font-medium">Hybrid</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block"></div>
              <div className="relative w-full">
                <div className="flex flex-col gap-y-6 text-sm leading-relaxed md:text-base">
                  <header>
                    <h3 className="font-instrument text-2xl font-bold text-neutral-900 md:text-3xl dark:text-neutral-100 tracking-wide">
                      Fachinformatiker - Anwendungsentwickler &#40;IHK&#41;
                    </h3>
                  </header>
                  <section aria-label="Key achievements">
                    <ul className="flex list-none flex-col gap-y-4 text-neutral-700 dark:text-neutral-300/90">
                      <li className="leading-relaxed">
                        Die Umschulung zum{" "}
                        <span className="important-span">
                          Fachinformatiker für Anwendungsentwicklung
                        </span>{" "}
                        besteht aus Phasen mit theoretischem und praktischem
                        Unterricht sowie der Prüfung.
                        <span className="important-span"></span>
                      </li>
                      <li className="leading-relaxed">
                        Nach der Vermittlung von Grundlagenwissen und
                        allgemeinen IT-Kompetenzen werde ich alles zum
                        Schwerpunkt Anwendungsentwicklung lernen.
                      </li>
                      <li className="leading-relaxed">
                        In einem betrieblichen Praktikum als zentralem Teil der
                        Fachinformatiker-Umschulung werde ich meine gewonnenen
                        theoretischen Kenntnisse in der täglichen Arbeit
                        anwenden und so wertvolle Praxis-Erfahrung sammeln.{" "}
                      </li>
                    </ul>
                  </section>
                  <section aria-label="Technologies used">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">SQL</Badge>
                      <Badge variant="outline">Client-Systeme</Badge>
                      <Badge variant="outline">MS-Office</Badge>
                    </div>
                  </section>
                </div>
              </div>
            </article>
            <article className="grid grid-cols-1 gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr_1fr_4fr]">
              <div className="w-full lg:max-w-sm">
                <div className="flex flex-col items-start gap-y-3 text-sm font-light">
                  <time
                    className="text-muted-foreground text-xs font-medium tracking-wide uppercase"
                    dateTime="MAY 2024 - OCT 2025"
                  >
                    MAY 2024 - DEZ 2025
                  </time>
                  <div className="flex items-center gap-2">
                    <h2 className="font-instrument text-2xl font-bold text-neutral-900 md:text-3xl dark:text-neutral-100 tracking-wide">
                      Developer Akademie
                    </h2>
                  </div>
                  <div className="font-outfit flex flex-col gap-2">
                    <div className="text-muted-foreground flex items-center gap-1.5">
                      <MapPin />
                      <span className="text-sm">München, Germany</span>
                    </div>
                    <div className="text-muted-foreground flex items-center gap-1.5">
                      <Briefcase />
                      <span className="text-sm font-medium">Remote</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block"></div>
              <div className="relative w-full">
                <div className="flex flex-col gap-y-6 text-sm leading-relaxed md:text-base">
                  <header>
                    <h3 className="font-instrument text-2xl font-bold text-neutral-900 md:text-3xl dark:text-neutral-100 tracking-wide">
                      Webdevelopment - Full-stack
                    </h3>
                  </header>
                  <section aria-label="Key achievements">
                    <ul className="flex list-none flex-col gap-y-4 text-neutral-700 dark:text-neutral-300/90">
                      <li className="leading-relaxed">
                        Abschluss des anspruchsvollen Fullstack-Programms an
                        Deutschlands führender TÜV-zertifizierter Akademie für
                        Webentwicklung. Erfolgreiche Umsetzung von über 12
                        Projekten, sowohl individuell als auch im Team.{" "}
                        <span className="important-span"></span>
                      </li>
                      <li className="leading-relaxed">
                        Web-Programmierung mit{" "}
                        <span className="important-span">
                          HTML, CSS &#40;SCSS&#41;
                        </span>{" "}
                        und <span className="important-span">JavaScript</span>
                      </li>
                      <li className="leading-relaxed">
                        Web Front-End Entwicklung mit{" "}
                        <span className="important-span">Angular</span> und{" "}
                        <span className="important-span">TypeScript</span>
                      </li>
                      <li className="leading-relaxed">
                        Nutzung von Design-Frameworks wie{" "}
                        <span className="important-span">Bootstrap</span> und{" "}
                        <span className="important-span">Material Design</span>{" "}
                        und umsetzung von UI/UX-Designs{" "}
                        <span className="important-span">&#40;Figma&#41;</span>
                      </li>
                      <li className="leading-relaxed">
                        Interaktion mit Datenbanken{" "}
                        <span className="important-span">
                          &#40;Google Firebase&#41;
                        </span>{" "}
                        und integration von{" "}
                        <span className="important-span">REST APIs</span> zur
                        Datenkommunikation
                      </li>
                      <li className="leading-relaxed">
                        Versionskontrolle mit{" "}
                        <span className="important-span">
                          Git &#40;GitHub&#41;
                        </span>{" "}
                        und Agiles Projektmanagement für Entwicklung im Team
                        <span className="important-span">
                          {" "}
                          &#40;SCRUM, Kanban&#41;
                        </span>
                      </li>
                    </ul>
                  </section>
                  <section aria-label="Technologies used">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Angular</Badge>
                      <Badge variant="outline">JavaScript</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">Django</Badge>
                      <Badge variant="outline">HTML</Badge>
                      <Badge variant="outline">SCSS</Badge>
                      <Badge variant="outline">Bootstrap</Badge>
                      <Badge variant="outline">Material Design</Badge>
                      <Badge variant="outline">Figma</Badge>
                      <Badge variant="outline">Firebase</Badge>
                      <Badge variant="outline">REST APIs</Badge>
                      <Badge variant="outline">Git</Badge>
                      <Badge variant="outline">SCRUM</Badge>
                    </div>
                  </section>
                </div>
              </div>
            </article>
          </div>
          <TimelineRail />
        </div>
      </div>
    </section>
  );
}
