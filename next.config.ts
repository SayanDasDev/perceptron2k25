import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  /* for static site generation */
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // Image optimization is disabled in static builds
  },
  // distDir: '../../perceptron25',

  // basePath: '/perceptron25',
  // assetPrefix: '/home/sayandasdev/perceptron25',



  // experimental: {
  //   typedRoutes: true,
  // }
};

export default nextConfig;