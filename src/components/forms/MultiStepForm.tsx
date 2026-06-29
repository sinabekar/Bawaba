"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Check, Building2, Stamp, Users, Heart, MessageSquare } from "lucide-react";

type Step = {
  id: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  { id: 1, title: "Service Interest", description: "What can we help you with?" },
  { id: 2, title: "Your Nationality", description: "Where are you from?" },
  { id: 3, title: "Current Location", description: "Where are you based now?" },
  { id: 4, title: "Business Activity", description: "What will your business do?" },
  { id: 5, title: "Investment Budget", description: "Approximate investment size?" },
  { id: 6, title: "Contact Details", description: "How should we reach you?" },
];

const services = [
  { id: "company-registration", label: "Company Registration", icon: Building2 },
  { id: "investor-visa", label: "Investor Visa", icon: Stamp },
  { id: "employment-visa", label: "Employment Visa", icon: Users },
  { id: "family-visa", label: "Family Visa", icon: Heart },
  { id: "consultation", label: "Business Consultation", icon: MessageSquare },
];

const nationalities = [
  "Indian", "Pakistani", "British", "American", "Chinese", "UAE National",
  "Saudi National", "Egyptian", "Jordanian", "German", "French", "Other",
];

const countries = [
  "United Arab Emirates", "India", "Pakistan", "United Kingdom", "United States",
  "China", "Saudi Arabia", "Egypt", "Germany", "France", "Oman", "Other",
];

const activities = [
  "Trading / Import-Export", "Technology / IT Services", "Consulting",
  "Construction / Contracting", "Food & Beverage", "Healthcare",
  "Education", "Manufacturing", "Logistics / Freight",
  "Real Estate", "Tourism / Hospitality", "Other",
];

const budgets = [
  "Under $10,000", "$10,000 – $50,000", "$50,000 – $200,000",
  "$200,000 – $500,000", "$500,000 – $1M", "Over $1 Million",
];

