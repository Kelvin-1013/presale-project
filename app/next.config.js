/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const nextConfig = {
    i18n,
    reactStrictMode: true,
    images: {
        domains: ["img.clerk.com"],
    },
    // middleware: [
    //     require('@clerk/nextjs').authMiddleware({
    //         publicRoutes: ["/"],
    //     }),
    // ],
};

module.exports = nextConfig;