/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["img.clerk.com"],
    },
    middleware: [
        authMiddleware({
            publicRoutes: ["/"],
        }),
    ],
};

import {authMiddleware} from "@clerk/nextjs";

module.exports = nextConfig;