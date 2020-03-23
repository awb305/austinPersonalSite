const withCSS = require('@zeit/next-css');

const nextConfig = {
  // Copy env variables to client side
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    return config;
  },
  typescript: {
    ignoreDevErrors: true,
    ignoreBuildErrors: true
  }
};

module.exports = withCSS(nextConfig);
