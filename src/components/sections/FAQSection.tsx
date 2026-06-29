"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
  {
    category: "Registration",
    q: "How long does it take to register a company in Oman?",
    a: "On average, company registration takes 5–10 business days depending on the business activity, structure, and completeness of documents. Some expedited options are available for certain business types.",
  },
  {
    category: "Registration",
    q: "What types of business structures are available in Oman?",
    a: "The most common structures are LLC (Limited Liability Company), sole proprietorship, joint venture, branch office, and representative office. Each has different requirements and benefits. An LLC is most commonly used by foreign investors.",
  },
  {
    category: "Registration",
    q: "Can a foreigner own 100% of a company in Oman?",
    a: "Yes, in most sectors foreign investors can own up to 100% of their business since Oman implemented the Foreign Capital Investment Law. Certain restricted sectors may still require an Omani partner. Free zones also offer 100% foreign ownership.",
  },
  {
    category: "Costs",
    q: "What is the minimum capital required to start a business in Oman?",
    a: "Minimum capital requirements vary by business type. For an LLC, the minimum is generally OMR 150,000 (approximately $390,000) for certain categories, but many business activities have lower or no minimum capital requirements. We'll advise based on your specific activity.",
  },
  {
    category: "Costs",
    q: "What are the total costs of setting up a business in Oman?",
    a: "Total setup costs vary based on business structure, activity, and location. Typically includes government fees (OMR 300–2,000+), professional service fees, office rental, and visa costs. We provide a full cost breakdown during your free consultation.",
  },
  {
    category: "Visas",
    q: "What is an investor visa and who qualifies?",
    a: "An investor visa (RP2) allows foreign nationals who own or invest in an Oman-registered business to live and work in Oman. Eligibility depends on your investment amount, business activity, and shareholder percentage. Typically requires a registered company and minimum investment threshold.",
  },
  {
    category: "Visas",
    q: "How long does the investor visa take?",
    a: "Processing times typically range from 2–4 weeks after document submission. Requirements include a registered company, valid passport, medical clearance, and background check. Our team manages the entire process on your behalf.",
  },
  {
    category: "Visas",
    q: "Can I bring my family to Oman on a family visa?",
    a: "Yes. If you have a valid investor or employment visa, you can sponsor family members (spouse, children, sometimes parents) on a family residence visa. Requirements include proof of relationship, accommodation in Oman, and sufficient income.",
  },
  {
    category: "Visas",
    q: "What is the difference between an employment visa and an investor visa?",
    a: "An investor visa is for business owners/shareholders. An employment visa is for employees working for an Oman company under an employment contract. Both types allow you to live and work in Oman, but they have different requirements and sponsor types.",
  },
  {
    category: "Free Zones",
    q: "What are the free zones in Oman and what are their benefits?",
    a: "Oman has several free zones including Sohar Freezone, Salalah Freezone, Knowledge Oasis Muscat (KOM), and Duqm SEZ. Benefits include 0% corporate tax, 100% foreign ownership, full capital repatriation, streamlined customs, and simplified licensing.",
  },
  {
    category: "Requirements",
    q: "What documents are required to register a company?",
    a: "Typically: passport copies for all shareholders, proof of address, bank reference letter, proposed company name, business plan (sometimes), and trade name reservation certificate. Requirements vary by business type and we provide a personalized checklist.",
  },
  {
    category: "Requirements",
    q: "Do I need to be physically present in Oman for company registration?",
    a: "Not necessarily. In many cases, we can handle the registration process remotely with properly attested and notarized documents. However, some stages may require in-person presence. We'll clarify what's needed in your consultation.",
  },
  {
    category: "Taxes",
    q: "Is there corporate tax in Oman?",
    a: "Oman currently has a corporate income tax rate of 15% on taxable income above OMR 30,000 for most businesses. However, small businesses with income under OMR 30,000 may be exempt. Free zone companies often enjoy additional tax benefits.",
  },
  {
    category: "Taxes",
    q: "Is there personal income tax or VAT in Oman?",
    a: "There is no personal income tax in Oman, making it attractive for expatriates. Oman introduced Value Added Tax (VAT) at 5% in 2021. Our accounting partners can advise on VAT registration and compliance for your business.",
  },
  {
    category: "Support",
    q: "What ongoing support do you provide after company registration?",
    a: "After registration, we offer PRO services (government liaison), visa renewals, business license renewals, accounting, tax compliance, and general business advisory. We're your long-term partner, not just a one-time service.",
  },
  {
    category: "Process",
    q: "What is a PRO service and do I need it?",
    a: "PRO (Public Relations Officer) services handle ongoing government interactions — visa renewals, license renewals, labor card updates, Ministry submissions, etc. For businesses without a dedicated admin team, it's highly recommended and cost-effective.",
  },
  {
    category: "Process",
    q: "Can I change my business activity after registration?",
    a: "Yes, but it requires updating your commercial registration (CR), which involves re-approval from the Ministry of Commerce. We can handle this for you. It's best to plan your activities upfront to avoid additional fees.",
  },
  {
    category: "Registration",
    q: "What is a Commercial Registration (CR) in Oman?",
    a: "A CR (Commercial Registration) is the official business license issued by Oman's Ministry of Commerce, Industry and Investment Promotion. It's the foundational document for operating any business legally in Oman.",
  },
  {
    category: "Process",
    q: "How do I open a bank account for my Oman company?",
    a: "Corporate bank account opening requires your CR, company Memorandum of Association, shareholder passports, proof of address, and an initial deposit. We connect you with our banking partners to streamline this process.",
  },
  {
    category: "Process",
    q: "Do I need a local office address to register a company?",
    a: "Yes, all companies in Oman require a registered commercial address. We can assist with office space solutions — from virtual office addresses to serviced offices — depending on your needs and business activity requirements.",
  },
];

export default function FAQSection({ limit }: { limit?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="section-padding bg-white" aria-labelledby="faq-heading">
      <div className="container-custom max-w-3xl">
        <SectionHeader
          badge="FAQ"
          title="Frequently asked"
          titleHighlight=" questions"
          description="Everything you need to know about starting a business in Oman. Can't find the answer? Book a free call with our team."
          className="mb-12"
        />

        <div className="space-y-3">
          {items.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full flex items-start gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 transition-colors ${
                  openIndex === index ? "bg-secondary text-white" : "bg-gray-100 text-gray-400"
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-3.5 h-3.5" />
                  ) : (
                    <Plus className="w-3.5 h-3.5" />
                  )}
                </div>
                <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pl-16">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {limit && faqs.length > limit && (
          <div className="text-center mt-8">
            <a
              href="/contact"
              className="text-sm font-semibold text-secondary hover:text-secondary-700 transition-colors"
            >
              Have more questions? Talk to an expert →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
