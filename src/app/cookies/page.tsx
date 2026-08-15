import type { Metadata } from "next";
import { getPageTranslator } from "@/i18n/getPageTranslator";
import CookiesPageContent from "@/components/pages/CookiesPageContent";

export function generateMetadata(): Metadata {
  const t = getPageTranslator("fa", "CookiesPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function CookiesPage() {
  return <CookiesPageContent />;
}
