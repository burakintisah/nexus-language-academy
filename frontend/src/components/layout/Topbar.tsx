"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import MobileMenu from "./MobileMenu";
import { NAV_LINKS } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/whatsapp";
import common from "@/data/tr/common.json";

export default function Topbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 shadow-[0_4px_20px_-2px_rgba(27,58,92,0.35)] transition-all duration-300 ${
          scrolled
            ? "bg-navy/95 shadow-[0_4px_24px_-2px_rgba(27,58,92,0.5)] backdrop-blur-sm"
            : "bg-navy"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-icon-512-transparent.png"
              alt="Nexus Language Academy"
              width={48}
              height={48}
              className="h-10 w-10 sm:h-12 sm:w-12"
            />
            <span className="text-lg font-bold text-white sm:text-xl">
              Nexus Language Academy
            </span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/85 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
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

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="rounded-md p-2 text-white lg:hidden"
            aria-label={common.aria.openMenu}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Spacer for fixed header */}
      <div className="h-16 sm:h-18" />
    </>
  );
}

