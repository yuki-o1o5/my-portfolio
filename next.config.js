/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "raw.githubusercontent.com",
      "www.vectorlogo.zone",
      "www.mysql.com",
    ],
  },
};

module.exports = nextConfig;
