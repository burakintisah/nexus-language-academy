import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FloatingShapes from "@/components/ui/FloatingShapes";
import SectionDivider from "@/components/ui/SectionDivider";
import CTABand from "@/components/landing/CTABand";
import PricingCard from "@/components/pricing/PricingCard";
import pricing from "@/data/tr/pricing.json";

export const metadata: Metadata = {
  title: "Ücretlendirme",
  description:
    "Nexus Language Academy ders ücretleri ve paketleri. Şeffaf fiyatlandırma ile kaliteli İngilizce eğitimi.",
  openGraph: {
    title: "Ücretlendirme | Nexus Language Academy",
    description:
      "Uygun fiyatlarla Oxford ve Cambridge materyalleriyle desteklenen İngilizce eğitimi.",
  },
};

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <FloatingShapes variant="hero" />
        <Container>
          <SectionTitle
            title={pricing.pageTitle}
            subtitle={pricing.pageSubtitle}
          />

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {pricing.packages.map((pkg) => (
              <PricingCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-text-muted">
            {pricing.note}
          </p>
        </Container>
      </section>
      <SectionDivider topColor="#ffffff" bottomColor="#2EAF4B" />
      <CTABand />
    </>
  );
}
