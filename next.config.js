/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/roadmaps',
        destination: '/',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
