import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // Enable static HTML export
  basePath: "/Homy-Start-Up-Prototype", // ← Change this to your GitHub repo name
  images: {
    unoptimized: true,    // Required for static export
  },
};

export default nextConfig;
