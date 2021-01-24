const siteMetadata = {
  title: 'Ianbossman Personal Site',
  description: "This is Ianbossman's personal site and demo",
  author: 'Ian Chan',
  keywords: 'Gtasby Personal Blog, Tech, Finance, Investment, Real Estate',
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
