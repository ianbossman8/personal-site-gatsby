import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { NodeData } from '../queries/useAllBlogPostsQuery'
import Emoji from '../components/Emoji/Emoji'
import Base from '../components/Base/Base'
import symbols from '../constants/symbols'
import { SIZE } from '../constants/font'
import { LINKS } from '../constants/links'
import { H1, P } from '../styles/text'

interface Props {
  data: {
    markdownRemark: {
      html: string
      frontmatter: NodeData['frontmatter']
      fields: {
        slug: string
      }
    }
  }
}

const Page = styled.div`
  width: inherit;

  a {
    color: ${({ theme: { colours } }) => colours.info[2]};
  }
`

const BlogPostContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
`

const ImgHolder = styled.figure`
  width: 100%;
  max-width: 960px;
`

export default function BlogPost(props: Props) {
  const {
    data: {
      markdownRemark: { html, frontmatter, fields }
    }
  } = props

  const pageSEO = {
    title: frontmatter.title,
    description: frontmatter.description,
    pathname: fields.slug
  }

  return (
    <Base pageSeo={{ ...pageSEO }}>
      <Page>
        <Link to={LINKS.INTERNAL_LINKS.BLOGS}>
          <Emoji label="back page" symbol={symbols.pointLeft} size={SIZE.S} /> back to all blogs
        </Link>
        <BlogPostContainer>
          <ImgHolder>
            <Img fluid={frontmatter.thumbnail.childImageSharp.fluid} />
            <figcaption>caption</figcaption>
          </ImgHolder>
          <H1>{frontmatter.title}</H1>
          <P>{frontmatter.author}</P>
          <P>{frontmatter.date}</P>
          <article dangerouslySetInnerHTML={{ __html: html }} />
        </BlogPostContainer>
      </Page>
    </Base>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        ...CustomMarkdownRemarkFrontmatter
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 100) {
              ...CustomGatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`
