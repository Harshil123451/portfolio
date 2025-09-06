/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'github.com', 'images.unsplash.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/github/:path*',
        destination: 'https://api.github.com/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
