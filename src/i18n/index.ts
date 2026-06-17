import nav from "./nav.json";
import home from "./home.json";
import footer from "./footer.json";
import about from "./about.json";
import services from "./services.json";
import contact from "./contact.json";
import projects from "./projects.json";
import notFound from "./notfound.json";

const translations = {
  en: { nav: nav.en, home: home.en, footer: footer.en, about: about.en, services: services.en, contact: contact.en, projects: projects.en, notFound: notFound.en },
  el: { nav: nav.el, home: home.el, footer: footer.el, about: about.el, services: services.el, contact: contact.el, projects: projects.el, notFound: notFound.el },
} as const;

export type Locale = keyof typeof translations;
type Section = "nav" | "home" | "footer" | "about" | "services" | "contact" | "projects" | "notFound";

export function t(locale: Locale, section: Section, key: string): string {
  return (translations[locale]?.[section] as Record<string, unknown>)?.[key] as string ?? key;
}

export function tArray(locale: Locale, section: Section, key: string): string[] {
  return (translations[locale]?.[section] as Record<string, unknown>)?.[key] as string[] ?? [];
}

export function getSection(locale: Locale, section: Section) {
  return translations[locale][section] as Record<string, unknown>;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split("/");
  if (segment === "en") return "en";
  return "el";
}

export function localizeProject(data: Record<string, unknown>, locale: Locale) {
  return {
    title: (locale === "el" ? data.titleEl : data.titleEn) as string,
    description: (locale === "el" ? data.descriptionEl : data.descriptionEn) as string,
    tags: (locale === "el" ? data.tagsEl : data.tagsEn) as string[] | undefined,
    location: (locale === "el" ? data.locationEl : data.locationEn) as string | undefined,
    body: (locale === "el" ? data.bodyEl : data.bodyEn) as string | undefined,
    thumbnail: data.thumbnail,
    images: data.images,
    year: data.year,
    featured: data.featured,
    order: data.order,
  };
}