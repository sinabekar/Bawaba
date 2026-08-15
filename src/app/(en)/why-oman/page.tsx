import type { Metadata } from "next";
import { getPageTranslator } from "@/i18n/getPageTranslator";
import WhyOmanPageContent from "@/components/pages/WhyOmanPageContent";

export function generateMetadata(): Metadata {
  const t = getPageTranslator("en", "WhyOmanPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function WhyOmanPage() {
  return <WhyOmanPageContent />;
}
