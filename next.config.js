/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compilerOptions: {
    baseUrl: "./",
    paths: {
      "@components/*": ["components/*"],
      "@contentful/*": ["contentful/*"],
      "@layouts/*": ["layouts/*"],
      "@styles/*": ["styles/*"],
      "@utils/*": ["utils/*"]
    },
    "rules": {
      "@next/next/no-html-link-for-pages": ["never"]
    }
  },
}

module.exports = nextConfig
