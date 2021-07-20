import { graphql, useStaticQuery } from 'gatsby'
import { ProjectsFrontmatter, NodeData } from '../types'

export type LightProjectsQueryResponse = NodeData<
  Pick<
    ProjectsFrontmatter,
    | 'title'
    | 'thumbnail'
    | 'thumbnail_description'
    | 'date'
    | 'external_link'
    | 'main_language'
    | 'main_tech'
  >
>

type ProjectsQueryResponse = {
  pinnedProjects: {
    edges: {
      node: LightProjectsQueryResponse
    }[]
  }
  latestProjects: {
    edges: {
      node: LightProjectsQueryResponse
    }[]
  }
}

export function useProjectsQuery() {
  const { pinnedProjects, latestProjects } = useStaticQuery<ProjectsQueryResponse>(
    graphql`
      query {
        pinnedProjects: allMarkdownRemark(
          filter: {
            fields: { contentType: { eq: "projects" } }
            frontmatter: { pin: { eq: true } }
          }
        ) {
          edges {
            node {
              id
              frontmatter {
                ...LightProjectsCustomMarkdownRemarkFrontmatter
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
        latestProjects: allMarkdownRemark(
          filter: {
            fields: { contentType: { eq: "projects" } }
            frontmatter: { pin: { eq: false } }
          }
          sort: { order: DESC, fields: frontmatter___edited_date }
          limit: 2
        ) {
          edges {
            node {
              id
              frontmatter {
                ...LightProjectsCustomMarkdownRemarkFrontmatter
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

  return { pinnedProjects, latestProjects }
}
