/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Since you're using API placeholders in your code
  assetPrefix: '/',
}

module.exports = nextConfig
