import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight, Tag } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/sections/CTASection";
import NewsletterForm from "@/components/forms/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog — Business Setup in Oman",
  description:
    "Expert guides, insights, and news about business setup, company registration, visa services, and investment opportunities in Oman.",
};

const categories = ["All", "Company Registration", "Visa Guide", "Investment", "Tax & Accounting", "Free Zones"];

const posts = [
  {
    slug: "how-to-register-company-oman",
    category: "Company Registration",
    title: "How to Register a Company in Oman: Complete Guide 2024",
    excerpt:
      "A step-by-step guide to company registration in Oman — covering business structures, required documents, timelines, costs, and insider tips to avoid common mistakes.",
    readTime: "12 min read",
    date: "December 15, 2024",
    featured: true,
  },
  {
    slug: "investor-visa-guide-oman",
    category: "Visa Guide",
    title: "Investor Visa in Oman: Complete Guide for Foreign Investors",
    excerpt:
      "Everything you need to know about obtaining an investor visa in Oman — eligibility, documents, processing time, costs, and the renewal process.",
    readTime: "8 min read",
    date: "December 10, 2024",
    featured: false,
  },
  {
    slug: "business-setup-cost-oman",
    category: "Company Registration",
    title: "True Cost of Business Setup in Oman in 2024",
    excerpt:
      "A transparent, complete breakdown of all costs involved in setting up a business in Oman — government fees, professional services, visas, office costs, and more.",
    readTime: "10 min read",
    date: "December 5, 2024",
    featured: false,
  },
  {
    slug: "best-industries-oman-2024",
    category: "Investment",
    title: "Best Industries to Invest in Oman Right Now",
    excerpt:
      "Oman's Vision 2040 is reshaping the economy. These are the sectors experiencing the highest growth and offering the best returns for investors in 2024.",
    readTime: "9 min read",
    date: "November 28, 2024",
    featured: false,
  },
  {
    slug: "tax-guide-oman",
    category: "Tax & Accounting",
    title: "Complete Tax Guide for Businesses in Oman",
    excerpt:
      "Corporate tax, VAT, withholding tax, and everything else you need to know about taxation in Oman — explained in plain language for business owners.",
    readTime: "11 min read",
    date: "November 20, 2024",
    featured: false,
  },
  {
    slug: "oman-free-zones-guide",
    category: "Free Zones",
    title: "Oman Free Zones: Which One is Right for Your Business?",
    excerpt:
      "A detailed comparison of Sohar Freezone, Salalah Free Zone, Knowledge Oasis Muscat, and Duqm SEZ — locations, benefits, costs, and who should choose each one.",
    readTime: "14 min read",
    date: "November 12, 2024",
    featured: false,
  },
  {
    slug: "employment-visa-oman",
    category: "Visa Guide",
    title: "Employment Visa in Oman: Everything You Need to Know",
    excerpt:
      "How to obtain an employment visa in Oman for your staff. Covers eligibility, sponsorship, documents, processing, and labor law essentials.",
    readTime: "7 min read",
    date: "November 5, 2024",
    featured: false,
  },
  {
    slug: "family-visa-oman",
    category: "Visa Guide",
    title: "Family Residence Visa in Oman: A Practical Guide",
    excerpt:
      "How to sponsor your family to join you in Oman. Eligibility, documents, income requirements, processing time, and practical tips.",
    readTime: "6 min read",
    date: "October 28, 2024",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  "Company Registration": "bg-secondary/10 text-secondary",
  "Visa Guide": "bg-accent/10 text-accent-600",
  "Investment": "bg-blue-100 text-blue-700",
  "Tax & Accounting": "bg-purple-100 text-purple-700",
  "Free Zones": "bg-teal-100 text-teal-700",
};

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        <div className="container-custom relative max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Business in Oman —{" "}
            <span className="text-gradient-accent">the insider view</span>
          </h1>
          <p className="text-white/70 text-lg">
            Expert guides, practical insights, and the latest news on company setup,
            visas, and investment in Oman.
          </p>
        </div>
      </section>

      {/* Categories */}
      <div className="bg-white border-b border-gray-100 sticky top-[64px] z-30">
        <div className="container-custom py-4">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  cat === "All"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Featured post */}
          {featured && (
            <div className="mb-10">
              <Link
                href={`/blog/${featured.slug}`}
                className="group block p-8 md:p-10 rounded-3xl bg-white border border-gray-100 hover:border-secondary/30 hover:shadow-card-hover transition-all"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[featured.category] || "bg-gray-100 text-gray-600"}`}>
                        {featured.category}
                      </span>
                      <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                        Featured
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {featured.readTime}
                      </span>
                      <span>{featured.date}</span>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/5 border border-gray-100 flex items-center justify-center">
                      <div className="text-center px-8">
                        <div className="text-4xl font-black text-secondary/20 mb-2">CR</div>
                        <p className="text-xs text-gray-400">Company Registration Guide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-secondary/30 hover:shadow-card-hover transition-all"
              >
                {/* Card image placeholder */}
                <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 mb-5 flex items-center justify-center border border-gray-100">
                  <Tag className="w-8 h-8 text-gray-200" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || "bg-gray-100 text-gray-600"}`}>
                    {post.category}
                  </span>
                </div>

                <h2 className="font-bold text-primary text-base mb-2 leading-tight group-hover:text-secondary transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-secondary group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-xl text-center">
          <h3 className="text-2xl font-bold text-primary mb-3">
            Get the latest Oman business insights
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Join 3,000+ investors and entrepreneurs getting our weekly newsletter.
          </p>
          <NewsletterForm variant="light" />
        </div>
      </section>

      <CTASection />
    </>
  );
}
