/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        STRIPE_KEY: process.env.STRIPE_KEY, // pulls from .env file
    },
};

export default nextConfig;
