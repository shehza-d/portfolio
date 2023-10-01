import "./globals.css";
import { Footer } from "@/components";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { metadataObj } from "@/utils/seo/metadata";

const font = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  // variable: '--font-outfit', // optional for tailwind
});

export const metadata = metadataObj;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body
        className={`dark:bg-[#0A192F] grid min-h-screen grid-rows-[1fr,auto]`}
      >
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
