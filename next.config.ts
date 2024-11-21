// next.config.ts
import { NextConfig } from 'next';

import nextI18NextConfig from './next-i18next.config';

const nextConfig: NextConfig = {
  i18n: nextI18NextConfig.i18n, // Include the i18n config
  images: {
    domains: ['photos.fife.usercontent.google.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
      ],
    });
    return config;
  },
};

export default nextConfig;