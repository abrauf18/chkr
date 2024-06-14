/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'chkr-buck.s3.amazonaws.com',
        pathname: '**',
      },
    ],
    domains: ['chkr-buck.s3.amazonaws.com'],
  },
};

export default nextConfig;
