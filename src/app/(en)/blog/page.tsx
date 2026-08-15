import type { Metadata } from "next";
import { getPageTranslator } from "@/i18n/getPageTranslator";
import BlogPageContent from "@/components/pages/BlogPageContent";

export function generateMetadata(): Metadata {
  const t = getPageTranslator("en", "BlogPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function BlogPage() {
  return <BlogPageContent />;
}
