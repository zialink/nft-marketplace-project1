/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["ipfs.infura.io"],
  },
  env: {
    INFURA_ID: "c72a99a12c1844988525e0ca949c16f1",
  },
};
