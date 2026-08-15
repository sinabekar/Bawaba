"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import DorbrijLogo from "@/components/icons/DorbrijLogo";
import NewsletterForm from "@/components/forms/NewsletterForm";
import { localeHref, type Locale } from "@/i18n/routing";
import { whatsappLink } from "@/lib/whatsapp";

export default function Footer() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Footer");
  const tw = useTranslations("WhatsApp");
  const lh = (path: string) => localeHref(locale, path);

  const footerLinks = {
    company: [
      { label: t("companyLinks.about"), href: lh("/about") },
      { label: t("companyLinks.team"), href: lh("/about#team") },
      { label: t("companyLinks.careers"), href: lh("/about#careers") },
      { label: t("companyLinks.contact"), href: lh("/contact") },
    ],
    services: [
      { label: t("servicesLinks.registration"), href: lh("/company-registration") },
      { label: t("servicesLinks.investor"), href: lh("/visa-services#investor") },
      { label: t("servicesLinks.employment"), href: lh("/visa-services#employment") },
      { label: t("servicesLinks.family"), href: lh("/visa-services#family") },
      { label: t("servicesLinks.consultation"), href: lh("/contact") },
    ],
    resources: [
      { label: t("resourcesLinks.blog"), href: lh("/blog") },
      { label: t("resourcesLinks.whyOman"), href: lh("/why-oman") },
      { label: t("resourcesLinks.guide"), href: lh("/blog/how-to-register-company-oman") },
      { label: t("resourcesLinks.visaRequirements"), href: lh("/visa-services") },
    ],
    legal: [
      { label: t("legalLinks.privacy"), href: lh("/privacy") },
      { label: t("legalLinks.terms"), href: lh("/terms") },
      { label: t("legalLinks.cookies"), href: lh("/cookies") },
    ],
  };

  return (
    <footer className="bg-primary text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Newsletter bar */}
      <div className="border-b border-white/10">
        <div className="container-custom py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{t("newsletterTitle")}</h3>
              <p className="text-white/60 text-sm">{t("newsletterSubtitle")}</p>
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
            <DorbrijLogo variant="light" size="md" />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">{t("tagline")}</p>
            {/* Contact info */}
            <div className="space-y-2.5">
              <a
                href={whatsappLink(tw("messages.general"))}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-accent flex-shrink-0" />
                {t("resourcesLinks.whatsapp")}
              </a>
              <a
                href="tel:+96890000000"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                +968 9000 0000
              </a>
              <a
                href="mailto:hello@dorbrij.om"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
                dir="ltr"
              >
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                hello@dorbrij.om
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>{t("address")}</span>
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t("companyHeading")}</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t("servicesHeading")}</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t("resourcesHeading")}</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
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
          <p className="text-xs text-white/40">{t("rights", { year: new Date().getFullYear() })}</p>
          <div className="flex items-center gap-5">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-white/40 hover:text-white/70 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
