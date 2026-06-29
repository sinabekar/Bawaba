import type { Metadata } from "next";
import { Heart, Target, Eye, Shield, Users, TrendingUp, Star } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "About Bawaba",
  description:
    "Learn about Bawaba — our mission, vision, values, and the team helping international entrepreneurs establish businesses in Oman.",
};

const values = [
  {
    icon: Shield,
    title: "Integrity First",
    description: "We operate with complete transparency. No hidden fees, no misleading promises — only honest, straightforward guidance.",
  },
  {
    icon: Users,
    title: "Client-Centered",
    description: "Every decision we make is in the best interest of our clients. Your success is our success.",
  },
  {
    icon: TrendingUp,
    title: "Results-Driven",
    description: "We measure ourselves by one thing: getting your business established quickly and correctly, every time.",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We hold ourselves to the highest professional standards in everything from advice to document handling to communication.",
  },
  {
    icon: Heart,
    title: "Genuine Care",
    description: "We genuinely care about our clients' journeys. Many come to us as strangers and leave as long-term partners.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "We keep you informed at every step. You'll always know exactly where your application stands.",
  },
];

const teamMembers = [
  {
    name: "Abdullah Al-Balushi",
    role: "CEO & Co-Founder",
    background: "Former Ministry of Commerce official with 15 years of regulatory experience.",
    initials: "AB",
    color: "bg-secondary",
  },
  {
    name: "Priya Sharma",
    role: "Head of Business Setup",
    background: "MBA from London Business School. Specialist in GCC company formation and FDI.",
    initials: "PS",
    color: "bg-blue-600",
  },
  {
    name: "Omar Al-Rashidi",
    role: "PRO & Visa Director",
    background: "10+ years handling visa and immigration cases for multinational companies in Oman.",
    initials: "OR",
    color: "bg-accent",
  },
  {
    name: "Li Wei",
    role: "International Relations",
    background: "Specialist in supporting Chinese and Asian investors entering the Oman market.",
    initials: "LW",
    color: "bg-teal-600",
  },
];

const milestones = [
  { year: "2019", title: "Bawaba Founded", desc: "Started with a mission to simplify business setup in Oman for international investors." },
  { year: "2020", title: "100th Client", desc: "Served our 100th business client despite global challenges. Proved our model works." },
  { year: "2021", title: "Visa Division Launch", desc: "Expanded to full PRO and visa services to provide end-to-end support." },
  { year: "2022", title: "500 Businesses Registered", desc: "Milestone of 500 company registrations from clients across 15+ countries." },
  { year: "2024", title: "Digital Platform Launch", desc: "Launched our online portal for document tracking and application status updates." },
  { year: "2025", title: "AI Tools in Development", desc: "Building AI-powered tools to make business setup faster and smarter." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="container-custom relative max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium mb-6">
            About Bawaba
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            We&apos;re building the gateway<br />
            <span className="text-gradient-accent">every entrepreneur needs.</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Bawaba was founded with a simple belief: setting up a business in Oman should be
            simple, transparent, and accessible for anyone in the world — regardless of where
            they&apos;re from or how much they know about Oman&apos;s regulations.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-secondary/5 border border-secondary/10">
              <Target className="w-8 h-8 text-secondary mb-4" />
              <h2 className="text-2xl font-bold text-primary mb-3">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To make business setup in Oman as simple and transparent as possible —
                removing every unnecessary barrier for international entrepreneurs and investors
                who want to establish their presence in this remarkable country.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-accent/5 border border-accent/10">
              <Eye className="w-8 h-8 text-accent-600 mb-4" />
              <h2 className="text-2xl font-bold text-primary mb-3">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the leading business gateway platform in Oman — combining expert human
                consultants with intelligent technology to deliver a world-class experience for
                every international business looking to grow in the Sultanate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <SectionHeader
            badge="Our Story"
            title="How Bawaba began"
            align="left"
            className="mb-8"
          />
          <div className="prose prose-gray max-w-none space-y-4 text-gray-600 text-base leading-relaxed">
            <p>
              Bawaba was born from frustration. Our founders — a team of Omani business
              professionals and international entrepreneurs — experienced firsthand how difficult,
              opaque, and inconsistent the business setup process in Oman could be.
            </p>
            <p>
              Forms were rejected without explanation. Processing times were unpredictable.
              Advisors charged high fees while delivering confusing, incomplete guidance.
              International investors were walking away from genuine opportunities simply
              because they couldn&apos;t navigate the bureaucracy.
            </p>
            <p>
              We built Bawaba to fix that. The name means &ldquo;gateway&rdquo; in Arabic —
              because that&apos;s exactly what we are: the gateway between ambitious people
              and their business in Oman. A door that should always be open.
            </p>
            <p>
              Since 2019, we&apos;ve helped more than 500 businesses register in Oman,
              processed thousands of visas, and supported entrepreneurs from over 15 countries
              in building something great here. We&apos;re just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Our Values"
            title="What we stand for"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="p-6 rounded-2xl border border-gray-100 hover:border-secondary/30 hover:shadow-card transition-all">
                  <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="Our Team"
            title="The people behind Bawaba"
            description="A diverse team of Omani nationals and international experts united by a passion for helping others succeed."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {teamMembers.map((member) => (
              <div key={member.name} className="p-6 rounded-2xl bg-white border border-gray-100 text-center hover:shadow-card transition-all">
                <div className={`w-16 h-16 ${member.color} rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-4`}>
                  {member.initials}
                </div>
                <h3 className="font-bold text-primary mb-0.5">{member.name}</h3>
                <p className="text-xs text-secondary font-semibold mb-3">{member.role}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative container-custom">
          <SectionHeader
            badge="Our Journey"
            title="Milestones that matter"
            className="mb-12 [&_h2]:text-white [&_.badge-secondary]:bg-white/10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {milestones.map((m) => (
              <div key={m.year} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-3xl font-bold text-accent mb-2">{m.year}</div>
                <h3 className="text-white font-semibold mb-1.5">{m.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Join 500+ businesses that chose Bawaba"
        subtitle="Let our experienced team guide you to a successful business setup in Oman."
      />
    </>
  );
}
