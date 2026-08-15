import type { Metadata } from "next";
import { getPageTranslator } from "@/i18n/getPageTranslator";
import PrivacyPageContent from "@/components/pages/PrivacyPageContent";

export function generateMetadata(): Metadata {
  const t = getPageTranslator("fa", "PrivacyPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function PrivacyPage() {
  return <PrivacyPageContent />;
}
