/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Add the experimental flag to enable the build worker
  experimental: {
    webpackBuildWorker: true,
    appDir: true
  },
  // Simplified webpack config
  webpack: (config) => {
    config.resolve.fallback = { fs: false }
    return config
  },
  // Add this to help with CSS extraction
  optimizeFonts: false,
}

module.exports = nextConfig
