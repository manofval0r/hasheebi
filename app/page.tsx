import { Hero } from "@/components/sections/Hero";
import { CoreValues } from "@/components/sections/CoreValues";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreValues />
      <ServicesOverview />
      <FeaturedProjects />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
