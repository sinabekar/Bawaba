import { createTranslator } from "next-intl";
import enMessages from "../../messages/en.json";
import faMessages from "../../messages/fa.json";
import type { Locale } from "./routing";

const messagesByLocale = { en: enMessages, fa: faMessages };

/**
 * Synchronous, request-free translator for use in generateMetadata /
 * generateStaticParams. This app is a static export with two literal route
 * trees (see routing.ts) rather than next-intl's middleware-based routing,
 * so there's no per-request locale to negotiate — createTranslator just
 * reads the right messages file directly for the given locale.
 *
 * `namespace` is dynamic across ~20 call sites, which doesn't fit
 * next-intl's strict literal-union namespace typing — cast to unknown here
 * rather than at every call site.
 */
export function getPageTranslator(locale: Locale, namespace: string) {
  return createTranslator({
    locale,
    messages: messagesByLocale[locale],
    namespace,
  } as unknown as Parameters<typeof createTranslator>[0]);
}
