import "./globals.css";
import { Outfit } from "next/font/google";
import { metadataObj } from "@/utils/seo/metadata";
import Footer from "@/components/utils/Footer";
import Banner from "@/components/utils/Banner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const font = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  // variable: '--font-outfit', // optional for tailwind
});

export const metadata = metadataObj.metadata;
export const viewport = metadataObj.viewport;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body
        className={`dark:bg-[#0A192F] gri min-h-screen gridrows-[1fr,auto]`}
      >
        <Banner />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
