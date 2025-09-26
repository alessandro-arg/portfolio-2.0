import Hero from "@/components/sections/Hero";
import { Grid } from "@/components/sections/Grid";
// import ProjectsGrid from "@/components/sections/ProjectsGrid";

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center">
      <Hero />
      <Grid />
      {/* <ProjectsGrid /> */}
    </main>
  );
}
