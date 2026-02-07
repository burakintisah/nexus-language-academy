import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FloatingShapes from "@/components/ui/FloatingShapes";
import SectionDivider from "@/components/ui/SectionDivider";
import CTABand from "@/components/landing/CTABand";
import LevelGrid from "@/components/courses/LevelGrid";
import courses from "@/data/tr/courses.json";

export const metadata: Metadata = {
  title: "Programlar",
  description:
    "Nexus Language Academy eğitim programları. Beginner'dan Upper-Intermediate'a kadar tüm seviyeler için İngilizce kursları.",
  openGraph: {
    title: "Programlar | Nexus Language Academy",
    description:
      "Oxford, Cambridge ve Discovery Education materyalleriyle desteklenen kapsamlı İngilizce eğitim programları.",
  },
};

export default function CoursesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <FloatingShapes variant="hero" />
        <Container>
          <SectionTitle
            title={courses.pageTitle}
            subtitle={courses.pageSubtitle}
          />

          <div className="mx-auto mb-12 max-w-3xl rounded-2xl bg-cream p-6 text-center">
            <p className="text-text-muted">{courses.intro}</p>
          </div>

          <div className="mx-auto max-w-3xl">
            <LevelGrid />
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gold/30 bg-gold/5 p-6 text-center">
            <p className="text-sm text-text-muted">{courses.materialsNote}</p>
          </div>
        </Container>
      </section>
      <SectionDivider topColor="#ffffff" bottomColor="#2EAF4B" />
      <CTABand />
    </>
  );
}
