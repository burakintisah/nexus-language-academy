import { WA_PHONE } from "./constants";

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
}
