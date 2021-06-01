import React from 'react'
import { graphql, Link, PageProps } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import Emoji from '../components/Emoji/Emoji'
import Base from '../components/Base/Base'
import CustomGatsbyImage from '../components/CustomGatsbyImage/CustomGatsbyImage'
import symbols from '../constants/symbols'
import { SIZE } from '../constants/font'
import { LINKS } from '../constants/links'
import { H1, P } from '../styles/text'
import { BlogPage, ImgHolder } from './styles/blogs.styles'
import { Frontmatter } from './Blogs'

interface Props extends PageProps {
  data: {
    markdownRemark: {
      html: string
      frontmatter: Frontmatter
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
    thumbnail_description,
    thumbnail
  } = frontmatter

  const pageSEO = {
    title: title,
    description: description,
    pathname: fields.slug
  }

  function showImage() {
    return (
      thumbnail && (
        <ImgHolder>
          <CustomGatsbyImage
            imageDetail={thumbnail.childImageSharp}
            description={thumbnail_description}
          />
          <figcaption>{thumbnail_description}</figcaption>
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
        }
      }
      fields {
        slug
      }
    }
  }
`
