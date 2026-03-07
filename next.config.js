/** @type {import('next').NextConfig} */

// GitHub Pages: site is at https://<username>.github.io/<repo-name>/
const basePath = process.env.BASE_PATH || ''
const assetPrefix = basePath ? `${basePath}/` : ''

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
