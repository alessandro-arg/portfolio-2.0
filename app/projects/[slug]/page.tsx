import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsData } from "../projects.data";
import { ProjectTOC, type TocItem } from "../_components/ProjectTOC";
import { TechBadge } from "../_components/TechBadge";
import ContactSection from "@/app/contact/ContactSection";
import { ProjectDate } from "../_components/ProjectDate";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectsData.filter((p) => p.slug).map((p) => ({ slug: p.slug! }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.title} - Projects`,
    description: project.smallDescription ?? project.description?.slice(0, 140),
    openGraph: {
      title: project.title,
      description: project.smallDescription ?? project.description,
      images: project.src ? [{ url: project.src }] : undefined,
      type: "website",
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) notFound();

  // Build the same sections as your reference
  const toc: TocItem[] = [
    { id: "what-is", title: "🔍 What is " + project.title + "?", depth: 2 },
    { id: "key-features", title: "🧩 Key Features", depth: 2 },
    { id: "why-built", title: "📌 Why I Built This", depth: 2 },
    { id: "use-cases", title: "💡 Use Cases", depth: 2 },
    { id: "tech-stack-overview", title: "🧪 Tech Stack Overview", depth: 2 },
    { id: "getting-started", title: "⚙️ Getting Started", depth: 2 },
    // (example nested steps)
    { id: "clone-the-repository", title: "Clone the repository", depth: 3 },
    { id: "install-dependencies", title: "Install dependencies", depth: 3 },
    { id: "build-and-run-locally", title: "Build and run locally", depth: 3 },
    {
      id: "challenges-learnings",
      title: "🧠 Challenges & Learnings",
      depth: 2,
    },
    { id: "see-it-in-action", title: "📸 See it in Action", depth: 2 },
  ];

  const liveLink =
    project.href && !project.href.startsWith("/projects")
      ? project.href
      : undefined;

  const dateISO =
    project.date ?? (project.year ? `${project.year}-01-01` : null);

  return (
    <main className="relative mx-auto w-full">
      <div className="absolute inset-0 z-[-1] h-[300px] w-full overflow-hidden [mask-image:linear-gradient(rgb(0,0,0)_40%,rgba(0,0,0,0)_100%)] opacity-100">
        <img
          src={project.src}
          alt={project.title}
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="halftone pointer-events-none absolute inset-0 z-[-1] h-[300px] w-full object-cover mix-blend-overlay grayscale select-none"
        />
      </div>
      <div className="relative pt-60"></div>

      <main
        id="nd-docs-layout"
        className="flex flex-1 flex-col transition-[margin] xl:[--fd-toc-width:286px]"
        style={{ marginInlineStart: "var(--fd-sidebar-width)" }}
      >
        <div
          id="nd-page"
          className="flex flex-1 mx-auto w-full"
          style={{
            paddingTop: "calc(var(--fd-nav-height) + var(--fd-tocnav-height))",
            maxWidth:
              "min(var(--fd-page-width),calc(var(--fd-layout-width) - var(--fd-sidebar-width)))",
          }}
        >
          <article className="flex min-w-0 w-full flex-col gap-4 px-4 pt-8 md:px-6 md:mx-auto xl:pt-12 xl:px-12 mx-auto prose-lg prose-a:underline-offset-4 prose-a:decoration-blue-500">
            {/* HEADER */}
            <header className="flex flex-col gap-y-4">
              <div className="flex flex-col justify-between gap-y-4 md:flex-row">
                <h1 className="font-instrument text-4xl font-bold tracking-wide md:text-5xl">
                  {project.title}
                </h1>

                <div className="flex w-fit gap-x-2 max-sm:flex-row-reverse md:text-sm">
                  {/* GitHub icon button, if provided */}
                  {project.github ? (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.github}
                    >
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center border text-sm whitespace-nowrap shrink-0 gap-2 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-black dark:text-white font-mono border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2 hover:bg-white-3 size-10 rounded-full p-2 dark:hover:bg-neutral-800"
                        aria-label="GitHub"
                        title="GitHub"
                      >
                        {/* lucide: github (outline-ish) */}
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                      </span>
                    </a>
                  ) : null}

                  {/* “Check it out” button if liveLink exists */}
                  {project.liveLink ? (
                    <a
                      href={liveLink}
                      referrerPolicy="no-referrer"
                      target="_blank"
                      className="group relative flex w-fit items-center justify-between h-9 rounded-full bg-neutral-900 text-white opacity-90 dark:bg-white dark:text-black cursor-pointer"
                    >
                      <span className="pl-4 text-base font-light">
                        Check it out
                      </span>
                      <div className="relative mr-1 size-9 overflow-hidden rounded-full bg-transparent">
                        <div className="absolute top-[0.85em] left-[-0.1em] grid size-full place-content-center transition-all duration-200 group-hover:translate-x-4 group-hover:-translate-y-5">
                          {/* lucide: arrow-up-right x2 */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-up-right size-5"
                            aria-hidden="true"
                          >
                            <path d="M7 7h10v10"></path>
                            <path d="M7 17 17 7"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-up-right mb-1 size-5 -translate-x-4"
                            aria-hidden="true"
                          >
                            <path d="M7 7h10v10"></path>
                            <path d="M7 17 17 7"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  ) : null}
                </div>
              </div>

              <p className="text-sm text-neutral-600 md:text-base dark:text-neutral-400">
                {project.smallDescription || project.description}
              </p>

              {/* Tech badges */}
              {project.technologies?.length ? (
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs md:text-sm">
                  {project.technologies.map((t, i) => (
                    <TechBadge key={`${t.name}-${i}`}>{t.name}</TechBadge>
                  ))}
                </div>
              ) : null}

              {/* Date (if you only have year, still show it) */}
              {dateISO && <ProjectDate dateISO={dateISO} />}
            </header>

            {/* Content sections */}
            <div className="prose">
              {/* Small callout (optional) */}
              <div
                className="flex gap-2 my-4 rounded-xl border bg-fd-card p-3 ps-1 text-sm text-fd-card-foreground shadow-md"
                style={{
                  ["--callout-color" as any]:
                    "var(--color-fd-info, var(--color-fd-muted))",
                }}
              >
                <div
                  role="none"
                  className="w-0.5 bg-(--callout-color)/50 rounded-sm"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide size-5 -me-0.5 fill-(--callout-color) text-fd-card"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
                <div className="flex flex-col gap-2 min-w-0 flex-1">
                  <p className="font-medium !my-0">{project.calloutTitle}</p>
                  <div className="text-fd-muted-foreground prose-no-margin empty:hidden">
                    <p>{project.calloutDescription}</p>
                  </div>
                </div>
              </div>

              {/* Big hero image */}
              {project.src ? (
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl md:p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={`${project.title} Screenshot`}
                    loading="lazy"
                    width={1602}
                    height={967}
                    decoding="async"
                    className="!my-0 rounded-[8px] lg:my-0"
                    src={project.src}
                  />
                </div>
              ) : null}

              <h2
                id="what-is"
                className="flex scroll-m-28 flex-row items-center gap-2"
              >
                <a data-card href="#-what-is" className="peer">
                  🔍 What is {project.title}?
                </a>
              </h2>
              <p>{project.description}</p>

              {project.points?.length ? (
                <>
                  <h2
                    id="key-features"
                    className="flex scroll-m-28 flex-row items-center gap-2"
                  >
                    <a data-card href="#-key-features" className="peer">
                      🧩 Key Features
                    </a>
                  </h2>

                  {/* Accordion-ish look (static, matches the style) */}
                  <div
                    className="divide-y divide-fd-border overflow-hidden rounded-lg border bg-fd-card"
                    data-orientation="vertical"
                  >
                    {project.points.map((pt, i) => (
                      <div
                        key={i}
                        data-state="closed"
                        data-orientation="vertical"
                        className="scroll-m-24"
                      >
                        <h3 className="not-prose flex flex-row items-center text-fd-card-foreground font-medium has-focus-visible:bg-fd-accent">
                          <button
                            type="button"
                            className="group flex flex-1 items-center gap-2 px-3 py-2.5 text-start focus-visible:outline-none"
                          >
                            {/* chevron */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide size-4 shrink-0 text-fd-muted-foreground transition-transform duration-200"
                            >
                              <path d="m9 18 6-6-6-6"></path>
                            </svg>
                            {pt}
                          </button>
                        </h3>
                        <div data-state="closed" hidden />
                      </div>
                    ))}
                  </div>
                </>
              ) : null}

              <h2
                id="why-built"
                className="flex scroll-m-28 flex-row items-center gap-2"
              >
                <a data-card href="#-why-i-built-this" className="peer">
                  📌 Why I Built This
                </a>
              </h2>
              <p>
                A short paragraph on the motivation behind{" "}
                <strong>{project.title}</strong>. (You can add a new field to
                your data later and render it here.)
              </p>

              <h2
                id="use-cases"
                className="flex scroll-m-28 flex-row items-center gap-2"
              >
                <a data-card href="#-use-cases" className="peer">
                  💡 Use Cases
                </a>
              </h2>
              <ul className="list-disc ps-6">
                <li>Showcase features to recruiters or clients</li>
                <li>Share visuals in social posts or blog write-ups</li>
                <li>Use screenshots for case studies and decks</li>
              </ul>

              <h2
                id="tech-stack-overview"
                className="flex scroll-m-28 flex-row items-center gap-2"
              >
                <a data-card href="#-tech-stack-overview" className="peer">
                  🧪 Tech Stack Overview
                </a>
              </h2>
              {project.technologies?.length ? (
                <ul>
                  {project.technologies.map((t, i) => (
                    <li key={i}>
                      <strong>{t.name}</strong>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Tech stack details coming soon.</p>
              )}

              <h2
                id="getting-started"
                className="flex scroll-m-28 flex-row items-center gap-2"
              >
                <a data-card href="#️-getting-started" className="peer">
                  ⚙️ Getting Started
                </a>
              </h2>

              {/* Steps look */}
              <div className="fd-steps">
                <div className="fd-step">
                  <h3
                    id="clone-the-repository"
                    className="flex scroll-m-28 flex-row items-center gap-2"
                  >
                    <a data-card href="#clone-the-repository" className="peer">
                      Clone the repository
                    </a>
                  </h3>
                  <figure
                    dir="ltr"
                    className="my-4 rounded-xl bg-fd-card p-1 shiki relative border outline-none not-prose overflow-hidden text-sm"
                  >
                    <div className="flex text-fd-muted-foreground items-center gap-2 ps-3 h-9.5">
                      <div className="[&_svg]:size-3.5">
                        <svg viewBox="0 0 24 24">
                          <path
                            d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <figcaption className="flex-1 truncate">
                        Terminal
                      </figcaption>
                    </div>
                    <div className="bg-fd-secondary rounded-lg border text-[13px] py-3.5 overflow-auto fd-scroll-container">
                      <pre className="min-w-full w-max *:flex *:flex-col">
                        <code>
                          <span className="line">
                            git clone{" "}
                            {project.github ?? "https://example.com/repo.git"}{" "}
                            && cd {project.slug}
                          </span>
                        </code>
                      </pre>
                    </div>
                  </figure>
                </div>

                <div className="fd-step">
                  <h3
                    id="install-dependencies"
                    className="flex scroll-m-28 flex-row items-center gap-2"
                  >
                    <a data-card href="#install-dependencies" className="peer">
                      Install dependencies
                    </a>
                  </h3>
                  <figure
                    dir="ltr"
                    className="my-4 rounded-xl bg-fd-card p-1 shiki relative border outline-none not-prose overflow-hidden text-sm"
                  >
                    <div className="bg-fd-secondary rounded-lg border text-[13px] py-3.5 overflow-auto fd-scroll-container">
                      <pre className="min-w-full w-max *:flex *:flex-col">
                        <code>
                          <span className="line">npm install</span>
                        </code>
                      </pre>
                    </div>
                  </figure>
                </div>

                <div className="fd-step">
                  <h3
                    id="build-and-run-locally"
                    className="flex scroll-m-28 flex-row items-center gap-2"
                  >
                    <a data-card href="#build-and-run-locally" className="peer">
                      Build and run locally
                    </a>
                  </h3>
                  <figure
                    dir="ltr"
                    className="my-4 rounded-xl bg-fd-card p-1 shiki relative border outline-none not-prose overflow-hidden text-sm"
                  >
                    <div className="bg-fd-secondary rounded-lg border text-[13px] py-3.5 overflow-auto fd-scroll-container">
                      <pre className="min-w-full w-max *:flex *:flex-col">
                        <code>
                          <span className="line">
                            npm run build && npm run serve
                          </span>
                        </code>
                      </pre>
                    </div>
                  </figure>
                </div>
              </div>

              <h2
                id="challenges-learnings"
                className="flex scroll-m-28 flex-row items-center gap-2"
              >
                <a data-card href="#-challenges--learnings" className="peer">
                  🧠 Challenges &amp; Learnings
                </a>
              </h2>
              <p>
                Add a few lessons you learned while building{" "}
                <strong>{project.title}</strong>.
              </p>

              <h2
                id="see-it-in-action"
                className="flex scroll-m-28 flex-row items-center gap-2"
              >
                <a data-card href="#-see-it-in-action" className="peer">
                  📸 See it in Action
                </a>
              </h2>
              <ul>
                {liveLink ? (
                  <li>
                    🌍{" "}
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Live App
                    </a>
                  </li>
                ) : null}
                {project.github ? (
                  <li>
                    🛠{" "}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      GitHub Repo
                    </a>
                  </li>
                ) : null}
              </ul>

              <p>
                Want to chat about this project?{" "}
                <a
                  href="mailto:hello@example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Let’s chat.
                </a>
              </p>
            </div>

            <div role="none" className="flex-1" />
            <div className="flex flex-row flex-wrap items-center justify-between gap-4 empty:hidden" />
          </article>

          {/* Sticky TOC (right) */}
          <ProjectTOC items={toc} />
        </div>
      </main>
      <ContactSection />
    </main>
  );
}
