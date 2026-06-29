import React from "react";
import Link from "next/link";
import { Building2, Stamp, Users, Heart, MessageSquare, ArrowRight, TrendingUp, BookOpen } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    icon: Building2,
    title: "Company Registration",
    description:
      "Full-service company formation in Oman. We handle everything from business activity selection to CR issuance.",
    href: "/company-registration",
    badge: "Most Popular",
    color: "secondary",
  },
  {
    icon: Stamp,
    title: "Investor Visa",
    description:
      "Secure your investor visa to live and operate your business in Oman without restrictions.",
    href: "/visa-services#investor",
    badge: null,
    color: "accent",
  },
  {
    icon: Users,
    title: "Employment Visa",
    description:
      "Bring skilled professionals to your Oman business with proper employment visa processing.",
    href: "/visa-services#employment",
    badge: null,
    color: "secondary",
  },
  {
    icon: Heart,
    title: "Family Visa",
    description:
      "Reunite your family in Oman. We process family residence visas quickly and smoothly.",
    href: "/visa-services#family",
    badge: null,
    color: "accent",
  },
  {
    icon: MessageSquare,
    title: "Business Consultation",
    description:
      "Expert guidance on business structures, regulations, free zones, and investment opportunities in Oman.",
    href: "/contact",
    badge: null,
    color: "secondary",
  },
  {
    icon: TrendingUp,
    title: "Coming Soon",
    description:
      "PRO services, accounting, trademark registration, bank account opening, and investment advisory — expanding soon.",
    href: "#",
    badge: "Coming Soon",
    color: "muted",
    disabled: true,
  },
];

const colorMap: Record<string, { bg: string; icon: string }> = {
  secondary: { bg: "bg-secondary/10", icon: "text-secondary" },
  accent: { bg: "bg-accent/10", icon: "text-accent-600" },
  muted: { bg: "bg-gray-100", icon: "text-gray-400" },
};

export default function ServicesSection() {
  return (
    <section className="section-padding bg-background" aria-labelledby="services-heading">
      <div className="container-custom">
        <SectionHeader
          badge="Our Services"
          title="Everything you need to"
          titleHighlight=" start and grow"
          description="From company registration to visa processing, we provide end-to-end support for every stage of your Oman business journey."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            const colors = colorMap[service.color];

            return (
              <div
                key={service.title}
                className={`group relative p-7 rounded-2xl border border-gray-100 bg-white shadow-card transition-all duration-300 ${
                  service.disabled
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:border-secondary/30 hover:shadow-card-hover hover:-translate-y-0.5"
                }`}
              >
                {service.badge && (
                  <div
                    className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-semibold ${
                      service.badge === "Most Popular"
                        ? "bg-secondary/10 text-secondary"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {service.badge}
                  </div>
                )}

                <div
                  className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-5`}
                >
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>

                <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                {!service.disabled && (
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:gap-2.5 transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Not sure which service you need?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
