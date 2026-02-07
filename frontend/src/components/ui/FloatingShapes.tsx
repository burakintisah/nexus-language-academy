type Shape = {
  className: string;
  style: React.CSSProperties;
};

const presets: Record<string, Shape[]> = {
  hero: [
    {
      className: "rounded-full bg-primary/10",
      style: { width: 120, height: 120, top: "10%", left: "5%", animation: "float-slow 8s ease-in-out infinite" },
    },
    {
      className: "rounded-full bg-gold/15",
      style: { width: 80, height: 80, top: "60%", left: "12%", animation: "float-medium 7s ease-in-out infinite 1s" },
    },
    {
      className: "rounded-full bg-primary-light/10",
      style: { width: 60, height: 60, top: "20%", right: "8%", animation: "float-fast 5s ease-in-out infinite 0.5s" },
    },
    {
      className: "rounded-full bg-gold/10",
      style: { width: 40, height: 40, bottom: "15%", right: "15%", animation: "float-slow 9s ease-in-out infinite 2s" },
    },
    {
      className: "rounded-full bg-primary/8",
      style: { width: 24, height: 24, top: "45%", left: "30%", animation: "float-fast 6s ease-in-out infinite 1.5s" },
    },
  ],
  cream: [
    {
      className: "rounded-full bg-primary/8",
      style: { width: 100, height: 100, top: "15%", right: "10%", animation: "float-slow 9s ease-in-out infinite" },
    },
    {
      className: "rounded-full bg-gold/12",
      style: { width: 70, height: 70, bottom: "20%", left: "8%", animation: "float-medium 7s ease-in-out infinite 1s" },
    },
    {
      className: "rounded-full bg-primary-light/8",
      style: { width: 50, height: 50, top: "50%", right: "25%", animation: "float-fast 6s ease-in-out infinite 2s" },
    },
    {
      className: "rounded-full bg-gold/8",
      style: { width: 30, height: 30, top: "30%", left: "20%", animation: "float-slow 8s ease-in-out infinite 0.5s" },
    },
  ],
  cta: [
    {
      className: "rounded-full bg-white/10",
      style: { width: 140, height: 140, top: "10%", left: "5%", animation: "float-slow 10s ease-in-out infinite" },
    },
    {
      className: "rounded-full bg-white/8",
      style: { width: 90, height: 90, bottom: "10%", right: "10%", animation: "float-medium 8s ease-in-out infinite 1s" },
    },
    {
      className: "rounded-full bg-white/5",
      style: { width: 60, height: 60, top: "40%", right: "30%", animation: "float-fast 6s ease-in-out infinite 2s" },
    },
  ],
};

export default function FloatingShapes({ variant }: { variant: "hero" | "cream" | "cta" }) {
  const shapes = presets[variant];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {shapes.map((shape, i) => (
        <div key={i} className={`absolute ${shape.className}`} style={shape.style} />
      ))}
    </div>
  );
}
