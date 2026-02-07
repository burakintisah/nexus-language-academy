import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import FloatingShapes from "@/components/ui/FloatingShapes";
import SectionDivider from "@/components/ui/SectionDivider";
import CTABand from "@/components/landing/CTABand";
import PlacementTestForm from "@/components/placement-test/PlacementTestForm";
import placementTest from "@/data/tr/placement-test.json";

export const metadata: Metadata = {
  title: "Seviye Tespit Sınavı",
  description:
    "Ücretsiz online İngilizce seviye tespit sınavı. Çocuğunuzun İngilizce seviyesini belirleyin ve en uygun programı keşfedin.",
  openGraph: {
    title: "Ücretsiz Seviye Tespit Sınavı | Nexus Language Academy",
    description:
      "Online İngilizce seviye tespit sınavımızla çocuğunuzun seviyesini öğrenin.",
  },
};

export default function PlacementTestPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <FloatingShapes variant="hero" />
        <Container>
          <SectionTitle
            title={placementTest.pageTitle}
            subtitle={placementTest.pageSubtitle}
          />

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-5">
              {/* Left: Info */}
              <div className="lg:col-span-2">
                <p className="mb-6 text-text-muted">{placementTest.intro}</p>

                <div className="space-y-3">
                  {placementTest.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-text-dark">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-3">
                <Card>
                  <PlacementTestForm />
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <SectionDivider topColor="#ffffff" bottomColor="#2EAF4B" />
      <CTABand />
    </>
  );
}
