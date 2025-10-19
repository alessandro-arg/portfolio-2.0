import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ContactModalProvider } from "@/app/contact/ContactModalProvider";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { RootProvider } from "fumadocs-ui/provider/next";
import "fumadocs-ui/style.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const outfitSans = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alessandro-argenziano.com"),
  title: "Alessandro - Portfolio",
  description: "Fullstack Developer • Next.js • Tailwind CSS • Animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="relative"
      data-scroll-behavior="smooth"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${outfitSans.variable} antialiased`}
      >
        <ThemeProvider>
          <ContactModalProvider>
            {/* floating header */}
            <Header />

            {/* page content needs some top padding so it's not covered by the fixed header */}
            <div id="content">
              <RootProvider>{children}</RootProvider>
            </div>

            <Footer />
            <Toaster />
          </ContactModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
