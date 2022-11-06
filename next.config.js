/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["127.0.0.1"],
  },
  env: {
    QuickNode_ID: process.env.QuickNode_ID,
  },
};
