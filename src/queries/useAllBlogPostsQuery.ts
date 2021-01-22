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
        fluid: FluidObject
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
        allMarkdownRemark(
          filter: { fields: { contentType: { eq: "blogs" } } }
        ) {
          edges {
            node {
              frontmatter {
                ...CustomNodeFrontmatter
                thumbnail {
                  childImageSharp {
                    fluid(maxWidth: 460, quality: 80) {
                      ...CustomGatsbyImageSharpFluid
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
