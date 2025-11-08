import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://alessandro-argenziano.com"),
  title: "Alessandro - Portfolio",
  description: "Fullstack Developer • Angular • Next.js • React",
  icons: {
    icon: [
      { url: "/icons/favicon.ico" },
      { url: "/icons/icon1.png", type: "image/png" },
      { url: "/icons/icon0.svg", type: "image/svg+xml" },
      { url: "/icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-icon.png", sizes: "180x180" }],
  },
  manifest: "/icons/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
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
