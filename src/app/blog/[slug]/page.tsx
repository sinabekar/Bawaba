import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowLeft, ArrowRight, Share2, CheckCircle2 } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

interface BlogPost {
  slug: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  date: string;
  content: string[];
}

export function generateStaticParams() {
  return [
    { slug: 'how-to-register-company-oman' },
    { slug: 'investor-visa-guide-oman' },
    { slug: 'business-setup-cost-oman' },
  ];
}

const posts: Record<string, BlogPost> = {
  "how-to-register-company-oman": {
    slug: "how-to-register-company-oman",
    category: "Company Registration",
    title: "How to Register a Company in Oman: Complete Guide 2024",
    description:
      "A step-by-step guide to company registration in Oman — covering business structures, required documents, timelines, costs, and insider tips.",
    readTime: "12 min read",
    date: "December 15, 2024",
    content: [
      "Setting up a company in Oman has never been more accessible for foreign investors. Since the introduction of the Foreign Capital Investment Law in 2019, international entrepreneurs can own 100% of their businesses in most sectors — without the need for a local Omani partner.",
      "In this comprehensive guide, we'll walk you through everything you need to know about company registration in Oman — from choosing the right business structure to getting your Commercial Registration (CR) in hand.",
    ],
  },
  "investor-visa-guide-oman": {
    slug: "investor-visa-guide-oman",
    category: "Visa Guide",
    title: "Investor Visa in Oman: Complete Guide for Foreign Investors",
    description:
      "Everything you need to know about obtaining an investor visa in Oman — eligibility, documents, processing time, and renewal.",
    readTime: "8 min read",
    date: "December 10, 2024",
    content: [
      "The Oman Investor Visa (RP2) is one of the most sought-after residence permits in the Gulf region — allowing foreign business owners to live and work in Oman legally. With Oman's Vision 2040 driving investment and growth, demand for investor visas has never been higher.",
      "This guide covers everything you need to know: who qualifies, what documents you need, how long it takes, and how much it costs.",
    ],
  },
  "business-setup-cost-oman": {
    slug: "business-setup-cost-oman",
    category: "Company Registration",
    title: "True Cost of Business Setup in Oman in 2024",
    description:
      "A transparent, complete breakdown of all costs involved in setting up a business in Oman.",
    readTime: "10 min read",
    date: "December 5, 2024",
    content: [
      "One of the most common questions we get is: 'How much does it really cost to set up a business in Oman?' The honest answer: it depends — but we can give you a very good estimate.",
      "In this article, we break down every cost involved in Oman company registration — government fees, professional service fees, visa costs, office requirements, and ongoing maintenance fees.",
    ],
  },
};

const defaultPost: BlogPost = {
  slug: "not-found",
  category: "Article",
  title: "Article Not Found",
  description: "This article could not be found.",
  readTime: "—",
  date: "—",
  content: ["This article is coming soon. Check back later or browse our other guides."],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug] || defaultPost;
  return {
    title: post.title,
    description: post.description,
  };
}

const tableOfContents = [
  "Understanding Oman's Business Environment",
  "Choosing the Right Business Structure",
  "Step-by-Step Registration Process",
  "Required Documents Checklist",
  "Costs and Government Fees",
  "Common Mistakes to Avoid",
  "Next Steps After Registration",
];

const checkPoints = [
  "Choose your business activity and legal structure",
  "Reserve your company name (1–2 days)",
  "Prepare and attest all required documents",
  "Submit application to Ministry of Commerce",
  "Receive Commercial Registration (CR) certificate",
  "Register for tax (if applicable)",
  "Obtain additional permits for your activity",
  "Open corporate bank account",
  "Apply for investor/employee visas",
  "Launch your business",
];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug] || defaultPost;

  const relatedPosts = Object.values(posts)
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-24 pb-14">
        <div className="container-custom max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-secondary/30 text-secondary-100 text-xs font-semibold">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            {post.title}
          </h1>
          <p className="text-white/70 text-lg mb-8">{post.description}</p>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span>{post.date}</span>
            <button className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Introduction */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-6">
                {post.content.map((paragraph, i) => (
                  <p key={i} className={`text-gray-700 text-base leading-relaxed ${i > 0 ? "mt-4" : ""}`}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Checklist */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-6">
                <h2 className="text-xl font-bold text-primary mb-6">
                  Complete Business Setup Checklist
                </h2>
                <div className="space-y-3">
                  {checkPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key takeaways */}
              <div className="bg-secondary/5 border border-secondary/10 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-primary mb-4">Key Takeaways</h3>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold flex-shrink-0">→</span>
                    Foreign investors can own 100% of a company in most sectors in Oman.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold flex-shrink-0">→</span>
                    An LLC is the most common and recommended structure for foreign investors.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold flex-shrink-0">→</span>
                    Registration typically takes 5–10 business days with proper documentation.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold flex-shrink-0">→</span>
                    Free zones offer additional benefits including 0% corporate tax.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold flex-shrink-0">→</span>
                    Using a professional setup service saves time, avoids mistakes, and reduces stress.
                  </li>
                </ul>
              </div>

              {/* CTA in article */}
              <div className="mt-8 p-6 rounded-2xl border border-secondary/20 bg-white flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <h4 className="font-bold text-primary mb-1">Ready to register your company?</h4>
                  <p className="text-sm text-gray-500">Book a free consultation with our experts today.</p>
                </div>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-white text-sm font-semibold rounded-xl hover:bg-secondary-700 transition-colors whitespace-nowrap"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Table of contents */}
              <div className="p-6 rounded-2xl bg-white border border-gray-100 sticky top-24">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
                  Table of Contents
                </h3>
                <ol className="space-y-2.5">
                  {tableOfContents.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-xs text-secondary font-bold flex-shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs text-gray-600 hover:text-secondary transition-colors cursor-pointer leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
                <Link
                  href="/contact"
                  className="block w-full mt-6 py-3 text-center bg-secondary text-white text-sm font-semibold rounded-xl hover:bg-secondary-700 transition-colors"
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="pb-16 bg-background">
          <div className="container-custom">
            <h3 className="text-xl font-bold text-primary mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-secondary/30 hover:shadow-card transition-all"
                >
                  <span className="text-xs font-semibold text-secondary">{related.category}</span>
                  <h4 className="font-bold text-primary mt-2 mb-3 group-hover:text-secondary transition-colors leading-snug">
                    {related.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Clock className="w-3 h-3" />
                    {related.readTime}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
