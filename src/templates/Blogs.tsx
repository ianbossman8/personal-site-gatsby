import React from 'react'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Base from '../components/Base/Base'
import BlogsList from '../components/BlogsList/BlogsList'
import { pageMeta } from '../constants/meta'
import { LINKS } from '../constants/links'

export type NodeData = {
  frontmatter: {
    title: string
    description: string
    date: Date
    edited_date: Date | string
    tags: string[]
    categories: string[]
    author: string
    thumbnail: {
      childImageSharp: IGatsbyImageData
      name: string
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

interface Props {
  data: AllBlogPostsInfoQuery
}

export default function Blogs(props: Props) {
  const allBlogPostsInfo = props.data.allMarkdownRemark

  return (
    <Base pageSeo={{ ...pageMeta[LINKS.INTERNAL_LINKS.BLOGS] }}>
      <BlogsList totalBlogs={allBlogPostsInfo.totalCount} blogsMeta={allBlogPostsInfo.edges} />
    </Base>
  )
}

export const blogsQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { contentType: { eq: "blogs" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            ...CustomMarkdownRemarkFrontmatter
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  width: 645
                  height: 400
                  backgroundColor: "#f5f5f5"
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
