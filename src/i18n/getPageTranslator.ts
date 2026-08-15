import { createTranslator } from "next-intl";
import faMessages from "../../messages/fa.json";
import type { Locale } from "./routing";

/**
 * Synchronous, request-free translator for use in generateMetadata /
 * generateStaticParams — this app is Farsi-only, and createTranslator here
 * just reads messages/fa.json directly rather than depending on next-intl's
 * per-request locale negotiation (which this static export doesn't use).
 *
 * `namespace` is dynamic across ~20 call sites, which doesn't fit
 * next-intl's strict literal-union namespace typing — cast to unknown here
 * rather than at every call site.
 */
export function getPageTranslator(locale: Locale, namespace: string) {
  return createTranslator({
    locale,
    messages: faMessages,
    namespace,
  } as unknown as Parameters<typeof createTranslator>[0]);
}
