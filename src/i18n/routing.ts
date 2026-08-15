// This is a static export (see next.config.ts) served from GitHub Pages —
// there is no middleware/runtime available to negotiate a locale for an
// unprefixed URL. Instead of next-intl's middleware-based locale routing,
// each locale gets its own literal route tree:
//   src/app/(en)/...      -> unprefixed URLs (e.g. /about) — unchanged from before
//   src/app/(fa)/fa/...   -> /fa-prefixed URLs (e.g. /fa/about)
// Both are separate Next.js "root layouts" (see the route-groups docs) so each
// can set its own <html lang dir>. Translation strings are still served by
// next-intl (NextIntlClientProvider client-side, getTranslations server-side)
// with the locale passed explicitly rather than auto-detected.

export const locales = ["en", "fa"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fa: "فارسی",
};

/** Builds a path prefixed for the given locale ("" for en, "/fa" for fa). */
export function localeHref(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  return locale === defaultLocale ? path : `/fa${clean}`;
}
