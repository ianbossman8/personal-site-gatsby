import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { NodeData } from '../queries/useAllBlogPostsQuery'
import Emoji from '../components/Emoji/Emoji'
import Layout from '../components/Layout/Layout'
import Seo from '../components/Seo'
import SYMBOLS from '../constants/symbols'
import { SIZE } from '../constants/font'
import { PATH } from '../constants/path'
import { H1, P } from '../styles/text'

interface Props {
  data: {
    markdownRemark: {
      html: string
      frontmatter: NodeData['frontmatter']
      excerpt: string
      fields: {
        slug: string
      }
    }
  }
}

const Page = styled.div`
  width: inherit;

  a {
    color: ${({ theme: { colours } }) => colours.main[2]};
  }
`

const BlogPostContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
`

const ImgHolder = styled.div`
  width: 100%;
  max-width: 960px;
`

export default function BlogPost(props: Props) {
  const {
    data: {
      markdownRemark: { html, frontmatter, fields, excerpt }
    }
  } = props

  const pageSEO = {
    title: frontmatter.title,
    description: excerpt
  }

  return (
    <Layout curLocation={fields.slug}>
      <Seo {...pageSEO} />
      <Page>
        <Link to={PATH.BLOGS}>
          <Emoji label={'back page'} symbol={SYMBOLS.pointLeft} size={SIZE.S} /> back to all blogs
        </Link>
        <BlogPostContainer>
          <ImgHolder>
            <Img fluid={frontmatter.thumbnail.childImageSharp.fluid} />
          </ImgHolder>
          <H1 main>{frontmatter.title}</H1>
          <P>{frontmatter.author}</P>
          <P>{frontmatter.date}</P>
          <article dangerouslySetInnerHTML={{ __html: html }} />
        </BlogPostContainer>
      </Page>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        ...CustomNodeFrontmatter
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 100) {
              ...CustomGatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt
      fields {
        slug
      }
    }
  }
`
