import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ContactModalProvider } from "@/app/contact/ContactModalProvider";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Analytics } from "@vercel/analytics/next";
import "fumadocs-ui/style.css";
import "./globals.css";
import { Suspense } from "react";

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
  icons: {
    icon: [
      { url: "/brand/logo-light.svg", media: "(prefers-color-scheme: light)" },
      { url: "/brand/logo-dark.svg", media: "(prefers-color-scheme: dark)" },
      { url: "/icons/favicon-32x16.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon.ico" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/icons/safari-pinned-tab.svg",
        color: "#0EA5E9",
      },
    ],
  },
  manifest: "/icons/site.webmanifest",
};

export const dynamic = "force-dynamic";

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
          <Suspense fallback={null}>
            {/* Suspense is required around any subtree that uses usePathname/useSearchParams */}
            <ContactModalProvider>
              <Header />

              {/* page content needs some top padding so it's not covered by the fixed header */}
              <div id="content">
                <RootProvider>
                  {children}
                  <Analytics />
                </RootProvider>
              </div>

              <Footer />
              <Toaster position="bottom-right" />
            </ContactModalProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
