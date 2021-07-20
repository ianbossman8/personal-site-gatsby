import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Base from '../components/Base/Base'
import BlogsList from '../components/BlogsList/BlogsList'
import { pageMeta } from '../constants/meta'
import { LINKS } from '../constants/links'
import { PostsContainer } from './styles/generic.styles'
import { PageHeader } from '../styles/pageHeader'
import { H1, P } from '../styles/text'
import { Divider } from '../styles/divider'
import { BlogsFrontmatter, NodeData } from '../types'

export type AllBlogPostsInfoQuery = {
  allMarkdownRemark: {
    edges: {
      node: NodeData<BlogsFrontmatter>
    }[]
    totalCount: number
  }
}

interface Props extends PageProps {
  data: AllBlogPostsInfoQuery
  pageContext: {
    numBlogPages: number
    currentPage: number
  }
}

export default function Blogs(props: Props) {
  const allBlogPostsInfo = props.data.allMarkdownRemark
  const { numBlogPages, currentPage } = props.pageContext

  return (
    <Base pageSeo={{ ...pageMeta[LINKS.INTERNAL_LINKS.BLOGS] }}>
      <PostsContainer>
        <PageHeader>
          <H1>Blogs</H1>
          <P>Here is where you find wisdom</P>
        </PageHeader>
        <Divider />
        <BlogsList
          numBlogPages={numBlogPages}
          currentPage={currentPage}
          totalBlogs={allBlogPostsInfo.totalCount}
          blogsMeta={allBlogPostsInfo.edges}
        />
      </PostsContainer>
    </Base>
  )
}

export const blogsQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
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
