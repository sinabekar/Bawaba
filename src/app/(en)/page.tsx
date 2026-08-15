import type { Metadata } from "next";
import { getPageTranslator } from "@/i18n/getPageTranslator";
import HomePageContent from "@/components/pages/HomePageContent";

export function generateMetadata(): Metadata {
  const t = getPageTranslator("en", "HomePage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function HomePage() {
  return <HomePageContent />;
}
