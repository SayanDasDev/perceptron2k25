import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  /* for static site generation */
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // Image optimization is disabled in static builds
  },
  distDir: 'build',

  // basePath: '/',
  assetPrefix: '/home/debanjan/perceptron/perceptron2k25/build/',



  // experimental: {
  //   typedRoutes: true,
  // }
};

export default nextConfig;