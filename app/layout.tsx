import "./globals.css";
import { Outfit } from "next/font/google";
// import Script from "next/script";
import { Footer } from "@/components";
// import { Suspense } from "react";
// import Loading from "./loading";

const font = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  // variable: '--font-outfit', // optional for tailwind
});

{
  /* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest"></link> */
}

export const metadata = {
  themeColor: "#31F711",

  title: "SHEHZAD PORTFOLIO",
  description: "Portfolio Website for Shehzad",
  generator: "Next.js",
  applicationName: "Next.JS 13",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [
    { name: "Shehzad" },
    { name: "Shehzad", url: "https://shehzad.vercel.app" },
  ],
  colorScheme: "dark light",
  creator: "Shehzad",
  publisher: "Shehzad",
  alternates: {},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: { url: "/fav/favicon.ico", type: "image/ico" },
    shortcut: { url: "/fav/favicon.ico", type: "image/svg" },
    apple: "/fav/apple-touch-icon.png",
  },

  // openGraph: {
  //   title: 'Next.js',
  //   description: 'The React Framework for the Web',
  //   url: 'https://nextjs.org',
  //    type: 'article',
  //  siteName: 'Next.js',
  //   images: [
  //     {
  //       url: 'https://nextjs.org/og.png',
  //       width: 800,
  //       height: 600,
  //     },
  //     {
  //       url: 'https://nextjs.org/og-alt.png',
  //       width: 1800,
  //       height: 1600,
  //       alt: 'My custom alt',
  //     },
  //   ],
  //   locale: 'en-US',
  //   type: 'website',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={font.style}>
      <body className="grid min-h-screen grid-rows-[1fr,auto]">
        {children}
        <Footer />
      </body>
    </html>
  );
}
