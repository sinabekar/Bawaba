import type { Metadata } from "next";
import { CheckCircle2, Clock, FileText, Building2, ArrowRight, Shield, Globe, TrendingUp } from "lucide-react";
import MultiStepForm from "@/components/forms/MultiStepForm";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Company Registration in Oman",
  description:
    "Register your company in Oman with expert guidance. We handle LLC formation, CR issuance, business activity selection, and all government interactions. Fast, transparent, affordable.",
};

const structures = [
  {
    name: "Limited Liability Company (LLC)",
    description:
      "The most popular structure for foreign investors. Offers limited liability, flexible management, and can be 100% foreign-owned in most sectors.",
    bestFor: "Trading, services, general business",
    minCapital: "OMR 150,000 (some activities)",
    timeline: "5–10 days",
    recommended: true,
  },
  {
    name: "Sole Proprietorship",
    description:
      "Simplest form of business, owned by one individual. Best for small businesses and freelancers. Full personal liability.",
    bestFor: "Small businesses, consultants",
    minCapital: "Varies",
    timeline: "3–5 days",
    recommended: false,
  },
  {
    name: "Branch Office",
    description:
      "Extension of a foreign parent company in Oman. Allows operations without forming a separate legal entity. Requires a local agent.",
    bestFor: "Established foreign companies",
    minCapital: "No minimum",
    timeline: "10–15 days",
    recommended: false,
  },
  {
    name: "Free Zone Company",
    description:
      "Set up in one of Oman's free zones (Sohar, Salalah, Duqm, KOM) for maximum tax benefits and simplified regulations.",
    bestFor: "Manufacturing, logistics, tech",
    minCapital: "Varies by zone",
    timeline: "7–14 days",
    recommended: false,
  },
];

const benefits = [
  {
    icon: Globe,
    title: "100% Foreign Ownership",
    description: "Own your business outright in most sectors — no need for a local partner.",
  },
  {
    icon: Shield,
    title: "Limited Liability",
    description: "Protect your personal assets — your liability is limited to your capital investment.",
  },
  {
    icon: TrendingUp,
    title: "Tax Advantages",
    description: "0% personal income tax and competitive corporate tax rates compared to Western markets.",
  },
  {
    icon: Building2,
    title: "Formal Business Presence",
    description: "A registered company gives you credibility to sign contracts, hire staff, and open bank accounts.",
  },
];

const documents = [
  "Passport copies of all shareholders and directors",
  "Proof of address (utility bill or bank statement)",
  "Bank reference letter (from home country)",
  "Proposed company name (3 options recommended)",
  "Business activity description",
  "Memorandum & Articles of Association (drafted by us)",
  "Power of Attorney (if applying remotely)",
  "No Objection Certificate (if required by nationality)",
];

const process = [
  { step: "1", title: "Name Reservation", time: "1–2 days", desc: "We reserve your chosen company name with the Ministry of Commerce." },
  { step: "2", title: "Document Preparation", time: "2–3 days", desc: "We prepare and review all required documentation with you." },
  { step: "3", title: "Ministry Submission", time: "1 day", desc: "Documents submitted to Oman's Ministry of Commerce." },
  { step: "4", title: "CR Issuance", time: "3–7 days", desc: "Commercial Registration (CR) certificate issued." },
  { step: "5", title: "Post-Registration", time: "3–5 days", desc: "Tax registration, labor cards, and additional permits secured." },
];

export default function CompanyRegistrationPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container-custom relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium mb-6">
              <Building2 className="w-3.5 h-3.5 text-accent" />
              Company Registration
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
              Register Your Company<br />
              <span className="text-gradient-accent">in Oman Today</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              We handle everything — from business activity selection and document preparation
              to Commercial Registration (CR) issuance. Fast, transparent, and stress-free.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-primary text-sm font-bold rounded-xl hover:bg-accent/90 transition-all"
              >
                Start Registration <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/96890000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                Ask a Question
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Why Register in Oman"
            title="The benefits of an Oman-registered company"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="flex gap-5 p-6 rounded-2xl border border-gray-100 bg-white hover:border-secondary/30 hover:shadow-card transition-all">
                  <div className="w-11 h-11 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1.5">{b.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{b.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Structures */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="Business Structures"
            title="Choose the right structure for your business"
            description="Not sure which structure is best? Our advisors will guide you to the optimal choice based on your activity, ownership, and goals."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {structures.map((s) => (
              <div
                key={s.name}
                className={`relative p-7 rounded-2xl border bg-white transition-all ${
                  s.recommended
                    ? "border-secondary shadow-card"
                    : "border-gray-100 hover:border-secondary/30 hover:shadow-card"
                }`}
              >
                {s.recommended && (
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-secondary text-white text-xs font-bold">
                    Recommended
                  </span>
                )}
                <h3 className="text-base font-bold text-primary mb-2">{s.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{s.description}</p>
                <div className="space-y-2 border-t border-gray-100 pt-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Best for</span>
                    <span className="font-medium text-gray-800">{s.bestFor}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Min. capital</span>
                    <span className="font-medium text-gray-800">{s.minCapital}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Timeline</span>
                    <span className="font-semibold text-secondary">{s.timeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required documents */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <SectionHeader
            badge="Required Documents"
            title="What you'll need to provide"
            description="We'll give you a personalized checklist in your free consultation. Here's what's typically required:"
            className="mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {documents.map((doc) => (
              <div key={doc} className="flex items-start gap-3 p-4 rounded-xl bg-background border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <SectionHeader
            badge="Registration Process"
            title="How we get your company registered"
            className="mb-12 [&_h2]:text-white [&_.badge-secondary]:bg-white/10"
          />
          <div className="max-w-2xl mx-auto">
            {process.map((p, i) => (
              <div key={p.step} className="flex gap-5 pb-8 relative">
                {i < process.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-white/10" />
                )}
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-accent font-bold text-sm z-10">
                  {p.step}
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-white font-semibold">{p.title}</h3>
                    <span className="flex items-center gap-1 text-xs text-white/50">
                      <Clock className="w-3 h-3" />
                      {p.time}
                    </span>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-background" id="get-started">
        <div className="container-custom max-w-xl">
          <SectionHeader
            badge="Get Started"
            title="Register your company today"
            description="Fill in the form below and a business setup expert will contact you within 24 hours."
            className="mb-10"
          />
          <MultiStepForm />
        </div>
      </section>

      <FAQSection limit={6} />
      <CTASection title="Ready to register your Oman company?" subtitle="Let our experts handle everything while you focus on your business." />
    </>
  );
}
