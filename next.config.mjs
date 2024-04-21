/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    APOLLO_ENDPOINT: process.env.APOLLO_ENDPOINT,
  },
};

export default nextConfig;
