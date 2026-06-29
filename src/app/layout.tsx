import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import WhatsAppButton from "@/components/widgets/WhatsAppButton";
import FloatingCTA from "@/components/widgets/FloatingCTA";
import ExitIntent from "@/components/widgets/ExitIntent";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bawaba — Your Gateway to Business in Oman",
    template: "%s | Bawaba",
  },
  description:
    "Bawaba helps international entrepreneurs, investors, and companies establish and grow their business in Oman. Company registration, investor visas, employment visas, and complete business setup.",
  keywords: [
    "business setup Oman",
    "company registration Oman",
    "investor visa Oman",
    "employment visa Oman",
    "business in Oman",
    "Oman company formation",
  ],
  openGraph: {
    title: "Bawaba — Your Gateway to Business in Oman",
    description:
      "From company registration to investor visas, Bawaba helps you establish your business in Oman with confidence.",
    type: "website",
    locale: "en_US",
    siteName: "Bawaba",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bawaba — Your Gateway to Business in Oman",
    description:
      "From company registration to investor visas, Bawaba helps you establish your business in Oman with confidence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileBottomNav />
        <WhatsAppButton />
        <FloatingCTA />
        <ExitIntent />
      </body>
    </html>
  );
}
