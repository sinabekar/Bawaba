"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, CheckCircle2, Star, Building2, Users, Award } from "lucide-react";

const stats = [
  { value: "500+", label: "Businesses Registered" },
  { value: "48h", label: "Avg. Processing Time" },
  { value: "15+", label: "Countries Served" },
  { value: "98%", label: "Client Satisfaction" },
];

const trustBadges = [
  "Free Initial Consultation",
  "Licensed Consultants",
  "Transparent Pricing",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container-custom pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              Your Gateway to Business in Oman
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Start Your Business
                <br />
                Journey in{" "}
                <span className="text-gradient-accent">Oman.</span>
              </h1>
              <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-lg mt-6">
                From company registration and investor visas to complete business setup,
                Bawaba helps entrepreneurs and investors establish their presence in Oman
                with confidence.
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-1.5 text-sm text-white/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  {badge}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-primary text-sm font-bold rounded-xl hover:bg-accent/90 transition-all duration-200 hover:scale-[1.02]"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/96890000000?text=Hi%2C%20I%27m%20interested%20in%20setting%20up%20a%20business%20in%20Oman."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {["A", "B", "C", "D", "E"].map((char, i) => (
                  <div
                    key={char}
                    className="w-8 h-8 rounded-full border-2 border-primary bg-secondary/60 flex items-center justify-center text-white text-xs font-semibold"
                    style={{ zIndex: 5 - i }}
                  >
                    {char}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-xs text-white/60 mt-0.5">
                  Trusted by 500+ businesses
                </p>
              </div>
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative hidden lg:block">
            <HeroIllustration />
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-5 text-center border border-white/20"
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-white/60 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="relative">
      {/* Main card */}
      <div className="glass rounded-3xl p-8 border border-white/20 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-white/60">Company Status</p>
              <p className="text-sm font-semibold text-white">Registration Active</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/20 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-xs text-green-300 font-medium">Active</span>
          </div>
        </div>

        {/* Progress steps */}
        <div className="space-y-3 mb-6">
          {[
            { label: "Business Activity Approved", done: true },
            { label: "Company Registration (CR)", done: true },
            { label: "Investor Visa Processing", done: false, active: true },
            { label: "Bank Account Setup", done: false },
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                  step.done
                    ? "bg-green-500/20 border border-green-500/50"
                    : step.active
                    ? "bg-accent/20 border border-accent/50"
                    : "bg-white/10 border border-white/20"
                }`}
              >
                {step.done ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                ) : step.active ? (
                  <div className="w-2 h-2 rounded-full bg-accent" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                )}
              </div>
              <span
                className={`text-sm ${
                  step.done
                    ? "text-white/70 line-through"
                    : step.active
                    ? "text-white font-medium"
                    : "text-white/40"
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="flex items-center justify-between py-3 border-t border-white/10">
          <span className="text-xs text-white/50">Estimated completion</span>
          <span className="text-xs font-semibold text-accent">7 business days</span>
        </div>
      </div>

      {/* Floating cards */}
      <div className="absolute -top-5 -right-5 glass rounded-2xl p-4 border border-white/20 shadow-lg animate-float">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
            <Award className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-xs text-white/60">Success Rate</p>
            <p className="text-sm font-bold text-white">98.7%</p>
          </div>
        </div>
      </div>

      <div
        className="absolute -bottom-5 -left-5 glass rounded-2xl p-4 border border-white/20 shadow-lg animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
            <Users className="w-4 h-4 text-green-400" />
          </div>
          <div>
            <p className="text-xs text-white/60">New this month</p>
            <p className="text-sm font-bold text-white">47 businesses</p>
          </div>
        </div>
      </div>
    </div>
  );
}
