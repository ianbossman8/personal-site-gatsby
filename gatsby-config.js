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
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  'gatsby-plugin-netlify-cms',
  'gatsby-plugin-offline',
  'gatsby-plugin-sitemap',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-typescript',
  'gatsby-plugin-styled-components',
  'gatsby-plugin-image',
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        'gatsby-remark-relative-images',
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1600
          }
        }
      ]
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: 'images',
      path: `${__dirname}/static/assets`
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
        purpose: 'any maskable'
      }
    }
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: ['G-5RJRC53V0F']
    }
  }
]

module.exports = {
  siteMetadata,
  plugins
}
