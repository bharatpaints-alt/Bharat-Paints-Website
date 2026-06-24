import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { DivisionsGrid } from "@/components/sections/DivisionsGrid";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AIPaintExpertSection } from "@/components/sections/AIPaintExpertSection";
import { ProjectsGallerySection } from "@/components/sections/ProjectsGallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <DivisionsGrid />
      <BrandsSection />
      <ProcessSection />
      <AIPaintExpertSection />
      <ProjectsGallerySection />
      <TestimonialsSection />
      <ContactFormSection />
    </>
  );
}
