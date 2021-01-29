const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://ianbossman.me/',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env

const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

const siteMetadata = {
  title: 'Ianbossman Personal Site',
  description: "This is Ianbossman's personal site and demo",
  author: 'Ian Chan',
  siteUrl,
  keywords: 'Gatsby Personal Blog, Tech, Trading, Investment, Real Estate',
  lang: 'en'
}

const plugins = [
  'gatsby-plugin-netlify-cms',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-typescript',
  'gatsby-plugin-sharp',
  'gatsby-plugin-styled-components',
  'gatsby-transformer-sharp',
  'gatsby-plugin-offline',
  'gatsby-plugin-sitemap',
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      maxWidth: 1600
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'siteInfo',
      path: `${__dirname}/contents/siteInfo`
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'blogs',
      path: `${__dirname}/contents/blogs`
    }
  },
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      resolveEnv: () => NETLIFY_ENV,
      env: {
        production: {
          policy: [{ userAgent: '*' }]
        },
        'branch-deploy': {
          policy: [{ userAgent: '*', disallow: ['/'] }],
          sitemap: null,
          host: null
        },
        'deploy-preview': {
          policy: [{ userAgent: '*', disallow: ['/'] }],
          sitemap: null,
          host: null
        }
      }
    }
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'IanBossman',
      short_name: 'IanBossman',
      start_url: '/',
      description: `The application bring you knowledge and makes your life better.`,
      lang: `en`,
      background_color: '#0050b3',
      theme_color: '#0050b3',
      display: 'standalone',
      icon: 'src/images/favicon.png',
      icon_options: {
        purpose: `maskable`
      }
    }
  }
]

module.exports = {
  siteMetadata,
  plugins
}
