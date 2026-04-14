import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "PLATINUM-CRETE | Concrete Specialists — Toronto & GTA",
    template: "%s | PLATINUM-CRETE",
  },
  description:
    "Toronto's trusted concrete specialists. Driveways, retaining walls, pool surrounds, steps, stamped concrete, and more. Serving the Greater Toronto Area. Get a free quote today.",
  keywords: [
    "concrete contractor Toronto",
    "concrete driveway GTA",
    "retaining wall Toronto",
    "stamped concrete Ontario",
    "concrete pool surround Toronto",
    "concrete steps GTA",
    "exposed aggregate Toronto",
    "concrete forming Ontario",
    "PLATINUM-CRETE",
  ],
  openGraph: {
    title: "PLATINUM-CRETE | Built to Impress",
    description: "Premium concrete services across the Greater Toronto Area.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
