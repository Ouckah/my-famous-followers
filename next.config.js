/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/tests',
        destination: 'http://localhost:5000/tests'
      },
    ]
  },
  reactStrictMode: true,
}

module.exports = nextConfig
