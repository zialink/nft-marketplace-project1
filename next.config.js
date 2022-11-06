/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["ipfs.io"],
  },
  env: {
    QuickNode_ID: "33c3e61d45a79913e7352973839aaff1d5583db2",
  },
};
