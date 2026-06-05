import Hero from "@/components/sections/Hero";
import Grid from "@/components/sections/Grid";
import ProjectsSection from "./projects/ProjectsSection";
import Skills from "@/components/sections/Skills";
import InfiniteRow from "@/components/sections/InfiniteRow";
import AboutSection from "./about/AboutSection";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "./contact/ContactSection";
import { getAllPosts } from "@/lib/blog";
import { getLocale } from "next-intl/server";

export default async function HomePage() {
  const locale = await getLocale();
  const posts = getAllPosts(locale).slice(0, 2);

  return (
    <main className="relative flex flex-col items-center justify-center">
      <Hero />
      <Grid posts={posts} />
      <ProjectsSection showCTA />
      <Skills />
      <InfiniteRow />
      <AboutSection />
      <Testimonials />
      <Contact />
    </main>
  );
}
