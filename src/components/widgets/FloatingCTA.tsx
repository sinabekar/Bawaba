"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { whatsappLink } from "@/lib/whatsapp";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const t = useTranslations("FloatingCTA");
  const tw = useTranslations("WhatsApp");

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 start-6 z-40 hidden md:block animate-fade-up">
      <a
        href={whatsappLink(tw("messages.general"))}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-5 py-3 bg-primary text-white text-sm font-semibold rounded-full shadow-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105"
      >
        <MessageCircle className="w-4 h-4 text-green-400" />
        {t("label")}
      </a>
    </div>
  );
}
