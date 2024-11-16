/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }
    return config
  },
}

module.exports = nextConfig