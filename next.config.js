/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["gateway.ipfs.io"],
  },
  env: {
    QuickNode_ID: process.env.QuickNode_ID,
  },
};
