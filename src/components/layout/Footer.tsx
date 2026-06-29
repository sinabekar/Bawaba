import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import BawabaLogo from "@/components/icons/BawabaLogo";
import NewsletterForm from "@/components/forms/NewsletterForm";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/about#careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Company Registration", href: "/company-registration" },
    { label: "Investor Visa", href: "/visa-services#investor" },
    { label: "Employment Visa", href: "/visa-services#employment" },
    { label: "Family Visa", href: "/visa-services#family" },
    { label: "Business Consultation", href: "/contact" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Why Invest in Oman", href: "/why-oman" },
    { label: "Business Setup Guide", href: "/blog/business-setup-guide" },
    { label: "Visa Requirements", href: "/visa-services" },
    { label: "Cost Calculator", href: "/contact#calculator" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Newsletter bar */}
      <div className="border-b border-white/10">
        <div className="container-custom py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Stay informed about business in Oman
              </h3>
              <p className="text-white/60 text-sm">
                Get the latest insights, regulatory updates, and investment opportunities.
              </p>
            </div>
            <NewsletterForm variant="dark" className="min-w-0 md:min-w-96" />
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <BawabaLogo variant="light" size="md" />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Your Gateway to Business in Oman. We help international entrepreneurs,
              investors, and companies establish and grow their presence in Oman.
            </p>
            {/* Contact info */}
            <div className="space-y-2.5">
              <a
                href="tel:+96890000000"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                +968 9000 0000
              </a>
              <a
                href="mailto:hello@bawaba.om"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                hello@bawaba.om
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Muscat, Oman</span>
              </div>
            </div>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { label: "LinkedIn", href: "#", svg: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
                { label: "X (Twitter)", href: "#", svg: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                { label: "Instagram", href: "#", svg: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
              ].map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white/70"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Bawaba. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
