/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  redirects: async function () {
    return [
      {
        source: '/',
        destination: '/test-cases/playground',
        permanent: false,
      },
      {
        source: '/test-cases',
        destination: '/test-cases/playground',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
