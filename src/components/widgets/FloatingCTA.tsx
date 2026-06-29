"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden md:block animate-fade-up">
      <Link
        href="/contact"
        className="flex items-center gap-2.5 px-5 py-3 bg-primary text-white text-sm font-semibold rounded-full shadow-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105"
      >
        <Calendar className="w-4 h-4 text-accent" />
        Book Free Consultation
      </Link>
    </div>
  );
}
