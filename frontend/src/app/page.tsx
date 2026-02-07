import HeroSection from "@/components/landing/HeroSection";
import CourseSummary from "@/components/landing/CourseSummary";
import WhyNexus from "@/components/landing/WhyNexus";
import CTABand from "@/components/landing/CTABand";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyNexus />
      <CourseSummary />
      <CTABand />
    </>
  );
}
