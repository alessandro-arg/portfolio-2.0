import Image from "next/image";
import ContactSection from "../contact/ContactSection";
import ProjectsSection from "./ProjectsSection";

export default function ProjectsPage() {
  return (
    <main className="relative mx-auto w-full">
      {/* Background wrapper */}
      <div className="absolute inset-0 z-[-1] h-[450px] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-950 [mask-image:linear-gradient(rgb(0,0,0)_40%,rgba(0,0,0,0)_100%)] opacity-100">
        <Image
          src="/images/projects-bg.svg"
          alt="Projects background"
          aria-hidden="true"
          fill
          decoding="async"
          priority
          sizes="90vw"
          className="mx-auto overflow-hidden opacity-70 h-auto md:w-full md:max-w-[68rem] object-cover object-[center_90px] lg:object-[center_120px]"
        />
      </div>

      <ProjectsSection showCTA={false} />
      <ContactSection mtClassName="mt-0 lg:mt-40" />
    </main>
  );
}
