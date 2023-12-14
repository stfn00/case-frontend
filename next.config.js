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
  },
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              memo: true,
              dimensions: false,
              svgoConfig: {
                multipass: true,
                plugins: [
                  'removeDimensions',
                  'removeOffCanvasPaths',
                  'reusePaths',
                  'removeElementsByAttr',
                  'removeStyleElement',
                  'removeScriptElement',
                  'removeUselessStrokeAndFill',
                  'prefixIds',
                  'cleanupIds',
                  'convertPathData',
                  {
                    name: 'cleanupNumericValues',
                    params: {
                      floatPrecision: 1,
                    },
                  },
                  {
                    name: 'convertTransform',
                    params: {
                      floatPrecision: 1,
                    },
                  },
                  {
                    name: 'cleanupListOfValues',
                    params: {
                      floatPrecision: 1,
                    },
                  },
                ],
              },
            },
          },
        ],
      }
    )

    return config
  },
}

module.exports = nextConfig
