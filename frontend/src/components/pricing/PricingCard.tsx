import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/whatsapp";
import pricing from "@/data/tr/pricing.json";

interface Package {
  id: string;
  name: string;
  lessonsPerMonth: number;
  pricePerLesson: number;
  totalPrice: number;
  currency: string;
  period: string;
  recommended: boolean;
  badge: string | null;
  description: string;
  includes: string[];
}

interface PricingCardProps {
  pkg: Package;
}

export default function PricingCard({ pkg }: PricingCardProps) {
  return (
    <Card
      className={`relative flex flex-col ${
        pkg.recommended
          ? "border-2 border-primary shadow-xl"
          : "border border-gray-200"
      }`}
    >
      {pkg.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white">
          {pkg.badge}
        </div>
      )}

      <div className="mb-4 text-center">
        <h3 className="font-heading text-xl font-bold text-text-dark">{pkg.name}</h3>
        <p className="mt-1 text-sm text-text-muted">{pkg.description}</p>
      </div>

      <div className="mb-6 text-center">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-extrabold text-text-dark">
            {pkg.totalPrice.toLocaleString("tr-TR")}
          </span>
          <span className="text-lg font-medium text-text-muted">
            {pkg.currency}/{pkg.period}
          </span>
        </div>
        <p className="mt-1 text-sm text-text-muted">
          {pkg.lessonsPerMonth} ders × {pkg.pricePerLesson} {pkg.currency}
        </p>
      </div>

      <ul className="mb-6 flex-1 space-y-3">
        {pkg.includes.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
            <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {item}
          </li>
        ))}
      </ul>

      <Button
        variant={pkg.recommended ? "whatsapp" : "secondary"}
        href={getWhatsAppLink(pricing.ctaMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        {pkg.recommended && <WhatsAppIcon />}
        {pricing.ctaText}
      </Button>
    </Card>
  );
}
