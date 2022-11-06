/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["ipfs.io"],
  },
  env: {
    QuickNode_ID: process.env.QuickNode_ID,
  },
};
