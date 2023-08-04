/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    applyCssImports: true,
  },
  basePath: '/github-pages',
}

module.exports = nextConfig
