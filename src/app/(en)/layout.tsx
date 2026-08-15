import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import WhatsAppButton from "@/components/widgets/WhatsAppButton";
import FloatingCTA from "@/components/widgets/FloatingCTA";
import ExitIntent from "@/components/widgets/ExitIntent";
import messages from "../../../messages/en.json";

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
    default: "Dorbrij — Your Door + Bridge to Business in Oman",
    template: "%s | Dorbrij",
  },
  description:
    "Dorbrij helps international entrepreneurs, investors, and companies establish and grow their business in Oman. Company registration, investor visas, employment visas, and complete business setup.",
  keywords: [
    "business setup Oman",
    "company registration Oman",
    "investor visa Oman",
    "employment visa Oman",
    "business in Oman",
    "Oman company formation",
  ],
  openGraph: {
    title: "Dorbrij — Your Door + Bridge to Business in Oman",
    description:
      "From company registration to investor visas, Dorbrij helps you establish your business in Oman with confidence.",
    type: "website",
    locale: "en_US",
    siteName: "Dorbrij",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dorbrij — Your Door + Bridge to Business in Oman",
    description:
      "From company registration to investor visas, Dorbrij helps you establish your business in Oman with confidence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <NextIntlClientProvider locale="en" messages={messages}>
          <Navbar />
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          <Footer />
          <MobileBottomNav />
          <WhatsAppButton />
          <FloatingCTA />
          <ExitIntent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
