export default function SectionDivider({
  topColor,
  bottomColor,
  flip = false,
}: {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
}) {
  return (
    <div
      className="relative w-full leading-[0]"
      style={{
        height: "clamp(40px, 5vw, 80px)",
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1440" height="120" fill={bottomColor} />
        <path
          d="M0,0 L1440,0 L1440,60 C1320,100 1160,120 960,105 C720,85 540,110 360,100 C180,90 60,70 0,80 Z"
          fill={topColor}
        />
      </svg>
    </div>
  );
}
