import { graphql, useStaticQuery } from 'gatsby'
import { FluidObject } from 'gatsby-image'

export type NodeData = {
  frontmatter: {
    title: string
    description: string
    date: Date
    tags: string[]
    categories: string[]
    author: string
    thumbnail: {
      relativePath: string
      childImageSharp: {
        id: string
        fluid: FluidObject & {
          originalName: string
        }
      }
    }
  }
  id: string
  fields: {
    slug: string
  }
}

export type AllBlogPostsInfoQuery = {
  allMarkdownRemark: {
    edges: {
      node: NodeData
    }[]
    totalCount: number
  }
}

export function useAllBlogPosts() {
  const { allMarkdownRemark } = useStaticQuery<AllBlogPostsInfoQuery>(
    graphql`
      query {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(blog)/" } }) {
          edges {
            node {
              frontmatter {
                title
                description
                date(formatString: "MMMM Do, YYYY")
                tags
                categories
                author
                thumbnail {
                  relativePath
                  publicURL
                  childImageSharp {
                    id
                    fluid(maxWidth: 460, quality: 80) {
                      aspectRatio
                      src
                      srcSet
                      sizes
                      srcWebp
                      base64
                      tracedSVG
                      srcSetWebp
                      originalName
                    }
                  }
                }
              }
              id
              fields {
                slug
              }
            }
          }
          totalCount
        }
      }
    `
  )

  return allMarkdownRemark
}
