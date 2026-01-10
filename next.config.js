/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'github.com' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
    ],
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
