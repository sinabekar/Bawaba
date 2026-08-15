"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";

/** Computes the equivalent path in the other locale from the current pathname. */
function otherLocaleHref(pathname: string, locale: Locale): string {
  if (locale === "fa") {
    const stripped = pathname.replace(/^\/fa(?=\/|$)/, "");
    return stripped === "" ? "/" : stripped;
  }
  return pathname === "/" ? "/fa" : `/fa${pathname}`;
}

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const t = useTranslations("LanguageSwitcher");
  const href = otherLocaleHref(pathname, locale);
  const otherLabel = locale === "en" ? "فارسی" : "EN";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${className}`}
      aria-label={t("label")}
      dir="ltr"
    >
      {otherLabel}
    </a>
  );
}
