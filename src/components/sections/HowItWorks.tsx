import React from "react";
import { Calendar, Briefcase, FileText, Building2, Stamp, Rocket } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Book Consultation",
    description:
      "Schedule a free 30-minute call with our business setup advisor to discuss your goals and requirements.",
  },
  {
    number: "02",
    icon: Briefcase,
    title: "Choose Business Activity",
    description:
      "We help you select the optimal business activity and legal structure for your company in Oman.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Prepare Documents",
    description:
      "Our team provides a personalized document checklist and assists with preparation and attestation.",
  },
  {
    number: "04",
    icon: Building2,
    title: "Company Registration",
    description:
      "We submit your application and handle all government interactions until your CR is issued.",
  },
  {
    number: "05",
    icon: Stamp,
    title: "Visa Processing",
    description:
      "Obtain your investor, employment, or family visas through our streamlined process.",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Start Your Business",
    description:
      "Your company is live. We continue supporting you with PRO services, banking, and ongoing compliance.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden" aria-labelledby="process-heading">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container-custom">
        <SectionHeader
          badge="How It Works"
          title="Six steps to your"
          titleHighlight=" Oman business"
          description="Our streamlined process gets your company up and running as fast as possible — with expert support at every step."
          className="mb-16 [&_h2]:text-white [&_p]:text-white/60 [&_.badge-secondary]:bg-white/10 [&_.badge-secondary]:text-white"
        />

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[calc(50%-1px)] h-full w-0.5 bg-gradient-to-b from-secondary/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group`}
                >
                  {/* Step number */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold text-accent/60 tracking-widest">
                        STEP {step.number}
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed pl-16">
                    {step.description}
                  </p>

                  {/* Arrow to next (for non-last) */}
                  {index < steps.length - 1 && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-secondary/40 border border-secondary/60 flex items-center justify-center z-10 md:hidden">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary text-sm font-bold rounded-xl hover:bg-accent/90 transition-all duration-200 hover:scale-[1.02]"
          >
            Start Your Journey Today
          </a>
          <p className="text-white/40 text-xs mt-3">
            Free consultation. No commitment required.
          </p>
        </div>
      </div>
    </section>
  );
}
