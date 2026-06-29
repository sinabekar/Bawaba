import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Bawaba Cookie Policy — how we use cookies on our website.",
};

export default function CookiesPage() {
  return (
    <>
      <section className="gradient-hero pt-24 pb-14">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Cookie Policy</h1>
          <p className="text-white/60 mt-2">Last updated: December 2024</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 space-y-8 text-sm text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-primary mb-3">What Are Cookies</h2>
              <p>Cookies are small text files placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary mb-3">How We Use Cookies</h2>
              <p>We use cookies for essential website functionality, analytics to understand site usage, and to improve your experience. We do not use cookies for advertising targeting.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary mb-3">Managing Cookies</h2>
              <p>You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality.</p>
            </div>
          </div>
          <div className="mt-6">
            <Link href="/" className="text-sm text-secondary hover:underline">← Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
