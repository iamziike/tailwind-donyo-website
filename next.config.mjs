/** @type {import('next').NextConfig} */
const nextConfig = {
  // allow all images
  images: {
    // Specify the domains for external images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Accept images from any domain
      },
    ],
  },
};

export default nextConfig;

