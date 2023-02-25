/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/tests',
        destination: 'http://localhost:5000/tests'
      },
      {
        source: '/api/:slug*',
        destination: 'http://localhost:5000/api/:slug*'
      },
    ]
  },
  reactStrictMode: true,
}

module.exports = nextConfig
