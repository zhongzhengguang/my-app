/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  reactStrictMode: true,
  env: {
    MAPBOX_ACCESS_TOKEN: "[MAPBOX_TOKEN]",
  },
};

// next.config.js
const withVideos = require("next-videos");

module.exports = withVideos();
