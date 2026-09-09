import type { Metadata, Viewport } from "next";
import { Oswald, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#060608",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://realibex.com"),
  title: {
    default: "$REAL IBEX — THIS IS NOT JUST A COIN. THIS IS $REAL.",
    template: "%s | $REAL IBEX REPUBLIC",
  },
  description:
    "Join the $REAL Ibex Republic. Built for growth, designed to last. Real vision, real community, real future. The supreme digital asset.",
  keywords: [
    "$REAL",
    "Real Ibex",
    "Real Coin",
    "Crypto",
    "Memecoin",
    "Solana",
    "Web3",
    "Real Ecosystem",
    "Ibex Republic",
    "Gold Goat",
  ],
  authors: [{ name: "Real Ibex Republic" }],
  creator: "Real Ibex Republic",
  publisher: "Real Ibex Republic",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/golden-goat.png", type: "image/png" },
      { url: "/golden-goat.png", sizes: "32x32", type: "image/png" },
      { url: "/golden-goat.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/golden-goat.png",
    apple: "/golden-goat.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://realibex.com",
    siteName: "$REAL IBEX REPUBLIC",
    title: "$REAL IBEX — THIS IS NOT JUST A COIN. THIS IS $REAL.",
    description:
      "Join the $REAL Ibex Republic. Built for growth, designed to last. Real vision, real community, real future.",
    images: [
      {
        url: "/PC%20BG.png",
        width: 1920,
        height: 1080,
        alt: "$REAL Ibex Republic Hero Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "$REAL IBEX — THIS IS NOT JUST A COIN. THIS IS $REAL.",
    description:
      "Join the $REAL Ibex Republic. Built for growth, designed to last. Real vision, real community, real future.",
    images: ["/PC%20BG.png"],
    creator: "@RealIbex",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* Favicon Direct Links */}
        <link rel="icon" href="/golden-goat.png" type="image/png" />
        <link rel="apple-touch-icon" href="/golden-goat.png" />
        
        {/* Google Material Icons Library */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,600,1,0&display=swap"
        />
      </head>
      <body
        className={`${oswald.variable} ${outfit.variable} bg-[#060608] min-h-screen font-sans antialiased text-slate-100 selection:bg-yellow-500/30 selection:text-yellow-300`}
      >
        {children}
        <Script
          src="https://cdn.zanderio.ai/widget/loader.js"
          data-id="wdg_qOZGlp59oHL1J2vAVshj2PEP"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
