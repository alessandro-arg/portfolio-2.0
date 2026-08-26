import { StripeDivider } from "@/components/layout/stripe-divider";
import { GitHubContributionsSection } from "@/components/sections/github-contributions-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OverviewSection } from "@/components/sections/overview-section";
import { ProjectSection } from "@/components/sections/projects-section";
import { AboutSection } from "@/components/sections/about-section";
import { SocialLinks } from "@/components/sections/social-links";
import { StackSection } from "@/components/sections/stack-section";
import { ExperienceSection } from "@/components/sections/experience-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StripeDivider />
      <OverviewSection />
      <SocialLinks />
      <GitHubContributionsSection />
      <StripeDivider />
      <ProjectSection />
      <StripeDivider />
      <AboutSection />
      <StripeDivider />
      <StackSection />
      <StripeDivider />
      <ExperienceSection />
      <StripeDivider />
    </>
  );
}
