const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode })
    const contentType = getNode(node.parent).sourceInstanceName
    const prefix = contentType === 'siteInfo' ? '' : '/' + contentType

    createNodeField({
      node,
      name: 'slug',
      value: `${prefix}${slug}`
    })
    createNodeField({
      node,
      name: 'contentType',
      value: contentType
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/BlogPost.tsx`),
      context: {
        slug: node.fields.slug
      }
    })
  })
}
