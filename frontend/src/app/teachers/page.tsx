import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import TeacherCard from "@/components/teachers/TeacherCard";
import teachers from "@/data/tr/teachers.json";

export const metadata: Metadata = {
  title: "Eğitmenler",
  description:
    "Nexus Language Academy eğitmen kadrosu. Alanında uzman, sertifikalı İngilizce eğitmenleriyle tanışın.",
  openGraph: {
    title: "Eğitmenler | Nexus Language Academy",
    description:
      "Cambridge ve Oxford sertifikalı, deneyimli eğitmen kadromuz.",
  },
};

export default function TeachersPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionTitle
          title={teachers.pageTitle}
          subtitle={teachers.pageSubtitle}
        />
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {teachers.teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </Container>
    </section>
  );
}
