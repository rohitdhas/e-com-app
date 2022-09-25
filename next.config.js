/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "cdn.shopify.com",
      "content.jdmagicbox.com",
      "pngimg.com",
      "rukminim1.flixcart.com",
    ],
  },
  env: {
    CLIENT_URL: process.env.CLIENT_URL,
  }
};

module.exports = nextConfig;
