import type { Metadata } from "next";
import { getPageTranslator } from "@/i18n/getPageTranslator";
import ContactPageContent from "@/components/pages/ContactPageContent";

export function generateMetadata(): Metadata {
  const t = getPageTranslator("en", "ContactPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function ContactPage() {
  return <ContactPageContent />;
}
