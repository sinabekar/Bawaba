"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import BawabaLogo from "@/components/icons/BawabaLogo";

const services = [
  { label: "Company Registration", href: "/company-registration" },
  { label: "Visa Services", href: "/visa-services" },
  { label: "Why Invest in Oman", href: "/why-oman" },
];

const navLinks = [
  { label: "Services", href: "#", dropdown: services },
  { label: "Why Oman", href: "/why-oman" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" aria-label="Bawaba home">
            <BawabaLogo variant={logoVariant} size="md" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative group">
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${textColor}`}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 mt-px" />
                  </button>
                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                      servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-52">
                      {link.dropdown.map((item) => (
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
              ) : (
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
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/96890000000"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-medium transition-colors ${textColor}`}
            >
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="px-4 py-2 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-secondary-700 transition-colors"
            >
              Book Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isHome && !isScrolled
                ? "text-white hover:bg-white/10"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
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
            {navLinks
              .filter((l) => !l.dropdown)
              .map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
            <div className="border-t border-gray-100 pt-3 mt-2 space-y-2">
              <a
                href="https://wa.me/96890000000"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-3 text-sm font-medium text-center text-secondary border border-secondary rounded-lg"
              >
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="block w-full px-4 py-3 text-sm font-semibold text-center text-white bg-secondary rounded-lg"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
