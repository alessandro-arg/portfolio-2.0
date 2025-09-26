import Hero from "@/components/sections/Hero";
import BentoGrid from "@/components/sections/BentoGrid";
// import ProjectsGrid from "@/components/sections/ProjectsGrid";

export default function HomePage() {
  return (
    <main className="min-h-[100vh]">
      <Hero />
      <BentoGrid />
      {/* <ProjectsGrid /> */}
    </main>
  );
}
