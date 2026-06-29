import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Bawaba Terms of Service — the rules and guidelines for using our services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="gradient-hero pt-24 pb-14">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Terms of Service</h1>
          <p className="text-white/60 mt-2">Last updated: December 2024</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 space-y-8 text-sm text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-primary mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using Bawaba&apos;s services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary mb-3">2. Services</h2>
              <p>Bawaba provides business setup consulting, company registration assistance, visa processing support, and related advisory services in Oman. Our services are provided on a professional consulting basis.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary mb-3">3. Professional Advice Disclaimer</h2>
              <p>While we strive to provide accurate and up-to-date information, our content is for general informational purposes only and does not constitute legal, financial, or regulatory advice. Always verify current regulations with official government sources.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary mb-3">4. Payment and Fees</h2>
              <p>Fees for our services are agreed upon during the consultation process and outlined in service agreements. Government fees and third-party costs are separate from and in addition to our professional fees.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary mb-3">5. Contact Us</h2>
              <p>Questions about these Terms? Contact us at <a href="mailto:hello@bawaba.om" className="text-secondary hover:underline">hello@bawaba.om</a>.</p>
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
