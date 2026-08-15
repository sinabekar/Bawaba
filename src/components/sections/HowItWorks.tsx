"use client";

import React from "react";
import { Calendar, Briefcase, FileText, Building2, Stamp, Rocket, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import SectionHeader from "@/components/ui/SectionHeader";
import { whatsappLink } from "@/lib/whatsapp";

const icons = [Calendar, Briefcase, FileText, Building2, Stamp, Rocket];

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");
  const tw = useTranslations("WhatsApp");
  const steps = t.raw("steps") as { title: string; description: string }[];

  return (
    <section className="section-padding bg-primary relative overflow-hidden" aria-labelledby="process-heading">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 end-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container-custom">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          titleHighlight={t("titleHighlight")}
          description={t("description")}
          className="mb-16 [&_h2]:text-white [&_p]:text-white/60 [&_.badge-secondary]:bg-white/10 [&_.badge-secondary]:text-white"
        />

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 start-[calc(50%-1px)] h-full w-0.5 bg-gradient-to-b from-secondary/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={step.title}
                  className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                >
                  {/* Step number */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold text-accent/60 tracking-widest">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed ps-16">{step.description}</p>

                  {/* Connector dot (for non-last) */}
                  {index < steps.length - 1 && (
                    <div className="absolute -bottom-3 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 w-6 h-6 rounded-full bg-secondary/40 border border-secondary/60 flex items-center justify-center z-10 md:hidden">
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
            href={whatsappLink(tw("messages.general"))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary text-sm font-bold rounded-xl hover:bg-accent/90 transition-all duration-200 hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4" />
            {t("ctaTitle")}
          </a>
          <p className="text-white/40 text-xs mt-3">{t("ctaSubtitle")}</p>
        </div>
      </div>
    </section>
  );
}
