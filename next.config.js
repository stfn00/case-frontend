/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
    styledComponents: true,
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  assetPrefix: '/',
  headers: async () => {
    return [
      {
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536001, immutable',
          }
        ],
        source: '/:path(.+\\.(?:ico|png|svg|jpg|jpeg|gif|webp|json|js|css|mp3|mp4|ttf|ttc|otf|woff|woff2)$)',
      }
    ]
  }
}

module.exports = nextConfig
