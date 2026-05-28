import enNav from "./en/nav.json";
import elNav from "./el/nav.json";
import enHome from "./en/home.json";
import elHome from "./el/home.json";
import enFooter from "./en/footer.json";
import elFooter from "./el/footer.json";
import enAbout from "./en/about.json";
import elAbout from "./el/about.json";
import enServices from "./en/services.json";
import elServices from "./el/services.json";
import enContact from "./en/contact.json";
import elContact from "./el/contact.json";

const translations = {
  en: { nav: enNav, home: enHome, footer: enFooter, about: enAbout, services: enServices, contact: enContact },
  el: { nav: elNav, home: elHome, footer: elFooter, about: elAbout, services: elServices, contact: elContact },
} as const;

export type Locale = keyof typeof translations;
type Section = "nav" | "home" | "footer" | "about" | "services" | "contact";

export function t(locale: Locale, section: Section, key: string): string {
  return (translations[locale]?.[section] as Record<string, unknown>)?.[key] as string ?? key;
}

export function tArray(locale: Locale, section: Section, key: string): string[] {
  return (translations[locale]?.[section] as Record<string, unknown>)?.[key] as string[] ?? [];
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split("/");
  if (segment === "en") return "en";
  return "el";
}
