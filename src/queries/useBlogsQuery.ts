import { graphql, useStaticQuery } from 'gatsby'
import { BlogsFrontmatter, NodeData } from '../types'

export type LightBlogsQueryResponse = NodeData<
  Pick<
    BlogsFrontmatter,
    'title' | 'thumbnail_description' | 'edited_date' | 'categories' | 'thumbnail'
  >
>

type BlogsQueryResponse = {
  pinnedBlogs: {
    edges: {
      node: LightBlogsQueryResponse
    }[]
  }
  latestBlogs: {
    edges: {
      node: LightBlogsQueryResponse
    }[]
  }
}

export function useBlogsQuery(): BlogsQueryResponse {
  const { pinnedBlogs, latestBlogs } = useStaticQuery<BlogsQueryResponse>(
    graphql`
      query {
        pinnedBlogs: allMarkdownRemark(
          filter: { frontmatter: { pin: { eq: true } }, fields: { contentType: { eq: "blogs" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                ...LightBlogsCustomMarkdownRemarkFrontmatter
                thumbnail {
                  childImageSharp {
                    gatsbyImageData(
                      width: 160
                      height: 160
                      backgroundColor: "#f5f5f5"
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
              fields {
                slug
              }
            }
          }
        }
        latestBlogs: allMarkdownRemark(
          filter: { fields: { contentType: { eq: "blogs" } }, frontmatter: { pin: { eq: false } } }
          sort: { order: DESC, fields: frontmatter___edited_date }
          limit: 2
        ) {
          edges {
            node {
              id
              frontmatter {
                ...LightBlogsCustomMarkdownRemarkFrontmatter
                thumbnail {
                  childImageSharp {
                    gatsbyImageData(
                      width: 160
                      height: 160
                      backgroundColor: "#f5f5f5"
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  return { pinnedBlogs, latestBlogs }
}
