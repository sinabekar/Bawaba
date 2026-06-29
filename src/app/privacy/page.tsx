import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Bawaba Privacy Policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="gradient-hero pt-24 pb-14">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-white/60 mt-2">Last updated: December 2024</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 space-y-8 text-sm text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-primary mb-3">1. Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you fill out a consultation form, subscribe to our newsletter, or contact us. This may include your name, email address, phone number, nationality, and business interests.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, to respond to your inquiries, to send you updates and marketing communications (where permitted), and to comply with legal obligations.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary mb-3">3. Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except to provide the services you request or as required by law.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary mb-3">4. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary mb-3">5. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:hello@bawaba.om" className="text-secondary hover:underline">hello@bawaba.om</a>.</p>
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
