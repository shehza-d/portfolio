/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
        port: "",
        // pathname: '/account123/**',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};
