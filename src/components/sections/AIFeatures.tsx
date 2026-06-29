import React from "react";
import { Bot, Calculator, FileSearch, ListChecks, Sparkles, MessageSquare } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";

const aiTools = [
  {
    icon: Bot,
    title: "Business Setup Advisor",
    description:
      "AI-powered recommendations for the best business structure, activity, and location based on your goals.",
    status: "Coming Soon",
  },
  {
    icon: FileSearch,
    title: "Visa Eligibility Checker",
    description:
      "Instantly determine which visa category you qualify for based on your investment and nationality.",
    status: "Coming Soon",
  },
  {
    icon: Calculator,
    title: "Company Cost Calculator",
    description:
      "Get an instant estimate of total setup costs — registration fees, visa costs, office requirements, and more.",
    status: "Coming Soon",
  },
  {
    icon: ListChecks,
    title: "Documents Generator",
    description:
      "Automatically generate a personalized document checklist for your specific business type and nationality.",
    status: "Coming Soon",
  },
  {
    icon: MessageSquare,
    title: "AI Chat Assistant",
    description:
      "24/7 intelligent assistant to answer your questions about Oman business regulations, visas, and processes.",
    status: "Coming Soon",
  },
  {
    icon: Sparkles,
    title: "Investment Analyzer",
    description:
      "Analyze investment opportunities, free zones, and industry trends to find the best opportunity for you.",
    status: "Coming Soon",
  },
];

export default function AIFeatures() {
  return (
    <section className="section-padding bg-background relative overflow-hidden" aria-labelledby="ai-heading">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(11,110,79,0.06) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative container-custom">
        <div className="text-center mb-14">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="w-3 h-3" />
            AI-Powered Tools
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Smarter business setup,
            <br />
            <span className="text-gradient-accent">powered by AI</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            We&apos;re building intelligent tools to make business setup in Oman faster,
            cheaper, and more transparent than ever before.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {aiTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.title}
                className="relative p-6 rounded-2xl bg-white border border-gray-100 shadow-card overflow-hidden group hover:border-secondary/30 hover:shadow-card-hover transition-all duration-300"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <Badge variant="muted" className="text-xs">{tool.status}</Badge>
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2">{tool.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{tool.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm">
            Be the first to access our AI tools —{" "}
            <a href="/contact" className="text-secondary font-semibold hover:underline">
              join our early access list
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
