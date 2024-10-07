/** @type {import('next').NextConfig} */
const nextConfig = {
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