import type { Metadata } from "next";
import { CheckCircle2, Clock, ArrowRight, Stamp, Users, Heart, Shield } from "lucide-react";
import MultiStepForm from "@/components/forms/MultiStepForm";
import CTASection from "@/components/sections/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Visa Services in Oman",
  description:
    "Investor visa, employment visa, and family visa services in Oman. Expert processing, fast turnaround, transparent fees. Book a free consultation today.",
};

const visaTypes = [
  {
    id: "investor",
    icon: Stamp,
    title: "Investor Visa (RP2)",
    description:
      "For foreign nationals who own or invest in an Oman-registered company. Allows you to live and operate your business in Oman with full legal status.",
    eligibility: [
      "Active shareholder in an Oman-registered company",
      "Valid passport with 6+ months validity",
      "Clean background check",
      "Medical clearance certificate",
      "Minimum investment threshold met",
    ],
    documents: [
      "Company Commercial Registration (CR)",
      "Shareholder certificate",
      "Valid passport copy",
      "Medical examination results",
      "Police clearance certificate",
      "Passport-size photographs",
    ],
    timeline: "2–4 weeks",
    validity: "2 years (renewable)",
    color: "secondary",
  },
  {
    id: "employment",
    icon: Users,
    title: "Employment Visa",
    description:
      "For professionals joining an Oman-based employer. Enables foreign nationals to work legally in Oman under an employment contract.",
    eligibility: [
      "Signed employment contract with Oman-registered company",
      "Employer has valid labor quota",
      "Valid educational qualifications (for some roles)",
      "Valid passport",
      "Medical clearance",
    ],
    documents: [
      "Employment offer letter",
      "Passport copy",
      "Educational certificates (attested)",
      "Medical examination results",
      "Police clearance certificate",
      "Employer's labor card",
    ],
    timeline: "2–3 weeks",
    validity: "2 years (renewable)",
    color: "accent",
  },
  {
    id: "family",
    icon: Heart,
    title: "Family Residence Visa",
    description:
      "Reunite your family in Oman. Sponsor your spouse, children, and eligible dependents under your investor or employment residence permit.",
    eligibility: [
      "Sponsor holds valid investor or employment visa",
      "Minimum monthly income of OMR 300+",
      "Suitable accommodation in Oman",
      "Proof of family relationship (marriage/birth certificates)",
    ],
    documents: [
      "Sponsor's residence card (RP)",
      "Marriage certificate (attested for spouse)",
      "Birth certificates (attested for children)",
      "Accommodation lease agreement",
      "Salary certificate",
      "Passport copies of all family members",
    ],
    timeline: "2–3 weeks",
    validity: "Matches sponsor's visa",
    color: "secondary",
  },
];

const colorMap: Record<string, { badge: string; icon: string; border: string }> = {
  secondary: {
    badge: "bg-secondary/10 text-secondary",
    icon: "text-secondary bg-secondary/10",
    border: "border-secondary/20",
  },
  accent: {
    badge: "bg-accent/10 text-accent-600",
    icon: "text-accent-600 bg-accent/10",
    border: "border-accent/20",
  },
};

export default function VisaServicesPage() {
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
              <Stamp className="w-3.5 h-3.5 text-accent" />
              Visa Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
              Oman Visa Services.<br />
              <span className="text-gradient-accent">Done Right.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Investor visas, employment visas, and family visas — processed correctly and
              efficiently by our licensed PRO team. No surprises, no delays.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#visas" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-primary text-sm font-bold rounded-xl hover:bg-accent/90 transition-all">
                Explore Visas <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://wa.me/96890000000" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                Ask a Question
              </a>
            </div>
            {/* Quick stats */}
            <div className="flex flex-wrap gap-5 mt-10">
              {[
                { label: "Avg. processing time", value: "2–4 weeks" },
                { label: "Success rate", value: "99%+" },
                { label: "Visa types offered", value: "3" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-xl font-bold text-accent">{s.value}</span>
                  <span className="text-xs text-white/60">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visa types */}
      <section className="section-padding bg-background" id="visas">
        <div className="container-custom space-y-10">
          {visaTypes.map((visa) => {
            const Icon = visa.icon;
            const colors = colorMap[visa.color];
            return (
              <div key={visa.id} id={visa.id} className={`rounded-3xl border ${colors.border} bg-white overflow-hidden`}>
                <div className="p-8 md:p-10">
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${colors.icon}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-primary mb-1">{visa.title}</h2>
                      <p className="text-gray-600 leading-relaxed">{visa.description}</p>
                    </div>
                  </div>

                  {/* Timeline & validity */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 border border-gray-100">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-700">
                        <span className="text-gray-400 mr-1">Processing:</span> {visa.timeline}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 border border-gray-100">
                      <Shield className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-700">
                        <span className="text-gray-400 mr-1">Validity:</span> {visa.validity}
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
                        Eligibility Requirements
                      </h3>
                      <ul className="space-y-2.5">
                        {visa.eligibility.map((req) => (
                          <li key={req} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
                        Required Documents
                      </h3>
                      <ul className="space-y-2.5">
                        {visa.documents.map((doc) => (
                          <li key={doc} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-accent-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <a
                      href="#get-started"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-white text-sm font-semibold rounded-xl hover:bg-secondary-700 transition-colors"
                    >
                      Apply for {visa.title.split(" ")[0]} Visa
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-white" id="get-started">
        <div className="container-custom max-w-xl">
          <SectionHeader
            badge="Apply Now"
            title="Start your visa application"
            description="Tell us about your visa requirements and our PRO team will handle the rest."
            className="mb-10"
          />
          <MultiStepForm />
        </div>
      </section>

      <CTASection title="Need help with your Oman visa?" subtitle="Our PRO team has processed thousands of visas. We know exactly what it takes." />
    </>
  );
}
