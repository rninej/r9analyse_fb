/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/r9analyse_fb',
  assetPrefix: '/r9analyse_fb/',
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};

module.exports = nextConfig;

/**
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
module.exports = nextConfig;
*/
