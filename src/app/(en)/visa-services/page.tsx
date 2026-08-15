import type { Metadata } from "next";
import { getPageTranslator } from "@/i18n/getPageTranslator";
import VisaServicesPageContent from "@/components/pages/VisaServicesPageContent";

export function generateMetadata(): Metadata {
  const t = getPageTranslator("en", "VisaServicesPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function VisaServicesPage() {
  return <VisaServicesPageContent />;
}
