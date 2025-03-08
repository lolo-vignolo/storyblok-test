/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    storyblokApiToken: process.env.STORYBLOK_API_TOKEN,
  },
  images: {
    domains: ["a.storyblok.com"],
  },
};

module.exports = nextConfig;
