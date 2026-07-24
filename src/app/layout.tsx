import type { Metadata } from "next";
import { Oswald, Outfit } from "next/font/google";
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

export const metadata: Metadata = {
  title: "$REAL - REAL IBEX | Not Just A Coin",
  description: "In a space full of memecoins, we choose to focus on real value, real use cases & real community. $REAL is built different.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${oswald.variable} ${outfit.variable} bg-[#060608] min-h-screen font-sans antialiased text-slate-100 selection:bg-yellow-500/30 selection:text-yellow-300`}>
        {children}
      </body>
    </html>
  );
}
