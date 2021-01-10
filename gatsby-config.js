import THEME from './src/constants/theme'

const siteMetadata = {
  title: 'Personal Site | Ianbossman',
  description: 'This is my personal site and demo',
  theme: THEME.LIGHT
}

const plugins = [
  'gatsby-plugin-netlify-cms',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-typescript',
  'gatsby-plugin-styled-components',
  'gatsby-transformer-remark',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'src',
      path: `${__dirname}/content/`
    }
  }
]

module.exports = {
  siteMetadata,
  plugins
}