type FormData = {
  services: string[];
  nationality: string;
  country: string;
  activity: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
};

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    services: [],
    nationality: "",
    country: "",
    activity: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
  });

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  const updateField = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (id: string) => {
    const current = formData.services;
    const updated = current.includes(id)
      ? current.filter((s) => s !== id)
      : [...current, id];
    updateField("services", updated);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.services.length > 0;
      case 2: return formData.nationality !== "";
      case 3: return formData.country !== "";
      case 4: return formData.activity !== "";
      case 5: return formData.budget !== "";
      case 6: return formData.name !== "" && formData.email !== "" && formData.phone !== "";
      default: return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-secondary" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-3">
          We&apos;ll be in touch shortly!
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto mb-6">
          Thank you, <strong>{formData.name}</strong>. A Bawaba consultant will contact you
          within 24 hours to discuss your business setup in Oman.
        </p>
        <a
          href="https://wa.me/96890000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white text-sm font-semibold rounded-xl hover:bg-secondary-700 transition-colors"
        >
          Or chat with us now on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-card overflow-hidden">
      {/* Progress bar */}
      <div className="h-1.5 bg-gray-100">
        <div
          className="h-full bg-secondary transition-all duration-500 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Step header */}
      <div className="px-6 pt-6 pb-4 border-b border-gray-50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 font-medium">
              Step {currentStep} of {steps.length}
            </p>
            <h3 className="text-lg font-bold text-primary">
              {steps[currentStep - 1].title}
            </h3>
            <p className="text-sm text-gray-500">{steps[currentStep - 1].description}</p>
          </div>
          {/* Step indicators */}
          <div className="flex gap-1.5">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  step.id < currentStep
                    ? "w-4 bg-secondary"
                    : step.id === currentStep
                    ? "w-6 bg-secondary"
                    : "w-2 bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Step content */}
      <form onSubmit={handleSubmit}>
        <div className="px-6 py-6 min-h-64">
          {currentStep === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service) => {
                const Icon = service.icon;
                const selected = formData.services.includes(service.id);
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => toggleService(service.id)}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all duration-150 ${
                      selected
                        ? "border-secondary bg-secondary/5 text-secondary"
                        : "border-gray-100 hover:border-gray-200 text-gray-700"
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${selected ? "bg-secondary/15" : "bg-gray-100"}`}>
                      <Icon className={`w-4 h-4 ${selected ? "text-secondary" : "text-gray-500"}`} />
                    </div>
                    <span className="text-sm font-semibold">{service.label}</span>
                    {selected && (
                      <Check className="w-4 h-4 ml-auto text-secondary flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {currentStep === 2 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {nationalities.map((nat) => (
                <button
                  key={nat}
                  type="button"
                  onClick={() => updateField("nationality", nat)}
                  className={`px-3 py-2.5 rounded-xl border-2 text-sm font-medium transition-all duration-150 ${
                    formData.nationality === nat
                      ? "border-secondary bg-secondary/5 text-secondary"
                      : "border-gray-100 hover:border-gray-200 text-gray-700"
                  }`}
                >
                  {nat}
                </button>
              ))}
            </div>
          )}

          {currentStep === 3 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {countries.map((country) => (
                <button
                  key={country}
                  type="button"
                  onClick={() => updateField("country", country)}
                  className={`px-3 py-2.5 rounded-xl border-2 text-sm font-medium transition-all duration-150 ${
                    formData.country === country
                      ? "border-secondary bg-secondary/5 text-secondary"
                      : "border-gray-100 hover:border-gray-200 text-gray-700"
                  }`}
                >
                  {country}
                </button>
              ))}
            </div>
          )}

          {currentStep === 4 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activities.map((activity) => (
                <button
                  key={activity}
                  type="button"
                  onClick={() => updateField("activity", activity)}
                  className={`px-4 py-3 rounded-xl border-2 text-sm font-medium text-left transition-all duration-150 ${
                    formData.activity === activity
                      ? "border-secondary bg-secondary/5 text-secondary"
                      : "border-gray-100 hover:border-gray-200 text-gray-700"
                  }`}
                >
                  {activity}
                </button>
              ))}
            </div>
          )}

          {currentStep === 5 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {budgets.map((budget) => (
                <button
                  key={budget}
                  type="button"
                  onClick={() => updateField("budget", budget)}
                  className={`px-4 py-4 rounded-xl border-2 text-sm font-semibold text-left transition-all duration-150 ${
                    formData.budget === budget
                      ? "border-secondary bg-secondary/5 text-secondary"
                      : "border-gray-100 hover:border-gray-200 text-gray-700"
                  }`}
                >
                  {budget}
                </button>
              ))}
            </div>
          )}

          {currentStep === 6 && (
            <div className="space-y-4">
              {[
                { field: "name" as const, label: "Full Name", type: "text", required: true },
                { field: "email" as const, label: "Email Address", type: "email", required: true },
                { field: "phone" as const, label: "Phone Number", type: "tel", required: true },
                { field: "whatsapp" as const, label: "WhatsApp (if different)", type: "tel", required: false },
              ].map(({ field, label, type, required }) => (
                <div key={field}>
                  <label htmlFor={`form-${field}`} className="block text-sm font-medium text-gray-700 mb-1.5">
                    {label} {required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    id={`form-${field}`}
                    type={type}
                    value={formData[field]}
                    onChange={(e) => updateField(field, e.target.value)}
                    placeholder={label}
                    required={required}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="px-6 pb-6 flex items-center justify-between gap-3">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={() => setCurrentStep((s) => s - 1)}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          ) : (
            <div />
          )}

          {currentStep < steps.length ? (
            <button
              type="button"
              onClick={() => setCurrentStep((s) => s + 1)}
              disabled={!canProceed()}
              className="flex items-center gap-2 px-6 py-2.5 bg-secondary text-white text-sm font-semibold rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:bg-secondary-700 transition-colors"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!canProceed()}
              className="flex items-center gap-2 px-6 py-2.5 bg-accent text-primary text-sm font-bold rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:bg-accent/90 transition-colors"
            >
              Book My Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
