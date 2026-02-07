"use client";

import { useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { NAV_LINKS } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/whatsapp";
import common from "@/data/tr/common.json";

const MENU_COLORS = [
  "border-emerald-400 hover:bg-gray-50",
  "border-sky-400 hover:bg-gray-50",
  "border-violet-400 hover:bg-gray-50",
  "border-amber-400 hover:bg-gray-50",
  "border-rose-400 hover:bg-gray-50",
];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between bg-navy p-4">
          <span className="text-lg font-bold text-white">{common.menu.title}</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-2 text-white"
            aria-label={common.aria.closeMenu}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-2 p-4">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`rounded-lg border-l-4 px-4 py-3 text-base font-medium text-text-dark transition-colors ${MENU_COLORS[i % MENU_COLORS.length]}`}
              style={{
                animation: open ? `slide-in-right 0.3s ease-out ${(i + 1) * 0.05}s both` : "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div
          className="p-4"
          style={{
            animation: open ? `fade-in-up 0.3s ease-out ${(NAV_LINKS.length + 1) * 0.05}s both` : "none",
          }}
        >
          <Button
            variant="whatsapp"
            href={getWhatsAppLink(common.whatsapp.lessonRequest)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <WhatsAppIcon />
            {common.buttons.requestLesson}
          </Button>
        </div>
      </div>
    </>
  );
}
