interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
  return (
    <div className={`mb-12 text-center ${className}`}>
      <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">{subtitle}</p>
      )}
    </div>
  );
}
