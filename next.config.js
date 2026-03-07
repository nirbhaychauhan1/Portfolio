/** @type {import('next').NextConfig} */

// GitHub Pages: site is at https://<username>.github.io/<repo-name>/
const basePath = process.env.BASE_PATH || ''
const assetPrefix = basePath ? `${basePath}/` : ''

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
