import "./globals.css";
import { Outfit } from "@next/font/google";

const font = Outfit({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  // variable: '--font-outfit', // optional for tailwind
});

export const metadata = {
  title: "SHEHZAD PORTFOLIO",
  description: "Portfolio Website for Shehzad",
  link: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={font.style}>
      <body>{children}</body>
    </html>
  );
}
