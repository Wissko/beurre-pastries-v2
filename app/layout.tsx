import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import LuxuryMenu from "@/components/LuxuryMenu";

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
  title: "beurre. PASTRIES. 33 Park Rd, Milton QLD 4064",
  description:
    "Artisan pastries by Will Leung. Croissants, viennoiseries and seasonal creations. 33 Park Rd, Milton QLD 4064, Australia. Bear Bones Coffee.",
  keywords:
    "beurre pastries, artisan pastries, Brisbane, Milton, Park Road, croissant, viennoiserie, Will Leung",
  openGraph: {
    title: "beurre. PASTRIES",
    description: "Artisan pastries. 33 Park Rd · Milton QLD 4064.",
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
      <body className="bg-cream text-espresso antialiased">
        <LuxuryMenu />
        {children}
      </body>
    </html>
  );
}
