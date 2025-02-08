/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: {
    swcMinify: true
  }
};

module.exports = nextConfig; 