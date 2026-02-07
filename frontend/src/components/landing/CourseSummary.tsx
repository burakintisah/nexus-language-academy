import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import landing from "@/data/tr/landing.json";
import common from "@/data/tr/common.json";

export default function CourseSummary() {
  return (
    <section className="bg-white py-8 sm:py-10">
      <Container>
        <SectionTitle
          title={landing.courseSummary.title}
          subtitle={landing.courseSummary.subtitle}
        />
        <div className="grid gap-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {landing.courseSummary.items.map((course) => (
            <Card key={course.id} className="relative overflow-hidden">
              <div
                className="absolute top-0 left-0 h-1 w-full"
                style={{ backgroundColor: course.color }}
              />
              <div className="mb-3 flex items-center gap-2">
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold text-white"
                  style={{ backgroundColor: course.color }}
                >
                  {course.level}
                </span>
                <span className="text-sm text-text-muted">{course.duration}</span>
              </div>
              <h3 className="font-heading mb-2 text-xl font-bold text-text-dark">
                {course.name}
              </h3>
              <p className="mb-4 text-sm text-text-muted">{course.description}</p>
              <Link
                href="/courses"
                className="text-sm font-semibold text-primary hover:underline"
              >
                {common.buttons.details} →
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
