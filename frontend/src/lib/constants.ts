export const WA_PHONE = process.env.NEXT_PUBLIC_WA_PHONE ?? "905069306965";

export const SITE_NAME = "Nexus Language Academy";
export const SITE_URL = "https://nexuslanguageacademy.com";
export const SITE_DESCRIPTION =
  "Online İngilizce eğitiminde uzman kadromuzla tanışın. Oxford, Cambridge ve Discovery Education materyalleriyle desteklenen programlarımızla İngilizce öğrenin.";

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/nexuslanguageacademy",
  facebook: "https://facebook.com/nexuslanguageacademy",
  youtube: "https://youtube.com/@nexuslanguageacademy",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/courses", label: "Programlar" },
  { href: "/teachers", label: "Eğitmenler" },
  { href: "/pricing", label: "Ücretlendirme" },
  { href: "/placement-test", label: "Seviye Tespit Sınavı" },
] as const;
