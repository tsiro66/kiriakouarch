import enNav from "./en/nav.json";
import elNav from "./el/nav.json";
import enHome from "./en/home.json";
import elHome from "./el/home.json";
import enFooter from "./en/footer.json";
import elFooter from "./el/footer.json";

const translations = {
  en: { nav: enNav, home: enHome, footer: enFooter },
  el: { nav: elNav, home: elHome, footer: elFooter },
} as const;

export type Locale = keyof typeof translations;
type Section = "nav" | "home" | "footer";

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
