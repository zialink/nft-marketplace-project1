/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["js.ipfs.tech"],
  },
  env: {
    QuickNode_ID: process.env.QuickNode_ID,
  },
};
