// This site is Farsi-only (no locale switching). `routing.ts` used to
// coordinate two locale trees (English + Farsi) via next-intl; that's gone
// now, but `localeHref` is kept as a passthrough so components that call it
// (Navbar, Footer, page content, etc.) didn't need every call site rewritten
// — it simply returns the path unchanged.

export const locales = ["fa"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fa";

/** No-op: kept so existing call sites (`localeHref(locale, "/x")`) don't need touching. */
export function localeHref(_locale: Locale, path: string): string {
  return path;
}
