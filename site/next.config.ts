import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'summer.hackclub.com',
        port: '',
        pathname: '/rails/active_storage/**',
      },
    ],
  },
};

export default nextConfig;
