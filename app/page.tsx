import Hero from "@/components/sections/Hero";
import Grid from "@/components/sections/Grid";
import ProjectsSection from "./projects/ProjectsSection";
import Skills from "@/components/sections/Skills";
import InfiniteRow from "@/components/sections/InfiniteRow";

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center">
      <Hero />
      <Grid />
      <ProjectsSection showCTA />
      <Skills />
      <InfiniteRow />
    </main>
  );
}
