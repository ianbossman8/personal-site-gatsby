import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { NodeData } from '../queries/useAllBlogPostsQuery'
import Emoji from '../components/Emoji/Emoji'
import Base from '../components/Base/Base'
import symbols from '../constants/symbols'
import { SIZE } from '../constants/font'
import { LINKS } from '../constants/links'
import { H1, P } from '../styles/text'
import { BlogPage, BlogPostContainer, ImgHolder } from './styles/blogs.styles'

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

export default function BlogPost(props: Props) {
  const {
    data: {
      markdownRemark: { html, frontmatter, fields }
    }
  } = props

  const thumbnail = getImage(frontmatter.thumbnail)
  console.log(thumbnail)
  const pageSEO = {
    title: frontmatter.title,
    description: frontmatter.description,
    pathname: fields.slug
  }

  return (
    <Base pageSeo={{ ...pageSEO }}>
      <BlogPage>
        <Link to={LINKS.INTERNAL_LINKS.BLOGS}>
          <Emoji label="back page" symbol={symbols.pointLeft} size={SIZE.S} /> back to all blogs
        </Link>
        <BlogPostContainer>
          <ImgHolder>
            <GatsbyImage image={thumbnail!} alt="" title="" />
            <figcaption>caption</figcaption>
          </ImgHolder>
          <H1>{frontmatter.title}</H1>
          <P>{frontmatter.author}</P>
          <P>{frontmatter.date}</P>
          <article dangerouslySetInnerHTML={{ __html: html }} />
        </BlogPostContainer>
      </BlogPage>
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
            gatsbyImageData(width: 1280, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      fields {
        slug
      }
    }
  }
`
