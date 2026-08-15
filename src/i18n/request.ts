import { getRequestConfig } from "next-intl/server";
import { defaultLocale } from "./routing";

// This app doesn't use next-intl's middleware/routing (see routing.ts —
// this is a static export with two literal route trees, /en and /fa/*,
// each of which supplies its own locale + messages directly to
// NextIntlClientProvider). This config file only needs to exist so
// next-intl's build tooling is satisfied; it must never touch
// `requestLocale`/headers()/cookies(), since those are dynamic APIs that
// `output: 'export'` can't support during prerendering.
export default getRequestConfig(async () => ({
  locale: defaultLocale,
  messages: (await import(`../../messages/${defaultLocale}.json`)).default,
}));
