/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true, // Creates /page/index.html instead of /page.html - required for static hosting
    devIndicators: false,
    images: {
        unoptimized: true,
        remotePatterns: [
            { protocol: 'https', hostname: 'ik.imagekit.io' },
            { protocol: 'https', hostname: 'tailark.com' },
            { protocol: 'https', hostname: 'html.tailus.io' },
            { protocol: 'https', hostname: 'images.unsplash.com' },
        ],
    },
};

export default nextConfig;