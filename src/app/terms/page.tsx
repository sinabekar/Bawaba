import type { Metadata } from "next";
import { getPageTranslator } from "@/i18n/getPageTranslator";
import TermsPageContent from "@/components/pages/TermsPageContent";

export function generateMetadata(): Metadata {
  const t = getPageTranslator("fa", "TermsPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function TermsPage() {
  return <TermsPageContent />;
}
