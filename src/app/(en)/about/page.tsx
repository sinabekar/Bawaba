import type { Metadata } from "next";
import { getPageTranslator } from "@/i18n/getPageTranslator";
import AboutPageContent from "@/components/pages/AboutPageContent";

export function generateMetadata(): Metadata {
  const t = getPageTranslator("en", "AboutPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function AboutPage() {
  return <AboutPageContent />;
}
