"use client";

import React, { useState } from "react";

interface NewsletterFormProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function NewsletterForm({ variant = "dark", className = "" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className={`text-sm font-medium ${variant === "dark" ? "text-white/70" : "text-secondary"}`}>
        ✓ You&apos;re subscribed! Check your inbox.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className={`flex-1 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-1 transition-colors ${
          variant === "dark"
            ? "bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-accent focus:ring-accent"
            : "bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-secondary focus:ring-secondary"
        }`}
      />
      <button
        type="submit"
        className="px-4 py-2.5 bg-accent text-primary rounded-lg text-sm font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}
