/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
        // port: "",
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "www.holopin.me",
      },
    ],
  },
  // output: "export", // build will contain static assets => https://nextjs.org/docs/app/building-your-application/deploying/static-exports
};
