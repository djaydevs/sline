/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "http.cat",
        port: "",
      },
    ],
  },
};

export default nextConfig;
