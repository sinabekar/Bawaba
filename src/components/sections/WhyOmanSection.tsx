import React from "react";
import { MapPin, TrendingUp, Shield, BarChart3, Globe, Building2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const reasons = [
  {
    icon: MapPin,
    title: "Strategic Location",
    value: "At the Crossroads",
    description:
      "Oman sits at the intersection of Asia, Africa, and Europe, providing unparalleled access to global trade routes.",
  },
  {
    icon: TrendingUp,
    title: "Stable Economy",
    value: "GDP $105B+",
    description:
      "One of the most stable economies in the Middle East, backed by oil revenues, tourism, and growing sectors.",
  },
  {
    icon: Shield,
    title: "Business Friendly",
    value: "100% Ownership",
    description:
      "Foreign investors can hold 100% ownership in most sectors, with streamlined regulations for new businesses.",
  },
  {
    icon: BarChart3,
    title: "Growing Market",
    value: "Vision 2040",
    description:
      "Oman's Vision 2040 plan is driving massive diversification and investment across key sectors.",
  },
  {
    icon: Globe,
    title: "Free Zones",
    value: "4+ Free Zones",
    description:
      "Special economic zones offer zero taxes, 100% repatriation of capital, and simplified import/export rules.",
  },
  {
    icon: Building2,
    title: "Government Support",
    value: "Pro-Investment",
    description:
      "Active government incentives, streamlined licensing, and dedicated investment authorities support growth.",
  },
];

const stats = [
  { value: "0%", label: "Corporate Tax Rate*", note: "for most businesses" },
  { value: "100%", label: "Foreign Ownership", note: "in most sectors" },
  { value: "4+", label: "Free Zones", note: "with special benefits" },
  { value: "#42", label: "Ease of Doing Business", note: "World Bank Ranking" },
];

export default function WhyOmanSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden" aria-labelledby="why-oman-heading">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container-custom">
        <SectionHeader
          badge="Why Oman"
          title="The smart destination for"
          titleHighlight=" ambitious businesses"
          description="Oman offers a unique combination of stability, strategic location, and business-friendly policies that make it one of the best places to establish a company in the region."
          className="mb-14"
        />

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-secondary/5 to-transparent border border-secondary/10"
            >
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-gray-800">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-0.5">{stat.note}</div>
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-secondary/30 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">
                      {reason.value}
                    </div>
                    <h3 className="text-base font-bold text-primary mb-2">{reason.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          *Tax rates vary by sector and free zone. Consult our advisors for your specific situation.
        </p>
      </div>
    </section>
  );
}
