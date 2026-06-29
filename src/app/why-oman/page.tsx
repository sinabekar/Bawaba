import type { Metadata } from "next";
import { MapPin, TrendingUp, Shield, Globe, Building2, Users, Zap, Award, BarChart3, ArrowRight } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Why Invest in Oman",
  description:
    "Discover why Oman is one of the best destinations for business and investment. 100% foreign ownership, strategic location, stable economy, free zones, and government support.",
};

const keyFacts = [
  { value: "0%", label: "Personal Income Tax", icon: Shield },
  { value: "15%", label: "Max Corporate Tax", icon: TrendingUp },
  { value: "#42", label: "Ease of Doing Business", icon: Award },
  { value: "$105B+", label: "GDP (2023)", icon: BarChart3 },
  { value: "100%", label: "Foreign Ownership (most sectors)", icon: Globe },
  { value: "4.5M+", label: "Population & Growing", icon: Users },
];

const advantages = [
  {
    icon: MapPin,
    title: "Strategic Geographic Location",
    description:
      "Oman sits at the crossroads of Asia, Africa, Europe, and the Indian subcontinent. With access to the Indian Ocean, Gulf of Oman, and major shipping lanes, Oman is a natural hub for global trade. The Port of Sohar and Port of Salalah are among the region's most modern logistics hubs.",
  },
  {
    icon: Shield,
    title: "Political Stability & Safety",
    description:
      "Oman has maintained remarkable political stability for decades. The country is consistently ranked as one of the safest in the world, with an extremely low crime rate and a neutral foreign policy that enables strong international business relationships.",
  },
  {
    icon: Building2,
    title: "Business-Friendly Regulations",
    description:
      "The 2019 Foreign Capital Investment Law enables 100% foreign ownership across most sectors. Oman has streamlined company registration, simplified visa processes, and established dedicated investment authorities to support foreign investors.",
  },
  {
    icon: TrendingUp,
    title: "Vision 2040 — Massive Investment in Diversification",
    description:
      "Oman's Vision 2040 is driving a historic diversification of the economy. The government is investing billions into tourism, manufacturing, logistics, technology, mining, and renewable energy — creating significant opportunities for early investors.",
  },
  {
    icon: Zap,
    title: "Free Zones with Maximum Benefits",
    description:
      "Oman's free zones — including Sohar Freezone, Salalah Free Zone, Knowledge Oasis Muscat, and Duqm Special Economic Zone — offer zero corporate tax, 100% repatriation of capital, duty-free import/export, and simplified regulations.",
  },
  {
    icon: Globe,
    title: "Tax-Advantaged Environment",
    description:
      "There is no personal income tax in Oman for residents. Corporate tax is 15% (below many other Gulf states), with significant exemptions for small businesses and free zone entities. VAT stands at just 5%.",
  },
];

const freeZones = [
  {
    name: "Sohar Freezone",
    focus: "Manufacturing, Logistics, Industrial",
    location: "Sohar, Al Batinah",
    highlights: ["0% corporate tax", "Port access", "1M+ m² of land"],
  },
  {
    name: "Salalah Freezone",
    focus: "Logistics, Manufacturing, Trade",
    location: "Salalah, Dhofar",
    highlights: ["Port of Salalah", "Global shipping hub", "Full repatriation"],
  },
  {
    name: "Knowledge Oasis Muscat",
    focus: "Technology, Knowledge Industries",
    location: "Muscat",
    highlights: ["Tech focus", "Academic partnerships", "Government support"],
  },
  {
    name: "Duqm SEZ",
    focus: "Petrochemicals, Heavy Industry, Tourism",
    location: "Duqm, Al Wusta",
    highlights: ["Largest in region", "Deep-sea port", "Fully integrated city"],
  },
];

const opportunities = [
  { sector: "Tourism & Hospitality", growth: "High", reason: "World-class natural beauty, government investment" },
  { sector: "Technology & IT", growth: "Very High", reason: "Vision 2040 digital economy focus" },
  { sector: "Logistics & Freight", growth: "High", reason: "Strategic ports, new infrastructure" },
  { sector: "Food & Beverage", growth: "Medium-High", reason: "Growing middle class, import dependency" },
  { sector: "Healthcare", growth: "High", reason: "Underserved market, government investment" },
  { sector: "Manufacturing", growth: "Medium-High", reason: "Industrial zones, export potential" },
  { sector: "Renewable Energy", growth: "Very High", reason: "Vision 2040 sustainability targets" },
  { sector: "Education", growth: "Medium-High", reason: "Growing population, quality demand" },
];

export default function WhyOmanPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="container-custom relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium mb-6">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              Why Invest in Oman
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
              Oman: The Smart<br />
              <span className="text-gradient-accent">Business Destination</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Stable, strategic, and business-friendly — Oman is one of the most
              underrated investment destinations in the world. Here&apos;s why the most
              ambitious investors are choosing Oman.
            </p>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="py-14 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {keyFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label} className="text-center p-5 rounded-2xl border border-gray-100 bg-background">
                  <Icon className="w-5 h-5 text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">{fact.value}</div>
                  <div className="text-xs text-gray-500 leading-tight">{fact.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="Competitive Advantages"
            title="Why savvy investors choose Oman"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((adv) => {
              const Icon = adv.icon;
              return (
                <div key={adv.title} className="p-8 rounded-2xl border border-gray-100 bg-white hover:border-secondary/30 hover:shadow-card transition-all">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{adv.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{adv.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Free zones */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative container-custom">
          <SectionHeader
            badge="Free Zones"
            title="Oman's world-class free zones"
            description="Set up in one of Oman's free economic zones for maximum tax benefits, simplified regulations, and strategic logistics access."
            className="mb-12 [&_h2]:text-white [&_p]:text-white/60"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {freeZones.map((zone) => (
              <div key={zone.name} className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">{zone.name}</h3>
                  <span className="text-xs text-accent font-medium px-2.5 py-1 rounded-full bg-accent/10">
                    {zone.location}
                  </span>
                </div>
                <p className="text-sm text-white/60 mb-4 font-medium">{zone.focus}</p>
                <ul className="space-y-2">
                  {zone.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-white/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business opportunities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Opportunities"
            title="High-growth sectors in Oman"
            description="Identify the right opportunity for your investment. These sectors are seeing the most growth under Oman's Vision 2040 economic plan."
            className="mb-12"
          />
          <div className="overflow-hidden rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-6 py-4 font-semibold text-gray-900">Sector</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-900">Growth Potential</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-900 hidden md:table-cell">Key Drivers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {opportunities.map((opp) => (
                  <tr key={opp.sector} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{opp.sector}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${
                        opp.growth === "Very High"
                          ? "bg-secondary/10 text-secondary"
                          : opp.growth === "High"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        {opp.growth}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 hidden md:table-cell">{opp.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-secondary text-white text-sm font-semibold rounded-xl hover:bg-secondary-700 transition-colors"
            >
              Explore Your Investment Opportunity
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to invest in Oman?"
        subtitle="Book a free consultation to explore the best opportunities for your goals."
      />
    </>
  );
}
