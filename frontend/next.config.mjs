/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "7fiat922112129.imgix.net",
        port: "",
        pathname: "/norbud/realizacje/**",
      },
    ],
  },
};

export default nextConfig;
