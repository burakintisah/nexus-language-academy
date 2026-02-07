import HeroSection from "@/components/landing/HeroSection";
import CourseSummary from "@/components/landing/CourseSummary";
import WhyNexus from "@/components/landing/WhyNexus";
import CTABand from "@/components/landing/CTABand";
import SectionDivider from "@/components/ui/SectionDivider";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SectionDivider topColor="#ffffff" bottomColor="#FFF9F0" />
      <WhyNexus />
      <SectionDivider topColor="#FFF9F0" bottomColor="#ffffff" flip />
      <CourseSummary />
      <SectionDivider topColor="#ffffff" bottomColor="#2EAF4B" />
      <CTABand />
    </>
  );
}
