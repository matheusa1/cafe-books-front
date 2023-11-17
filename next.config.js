/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'm.media-amazon.com' }, { hostname: 'i0.wp.com' }, { hostname: 'res.cloudinary.com' }, { hostname: 'www.google.com' }],
  },
}

module.exports = nextConfig
