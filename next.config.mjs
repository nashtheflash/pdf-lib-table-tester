import createMDX from '@next/mdx'

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure pageExtensions to include md and mdx
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    env: {
        STRIPE_KEY: process.env.STRIPE_KEY, // pulls from .env file
    },
};

export default withMDX(nextConfig);
