import type { Metadata } from "next";
import { getPageTranslator } from "@/i18n/getPageTranslator";
import CompanyRegistrationPageContent from "@/components/pages/CompanyRegistrationPageContent";

export function generateMetadata(): Metadata {
  const t = getPageTranslator("fa", "CompanyRegistrationPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function CompanyRegistrationPage() {
  return <CompanyRegistrationPageContent />;
}
