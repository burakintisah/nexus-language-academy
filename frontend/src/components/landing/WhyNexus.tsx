import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import FloatingShapes from "@/components/ui/FloatingShapes";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import { boldify } from "@/lib/boldify";
import landing from "@/data/tr/landing.json";

const cardColors: Record<string, { bg: string; icon: string; iconBg: string; border: string }> = {
  book:       { bg: "bg-emerald-50",  icon: "text-emerald-600",  iconBg: "bg-emerald-100", border: "border-t-emerald-400" },
  globe:      { bg: "bg-sky-50",      icon: "text-sky-600",      iconBg: "bg-sky-100",     border: "border-t-sky-400" },
  graduation: { bg: "bg-violet-50",   icon: "text-violet-600",   iconBg: "bg-violet-100",  border: "border-t-violet-400" },
  users:      { bg: "bg-amber-50",    icon: "text-amber-600",    iconBg: "bg-amber-100",   border: "border-t-amber-400" },
  chart:      { bg: "bg-rose-50",     icon: "text-rose-600",     iconBg: "bg-rose-100",    border: "border-t-rose-400" },
  star:       { bg: "bg-indigo-50",   icon: "text-indigo-600",   iconBg: "bg-indigo-100",  border: "border-t-indigo-400" },
};

const iconMap: Record<string, React.ReactNode> = {
  book: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  globe: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  graduation: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
  users: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  chart: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  star: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
};

export default function WhyNexus() {
  return (
    <section className="relative overflow-hidden bg-cream py-8 sm:py-10">
      <FloatingShapes variant="cream" />
      <Container>
        <FadeInOnScroll>
          <SectionTitle
            title={landing.whyNexus.title}
            subtitle={landing.whyNexus.subtitle}
          />
        </FadeInOnScroll>
        <div className="grid gap-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {landing.whyNexus.items.map((item, index) => {
            const colors = cardColors[item.icon] ?? cardColors.star;
            return (
            <FadeInOnScroll key={index} delay={index * 100}>
              <Card className={`text-center border-t-4 ${colors.border} ${colors.bg} hover:-translate-y-1`}>
                <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${colors.iconBg} ${colors.icon}`}>
                  {iconMap[item.icon] ?? iconMap.star}
                </div>
                <h3 className="font-heading mb-2 text-lg font-bold text-text-dark">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted">{boldify(item.description)}</p>
              </Card>
            </FadeInOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
