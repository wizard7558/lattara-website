/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Add this to ensure proper CSS processing
  webpack: (config) => {
    config.resolve.fallback = { fs: false }
    return config
  },
}
module.exports = nextConfig
