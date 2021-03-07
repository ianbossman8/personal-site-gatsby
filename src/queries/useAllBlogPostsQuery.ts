import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

export type NodeData = {
  frontmatter: {
    title: string
    description: string
    date: Date
    edited_date: Date
    tags: string[]
    categories: string[]
    author: string
    thumbnail: IGatsbyImageData
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
        allMarkdownRemark(filter: { fields: { contentType: { eq: "blogs" } } }) {
          edges {
            node {
              frontmatter {
                ...CustomMarkdownRemarkFrontmatter
                thumbnail {
                  childImageSharp {
                    gatsbyImageData(
                      width: 645
                      height: 400
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
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
