import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: "dark" | "light" | "accent";
}

export default function CTASection({
  title = "Ready to start your business in Oman?",
  subtitle = "Book a free 30-minute consultation with our experts. No commitment, no sales pressure — just expert guidance.",
  variant = "dark",
}: CTASectionProps) {
  const bgClass =
    variant === "dark"
      ? "gradient-hero"
      : variant === "accent"
      ? "bg-secondary"
      : "bg-background";

  const titleClass = variant === "light" ? "text-primary" : "text-white";
  const subtitleClass = variant === "light" ? "text-gray-600" : "text-white/70";

  return (
    <section className={`py-20 relative overflow-hidden ${bgClass}`} aria-labelledby="cta-heading">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container-custom">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div>
            <h2 id="cta-heading" className={`text-3xl md:text-4xl font-bold mb-4 ${titleClass}`}>
              {title}
            </h2>
            <p className={`text-base md:text-lg leading-relaxed ${subtitleClass}`}>
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary text-sm font-bold rounded-xl hover:bg-accent/90 transition-all duration-200 hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4" />
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/96890000000?text=Hi%2C%20I%27d%20like%20to%20start%20a%20business%20in%20Oman."
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl border transition-all duration-200 ${
                variant === "light"
                  ? "bg-white text-gray-800 border-gray-200 hover:bg-gray-50"
                  : "bg-white/10 text-white border-white/20 hover:bg-white/20"
              }`}
            >
              <MessageCircle className="w-4 h-4 text-green-400" />
              Chat on WhatsApp
            </a>
          </div>

          <p className={`text-xs ${variant === "light" ? "text-gray-400" : "text-white/40"}`}>
            Free consultation • No obligation • Experts available Monday – Saturday
          </p>
        </div>
      </div>
    </section>
  );
}
