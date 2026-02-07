"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "up" | "left" | "right";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
}

const directionStyles: Record<Direction, string> = {
  up: "translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
};

export default function FadeInOnScroll({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 600,
}: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${
        visible ? "translate-x-0 translate-y-0 opacity-100" : `opacity-0 ${directionStyles[direction]}`
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
