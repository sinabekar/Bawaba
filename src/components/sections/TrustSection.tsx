import React from "react";
import { UserCheck, Zap, Eye, HeartHandshake, Briefcase, ShieldCheck } from "lucide-react";

const trustItems = [
  {
    icon: UserCheck,
    title: "Professional Consultants",
    description: "Licensed business experts with deep knowledge of Oman's regulatory environment.",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Average company registration completed in 5–7 business days.",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description: "No hidden fees. Full visibility into every step of your application.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "A personal advisor guides you from day one through launch.",
  },
  {
    icon: Briefcase,
    title: "Business Experts",
    description: "Specialists in company formation, visas, and Oman's free zones.",
  },
  {
    icon: ShieldCheck,
    title: "High Client Satisfaction",
    description: "98% of clients rate us Excellent. We don't stop until you're set up.",
  },
];

const logos = [
  "Muscat Bay", "Al Mouj", "Port Sultan Qaboos", "Knowledge Oasis Muscat", "Duqm SEZ",
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="trust-heading">
      <div className="container-custom">
        {/* Partner logos strip */}
        <div className="text-center mb-14">
          <p className="text-sm text-gray-400 font-medium uppercase tracking-widest mb-6">
            Trusted by clients from across the globe
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((name) => (
              <span key={name} className="text-gray-300 font-bold text-sm md:text-base tracking-wide">
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-14" />

        {/* Trust cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-secondary/30 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-11 h-11 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-base font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
