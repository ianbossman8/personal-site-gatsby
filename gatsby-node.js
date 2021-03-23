const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = async ({ node, getNode, actions }) => {
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

  const blogsResult = await graphql(`
    query {
      blogs: allMarkdownRemark(filter: { fields: { contentType: { eq: "blogs" } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  blogsResult.data.blogs.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/BlogPost.tsx`),
      context: {
        slug: node.fields.slug
      }
    })
  })

  const blogPosts = blogsResult.data.blogs.edges
  const blogPostsPerPage = 1
  const numBlogPages = Math.ceil(blogPosts.length / blogPostsPerPage)

  Array.from({ length: numBlogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/blogs' : `/blogs/${i + 1}`,
      component: path.resolve('./src/templates/Blogs.tsx'),
      context: {
        limit: blogPostsPerPage,
        skip: i * blogPostsPerPage,
        numBlogPages,
        currentPage: i + 1
      }
    })
  })

  const siteInfoResult = await graphql(`
    query {
      siteInfo: allMarkdownRemark(filter: { fields: { contentType: { eq: "siteInfo" } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  siteInfoResult.data.siteInfo.edges.forEach(({ node }) => {
    if (node.fields.slug !== '/about/') {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/Dump.tsx'),
        context: {
          slug: node.fields.slug
        }
      })
    } else {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/About.tsx'),
        context: {
          slug: node.fields.slug
        }
      })
    }
  })
}
