/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["zianft.infura-ipfs.io", "127.0.0.1"],
  },
  env: {
    QuickNode_ID: process.env.QuickNode_ID,
    ipfs_url: process.env.ipfs_url,
    project_id: process.env.project_id,
    project_secret: process.env.project_secret,
    ipfs_subdomain: process.env.ipfs_subdomain,
  },
  webpack: (config) => {
    // this will override the experiments
    config.experiments = { ...config.experiments, ...{ topLevelAwait: true } };
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true
    return config;
  },
};
