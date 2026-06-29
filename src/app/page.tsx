import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustSection from "@/components/sections/TrustSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyOmanSection from "@/components/sections/WhyOmanSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import AIFeatures from "@/components/sections/AIFeatures";
import MultiStepForm from "@/components/forms/MultiStepForm";

export const metadata: Metadata = {
  title: "Bawaba — Your Gateway to Business in Oman",
  description:
    "Start your business in Oman with Bawaba. We handle company registration, investor visas, employment visas, and complete business setup for international entrepreneurs and investors.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesSection />
      <WhyOmanSection />
      <HowItWorks />
      <AIFeatures />
      <Testimonials />

      {/* Lead gen form section */}
      <section className="section-padding bg-background" id="get-started" aria-labelledby="form-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Free Consultation
              </span>
              <h2 id="form-heading" className="text-3xl md:text-4xl font-bold text-primary mb-5 leading-tight">
                Tell us about your{" "}
                <span className="text-gradient-accent">business goals</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Complete this short form and a Bawaba expert will reach out within 24 hours
                to map out your personalized business setup plan.
              </p>
              <div className="space-y-4">
                {[
                  "No obligation or commitment required",
                  "Expert advice tailored to your situation",
                  "Clear timeline and cost breakdown",
                  "Available in English, Arabic, Hindi, and more",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <span className="text-sm text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <MultiStepForm />
            </div>
          </div>
        </div>
      </section>

      <FAQSection limit={8} />
      <CTASection />
    </>
  );
}
