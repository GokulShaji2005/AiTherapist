/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_BACKEND}/api/:path*`,
      },
    ];
  },
};



export default nextConfig;
