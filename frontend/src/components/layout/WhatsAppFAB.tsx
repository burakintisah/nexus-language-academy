"use client";

import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/whatsapp";
import common from "@/data/tr/common.json";

export default function WhatsAppFAB() {
  return (
    <a
      href={getWhatsAppLink(common.whatsapp.defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      aria-label={common.buttons.whatsappChat}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
