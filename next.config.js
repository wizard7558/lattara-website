/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Remove output: 'export' if you have it
  // Add this to ensure proper CSS processing
  webpack: (config) => {
    config.resolve.fallback = { fs: false }
    return config
  },
  // Add this to help with CSS extraction
  optimizeFonts: false,
}

module.exports = nextConfig
