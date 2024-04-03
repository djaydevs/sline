import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.tsx?$/,
        use: "raw-loader",
        include: path.resolve(__dirname, "src/components/atomic-components"),
      });
    }

    return config;
  },
};

export default nextConfig;