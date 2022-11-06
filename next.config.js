/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["cloudflare-ipfs.com"],
  },
  env: {
    QuickNode_ID: process.env.QuickNode_ID,
  },
};
