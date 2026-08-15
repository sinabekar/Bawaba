import type { Metadata } from "next";
import { getPageTranslator } from "@/i18n/getPageTranslator";
import BlogPostPageContent from "@/components/pages/BlogPostPageContent";
import faMessages from "../../../../messages/fa.json";

export function generateStaticParams() {
  return Object.keys(faMessages.BlogPostPage.posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = getPageTranslator("fa", "BlogPostPage");
  const posts = t.raw("posts") as Record<string, { title: string; description: string }>;
  const post = posts[slug] ?? { title: t("notFound.title"), description: t("notFound.description") };
  return { title: post.title, description: post.description };
}

export default function BlogPostPage() {
  return <BlogPostPageContent />;
}
