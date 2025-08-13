// next.config.ts
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'hojat-gazestani' 

module.exports = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true
  }
}
