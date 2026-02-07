"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { getWhatsAppLink } from "@/lib/whatsapp";
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
    <section className="bg-white py-16 sm:py-20 lg:py-24">
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
                  <span className="text-sm sm:text-base">{feature}</span>
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
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {common.buttons.requestLesson}
              </Button>
            </div>
          </div>

          {/* Right column — Video Player */}
          <div>
            <h2 className="mb-4 text-center text-xl font-extrabold text-navy sm:text-2xl lg:text-left">
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
