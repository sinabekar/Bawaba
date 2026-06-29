"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Building2, Stamp, MessageCircle, BookOpen } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/company-registration", label: "Register", icon: Building2 },
  { href: "/visa-services", label: "Visas", icon: Stamp },
  { href: "/blog", label: "Blog", icon: BookOpen },
  {
    href: "https://wa.me/96890000000",
    label: "WhatsApp",
    icon: MessageCircle,
    external: true,
    highlight: true,
  },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 mobile-bottom-safe"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = !item.external && pathname === item.href;

          if (item.external) {
            return (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl"
                aria-label={item.label}
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-[10px] font-medium text-green-600">{item.label}</span>
              </a>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors ${
                isActive ? "text-secondary" : "text-gray-400 hover:text-gray-600"
              }`}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-secondary" : ""}`} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
