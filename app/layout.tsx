import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "beurre. PASTRIES — Park Road, Milton, Brisbane",
  description:
    "Artisan pastries by Will Leung. Croissants, viennoiseries and seasonal creations. Park Road, Milton, Brisbane. Bear Bones Coffee.",
  keywords: "beurre pastries, artisan pastries, Brisbane, Milton, croissant, viennoiserie, Will Leung",
  openGraph: {
    title: "beurre. PASTRIES",
    description: "Artisan pastries. Park Road · Milton · Brisbane.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="bg-cream text-espresso antialiased">{children}</body>
    </html>
  );
}
