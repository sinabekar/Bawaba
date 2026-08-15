"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import DorbrijLogo from "@/components/icons/DorbrijLogo";
import LanguageSwitcher from "@/components/widgets/LanguageSwitcher";
import { localeHref, type Locale } from "@/i18n/routing";
import { whatsappLink } from "@/lib/whatsapp";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const t = useTranslations("Nav");
  const tw = useTranslations("WhatsApp");

  const services = [
    { label: t("servicesItems.companyRegistration"), href: localeHref(locale, "/company-registration") },
    { label: t("servicesItems.visaServices"), href: localeHref(locale, "/visa-services") },
    { label: t("servicesItems.whyOman"), href: localeHref(locale, "/why-oman") },
  ];

  const navLinks = [
    { label: t("whyOman"), href: localeHref(locale, "/why-oman") },
    { label: t("about"), href: localeHref(locale, "/about") },
    { label: t("blog"), href: localeHref(locale, "/blog") },
    { label: t("contact"), href: localeHref(locale, "/contact") },
  ];

  const homeHref = localeHref(locale, "/");
  const isHome = pathname === homeHref;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navBg =
    isHome && !isScrolled
      ? "bg-transparent"
      : "bg-white/90 backdrop-blur-md border-b border-gray-100";

  const textColor =
    isHome && !isScrolled ? "text-white/90 hover:text-white" : "text-gray-700 hover:text-gray-900";
  const logoVariant = isHome && !isScrolled ? "light" : "dark";
  const langSwitcherClass =
    isHome && !isScrolled
      ? "border-white/30 text-white/90 hover:bg-white/10"
      : "border-gray-200 text-gray-600 hover:bg-gray-50";

  return (
    <header
      className={`fixed top-0 start-0 end-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href={homeHref} aria-label={t("homeAriaLabel")}>
            <DorbrijLogo variant={logoVariant} size="md" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {/* Services dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${textColor}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {t("services")}
                <ChevronDown className="w-3.5 h-3.5 mt-px" />
              </button>
              <div
                className={`absolute top-full start-0 pt-2 transition-all duration-200 ${
                  servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-52">
                  {services.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname === link.href
                    ? isHome && !isScrolled
                      ? "text-white"
                      : "text-secondary"
                    : textColor
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher className={langSwitcherClass} />
            <a
              href={whatsappLink(tw("messages.general"))}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-secondary-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              {t("whatsappCta")}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher className={langSwitcherClass} />
            <button
              className={`p-2 rounded-lg transition-colors ${
                isHome && !isScrolled
                  ? "text-white hover:bg-white/10"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={t("toggleMenu")}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container-custom py-4 space-y-1">
            {services.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-gray-100 my-2" />
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-100 pt-3 mt-2">
              <a
                href={whatsappLink(tw("messages.general"))}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-center text-white bg-secondary rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                {t("whatsappCta")}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
