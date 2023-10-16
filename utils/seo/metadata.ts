// https://vercel.com/docs/functions/edge-functions/og-image-generation
// https://www.freecodecamp.org/news/what-is-open-graph-and-how-can-i-use-it-for-my-website
// https://smartkeyword.io/en/seo-on-page-open-graph-twitter-card/
// https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup

import type { Metadata } from "next";

// export const metadata = {
//   openGraph: {
//     ...openGraphImage,
//     title: 'Home',
//   },
// }

const title = "SHEHZAD";
const description =
  "Explore the work of Shehzad, a passionate Software Engineer, through a collection of innovative and creative projects. He also is Learning NLP Chatbot Development";
const image = "https://shehzad.vercel.app/shehzad_dp_low.jpeg";
const siteUrl = "https://shehzad.vercel.app";

export const metadataObj: Metadata = {
  themeColor: "#31F711",

  title: {
    default: title, // default is required when creating a template
    template: `${title} | %s`, // for nested routes
  },

  description,

  // https://developer.mozilla.org/en-US/docs/Web/Manifest // pwa builder
  manifest: `${siteUrl}/manifest.json`,

  generator: "Next.js",
  applicationName: "Next.JS 13",
  referrer: "origin-when-cross-origin",
  keywords: [
    "NPL",
    "AI",
    "Chatbot",
    "web developer",
    "portfolio",
    "chat bot projects",
    "coding",
    "innovate",
    "development",
    "Next.js",
    "React",
    "JavaScript",
  ],
  authors: [{ name: "Shehzad" }, { name: "Shehzad", url: siteUrl }],
  category: "Software",
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

  openGraph: {
    title,
    description,
    type: "profile",
    url: siteUrl,
    siteName: "Next.js",
    images: [
      {
        url: "/banner.png",
        width: 800,
        height: 600,
      },
      {
        url: "/banner.png" || `${siteUrl}/shehzad_dp_high.jpeg`,
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en-US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shehzad NLP Chatbot Dev",
    description,
    // siteId: '1467726470533754880',
    // creatorId: '1467726470533754880',
    images: ["/banner.png"],
    // card: "https://www.summary_large_image.com",
    creator: "@Shehza_d_",
    site: "@Shehza_d_",
    // cardType: "summary_large_image",
  },
  // robots: {
  //   index: false,
  //   follow: true,
  //   nocache: true,
  //   googleBot: {
  //     index: true,
  //     follow: false,
  //     noimageindex: true,
  //     'max-video-preview': -1,
  //     'max-image-preview': 'large',
  //     'max-snippet': -1,
  //   },
  // },

  appleWebApp: {
    title,
    statusBarStyle: "black-translucent",
    startupImage: [
      "/banner.png",
      {
        url: "/banner.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
  metadataBase: new URL(
    process.env?.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : siteUrl,
  ),
};

// <meta property="og:title" content="Your Name - Web Developer Portfolio">
// <meta property="og:description" content="Explore the work of Your Name, a passionate web developer, through a collection of innovative and creative web projects.">
// <meta property="og:image" content="https://www.yourwebsite.com/og-image.jpg">
// <meta property="og:url" content="https://www.yourwebsite.com">

// <meta name="twitter:card" content="summary_large_image">
// <meta name="twitter:site" content="@YourTwitterHandle">
// <meta name="twitter:title" content="Your Name - Web Developer Portfolio">
// <meta name="twitter:description" content="Explore the work of Your Name, a passionate web developer, through a collection of innovative and creative web projects.">
// <meta name="twitter:image" content="https://www.yourwebsite.com/twitter-card-image.jpg">

{
  /* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest"></link> */
}
