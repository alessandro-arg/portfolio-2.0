import ContactSection from "../contact/ContactSection";
import ProjectsSection from "./ProjectsSection";

export default function ProjectsPage() {
  return (
    <main className="relative mx-auto w-full">
      <div className="absolute inset-0 z-[-1] h-[450px] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-950 [mask-image:linear-gradient(rgb(0,0,0)_40%,rgba(0,0,0,0)_100%)] opacity-100">
        <img
          src="/images/projects-bg.svg"
          alt="projects svg"
          aria-hidden="true"
          className="absolute inset-x-0 top-10 z-[-1] mx-auto overflow-hidden opacity-70 md:w-full md:max-w-[68rem]"
        />
      </div>
      <ProjectsSection showCTA={false} />
      <ContactSection />
    </main>
  );
}
