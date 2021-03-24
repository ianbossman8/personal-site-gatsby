import React from 'react'
import { graphql, Link, PageProps } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Emoji from '../components/Emoji/Emoji'
import Base from '../components/Base/Base'
import symbols from '../constants/symbols'
import { SIZE } from '../constants/font'
import { LINKS } from '../constants/links'
import { H1, P } from '../styles/text'
import { BlogPage, ImgHolder } from './styles/blogs.styles'
import { NodeData } from './Blogs'

interface Props extends PageProps {
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

  const {
    title,
    description,
    author,
    date,
    edited_date,
    thumbnail: { name, childImageSharp }
  } = frontmatter

  const thumbnail = getImage(childImageSharp)

  const pageSEO = {
    title: title,
    description: description,
    pathname: fields.slug
  }

  function showImage() {
    return (
      thumbnail && (
        <ImgHolder>
          <GatsbyImage
            image={thumbnail}
            alt={name}
            title={name}
            backgroundColor={
              typeof thumbnail.backgroundColor !== 'undefined' ? thumbnail.backgroundColor : 'white'
            }
          />
          <figcaption>{name}</figcaption>
        </ImgHolder>
      )
    )
  }

  return (
    <Base pageSeo={{ ...pageSEO }}>
      <BlogPage>
        <Link to={LINKS.INTERNAL_LINKS.BLOGS}>
          <Emoji label="back page" symbol={symbols.pointLeft} size={SIZE.S} /> back to all blogs
        </Link>
        {showImage()}
        <H1>{title}</H1>
        <P>By- {author}</P>
        <P>First Published- {date}</P>
        {edited_date && edited_date !== 'Invalid date' && <P>Last Edited- {edited_date}</P>}
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </BlogPage>
    </Base>
  )
}

export const blogPostQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        ...CustomMarkdownRemarkFrontmatter
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 875
              placeholder: BLURRED
              backgroundColor: "#ffffff"
              formats: [AUTO, WEBP, AVIF]
            )
          }
          name
        }
      }
      fields {
        slug
      }
    }
  }
`
