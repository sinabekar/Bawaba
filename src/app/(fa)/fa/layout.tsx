import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import "../../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import WhatsAppButton from "@/components/widgets/WhatsAppButton";
import FloatingCTA from "@/components/widgets/FloatingCTA";
import ExitIntent from "@/components/widgets/ExitIntent";
import messages from "../../../../messages/fa.json";

// Reuse the same CSS variable names the (en) tree defines (--font-jakarta,
// --font-inter) so globals.css needs no locale-specific branching — this
// tree just points them at Vazirmatn instead of the Latin fonts.
const vazirmatnHeading = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-jakarta",
  weight: ["600", "700", "800"],
  display: "swap",
});

const vazirmatnBody = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "دوربریج — در و پل شما به سوی کسب‌وکار در عمان",
    template: "%s | دوربریج",
  },
  description:
    "دوربریج به کارآفرینان، سرمایه‌گذاران و شرکت‌های بین‌المللی کمک می‌کند کسب‌وکار خود را در عمان تأسیس و گسترش دهند. ثبت شرکت، ویزای سرمایه‌گذاری، ویزای کاری و راه‌اندازی کامل کسب‌وکار.",
  keywords: [
    "راه‌اندازی کسب‌وکار در عمان",
    "ثبت شرکت در عمان",
    "ویزای سرمایه‌گذاری عمان",
    "ویزای کاری عمان",
    "سرمایه‌گذاری در عمان",
  ],
  openGraph: {
    title: "دوربریج — در و پل شما به سوی کسب‌وکار در عمان",
    description: "از ثبت شرکت تا ویزای سرمایه‌گذاری، دوربریج به شما کمک می‌کند با اطمینان کسب‌وکار خود را در عمان تثبیت کنید.",
    type: "website",
    locale: "fa_IR",
    siteName: "دوربریج",
  },
  twitter: {
    card: "summary_large_image",
    title: "دوربریج — در و پل شما به سوی کسب‌وکار در عمان",
    description: "از ثبت شرکت تا ویزای سرمایه‌گذاری، دوربریج به شما کمک می‌کند با اطمینان کسب‌وکار خود را در عمان تثبیت کنید.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FarsiRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatnHeading.variable} ${vazirmatnBody.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <NextIntlClientProvider locale="fa" messages={messages}>
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
