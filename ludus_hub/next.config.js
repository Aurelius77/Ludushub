/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
// next.config.js
module.exports = {
    images: {
        remotePatterns: [
            {
                hostname: 'media.rawg.io'
            }
        ],
    },

    env: {
        API_KEY: process.env.API_KEY
    }
};
