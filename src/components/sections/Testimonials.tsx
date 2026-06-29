import React from "react";
import { Star, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    quote:
      "Bawaba made our Oman expansion effortless. From company registration to investor visas, everything was handled professionally and faster than we expected.",
    name: "Ahmed Al-Rashidi",
    role: "CEO",
    company: "Al-Rashidi Trading LLC",
    country: "UAE",
    rating: 5,
    initials: "AR",
  },
  {
    quote:
      "I was nervous about setting up a business in a new country, but Bawaba's team guided me through every step. The process was transparent and incredibly smooth.",
    name: "Sarah Chen",
    role: "Founder",
    company: "SC Design Studio",
    country: "United Kingdom",
    rating: 5,
    initials: "SC",
  },
  {
    quote:
      "As an Indian entrepreneur, I needed experts who understood Oman's regulations. Bawaba exceeded all expectations. Highly recommend to anyone expanding to Oman.",
    name: "Priya Nair",
    role: "Director",
    company: "InnoTech Solutions",
    country: "India",
    rating: 5,
    initials: "PN",
  },
  {
    quote:
      "The family visa process was handled seamlessly. We relocated to Oman within 3 weeks of starting the process. Bawaba delivered on every promise.",
    name: "Mohammed Al-Balushi",
    role: "Operations Manager",
    company: "Gulf Logistics Co.",
    country: "Oman",
    rating: 5,
    initials: "MB",
  },
  {
    quote:
      "Professional, responsive, and genuinely helpful. They saved us weeks of bureaucratic hassle. Bawaba is the partner every investor in Oman needs.",
    name: "David Kowalski",
    role: "Investment Manager",
    company: "European Capital Group",
    country: "Poland",
    rating: 5,
    initials: "DK",
  },
  {
    quote:
      "The team at Bawaba has an exceptional understanding of Oman's business landscape. They helped us identify the right free zone and structure for our tech company.",
    name: "Liu Wei",
    role: "Co-Founder",
    company: "Silk Road Tech",
    country: "China",
    rating: 5,
    initials: "LW",
  },
];

const avatarColors = [
  "bg-secondary",
  "bg-accent",
  "bg-blue-600",
  "bg-purple-600",
  "bg-rose-600",
  "bg-teal-600",
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-background" aria-labelledby="testimonials-heading">
      <div className="container-custom">
        <SectionHeader
          badge="Testimonials"
          title="Trusted by businesses"
          titleHighlight=" worldwide"
          description="Join hundreds of entrepreneurs and investors who have established their Oman business with Bawaba."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className="relative p-7 rounded-2xl bg-white border border-gray-100 shadow-card hover:shadow-card-hover hover:border-secondary/20 transition-all duration-300"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-gray-100" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 relative">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                <div
                  className={`w-10 h-10 rounded-full ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-gray-900 truncate">{t.name}</div>
                  <div className="text-xs text-gray-500 truncate">
                    {t.role}, {t.company}
                  </div>
                </div>
                <div className="ml-auto flex-shrink-0">
                  <span className="text-xs bg-gray-50 text-gray-400 px-2 py-1 rounded-full border border-gray-100">
                    {t.country}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto text-center">
          <div>
            <div className="text-2xl font-bold text-primary">4.9/5</div>
            <div className="text-xs text-gray-500 mt-1">Average Rating</div>
          </div>
          <div className="border-x border-gray-100">
            <div className="text-2xl font-bold text-primary">500+</div>
            <div className="text-xs text-gray-500 mt-1">Happy Clients</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">98%</div>
            <div className="text-xs text-gray-500 mt-1">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
