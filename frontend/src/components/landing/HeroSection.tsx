"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/whatsapp";
import FloatingShapes from "@/components/ui/FloatingShapes";
import { boldify } from "@/lib/boldify";
import landing from "@/data/tr/landing.json";
import common from "@/data/tr/common.json";

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="h-16 w-16 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function VideoPlayer() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`${landing.hero.youtubeUrl}?autoplay=1`}
        title={landing.hero.videoTitle}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="group absolute inset-0 flex cursor-pointer items-center justify-center"
      aria-label={landing.hero.videoTitle}
    >
      <Image
        src={landing.hero.videoThumbnail}
        alt={landing.hero.videoTitle}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40" />
      {/* Play button */}
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 shadow-lg transition-transform duration-200 group-hover:scale-110">
        <PlayIcon />
      </div>
    </button>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12">
      <FloatingShapes variant="hero" />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left column — Price & Features */}
          <div>
            {/* Price */}
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                {landing.hero.priceLabel}
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-6xl font-extrabold text-primary sm:text-7xl">
                  {landing.hero.price}
                </span>
                <span className="text-2xl font-bold text-navy sm:text-3xl">
                  {landing.hero.priceCurrency}
                </span>
              </div>
            </div>

            {/* Features list */}
            <ul className="space-y-3">
              {landing.hero.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-text-dark">
                  <CheckIcon />
                  <span className="text-sm sm:text-base">{boldify(feature)}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <Button
                variant="whatsapp"
                href={getWhatsAppLink(common.whatsapp.lessonRequest)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                {common.buttons.requestLesson}
              </Button>
            </div>
          </div>

          {/* Right column — Video Player */}
          <div>
            <h2 className="font-heading mb-4 text-center text-xl font-extrabold text-navy sm:text-2xl lg:text-left">
              {landing.hero.videoTitle}
            </h2>
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
              <VideoPlayer />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
