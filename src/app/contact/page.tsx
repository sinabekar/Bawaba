import type { Metadata } from "next";
import { Phone, Mail, MessageCircle, MapPin, Clock, Calendar } from "lucide-react";
import MultiStepForm from "@/components/forms/MultiStepForm";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Contact Bawaba",
  description:
    "Get in touch with Bawaba's business setup experts. Book a free consultation, chat on WhatsApp, or send us an email. We respond within 24 hours.",
};

const contactMethods = [
  {
    icon: Phone,
    label: "Phone",
    value: "+968 9000 0000",
    href: "tel:+96890000000",
    description: "Mon–Sat, 8am–6pm Oman time",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@bawaba.om",
    href: "mailto:hello@bawaba.om",
    description: "We reply within 24 hours",
    color: "bg-accent/10 text-accent-600",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat Instantly",
    href: "https://wa.me/96890000000?text=Hi%2C%20I%27d%20like%20to%20discuss%20business%20setup%20in%20Oman.",
    description: "Fastest response channel",
    color: "bg-green-100 text-green-600",
    external: true,
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Muscat, Oman",
    href: "#map",
    description: "Visit us by appointment",
    color: "bg-blue-50 text-blue-600",
  },
];

const officeHours = [
  { day: "Monday – Thursday", hours: "8:00 AM – 6:00 PM" },
  { day: "Friday", hours: "8:00 AM – 12:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 3:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="container-custom relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium mb-6">
              <Calendar className="w-3.5 h-3.5 text-accent" />
              Book a Free Consultation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Let&apos;s talk about<br />
              <span className="text-gradient-accent">your business goals</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Whether you&apos;re ready to start or just exploring your options,
              our team is here to answer your questions with zero pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-14 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              const content = (
                <div className="p-6 rounded-2xl border border-gray-100 hover:border-secondary/30 hover:shadow-card transition-all group">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${method.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
                    {method.label}
                  </p>
                  <p className="font-bold text-gray-900 mb-1">{method.value}</p>
                  <p className="text-xs text-gray-400">{method.description}</p>
                </div>
              );

              if (method.external) {
                return (
                  <a key={method.label} href={method.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                );
              }
              return (
                <a key={method.label} href={method.href}>
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + office info */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Form */}
            <div className="lg:col-span-2">
              <SectionHeader
                badge="Book a Consultation"
                title="Tell us about your goals"
                description="Answer a few quick questions and we'll connect you with the right expert."
                align="left"
                className="mb-8"
              />
              <MultiStepForm />
            </div>

            {/* Office info */}
            <div className="space-y-6">
              {/* Office hours */}
              <div className="p-6 rounded-2xl bg-white border border-gray-100">
                <div className="flex items-center gap-2 mb-5">
                  <Clock className="w-4 h-4 text-secondary" />
                  <h3 className="font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map((h) => (
                    <div key={h.day} className="flex justify-between">
                      <span className="text-sm text-gray-500">{h.day}</span>
                      <span className={`text-sm font-medium ${h.hours === "Closed" ? "text-gray-300" : "text-gray-800"}`}>
                        {h.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendly placeholder */}
              <div className="p-6 rounded-2xl bg-secondary/5 border border-secondary/10">
                <Calendar className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-bold text-primary mb-2">Schedule a Video Call</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Prefer a scheduled video call? Book a time that works for you.
                </p>
                <a
                  href="#"
                  className="block w-full py-3 text-center bg-secondary text-white text-sm font-semibold rounded-xl hover:bg-secondary-700 transition-colors"
                >
                  Book a Time Slot
                </a>
                <p className="text-center text-xs text-gray-400 mt-2">
                  Powered by Calendly (coming soon)
                </p>
              </div>

              {/* WhatsApp */}
              <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
                <MessageCircle className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">WhatsApp — Fastest</h3>
                <p className="text-sm text-gray-600 mb-4">
                  For quick questions, WhatsApp is the fastest way to reach us.
                  We typically respond within minutes.
                </p>
                <a
                  href="https://wa.me/96890000000?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20business%20setup%20in%20Oman."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 text-center bg-green-500 text-white text-sm font-semibold rounded-xl hover:bg-green-600 transition-colors"
                >
                  Open WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-white pb-20" id="map">
        <div className="container-custom">
          <div className="rounded-3xl overflow-hidden border border-gray-100 h-72 bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-400 font-medium">Muscat, Oman</p>
              <p className="text-gray-300 text-sm">Interactive map coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
