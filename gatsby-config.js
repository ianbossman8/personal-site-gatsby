const siteMetadata = {
  title: 'Personal Site | Ianbossman',
  description: 'This is my personal site and demo',
  theme: 'light'
}

const plugins = [
  'gatsby-plugin-netlify-cms',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-typescript',
  'gatsby-plugin-sharp',
  'gatsby-plugin-styled-components',
  'gatsby-transformer-remark',
  'gatsby-transformer-sharp',
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
  }
]

module.exports = {
  siteMetadata,
  plugins
}
