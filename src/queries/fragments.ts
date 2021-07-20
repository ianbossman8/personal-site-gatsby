import { graphql } from 'gatsby'

export const queryMarkdownRemarkFrontmatter = graphql`
  fragment CustomMarkdownRemarkFrontmatter on MarkdownRemarkFrontmatter {
    title
    description
    thumbnail_description
    date(formatString: "Do MMM, YYYY")
    edited_date(formatString: "Do MMM, YYYY")
    tags
    categories
    author
  }
`

export const queryBlogsMarkdownRemarkFrontmatterLight = graphql`
  fragment LightBlogsCustomMarkdownRemarkFrontmatter on MarkdownRemarkFrontmatter {
    title
    thumbnail_description
    edited_date(formatString: "Do MMM, YYYY")
    categories
  }
`

export const queryProjectsMarkdownRemarkFrontmatterLight = graphql`
  fragment LightProjectsCustomMarkdownRemarkFrontmatter on MarkdownRemarkFrontmatter {
    title
    thumbnail_description
    date(formatString: "Do MMM, YYYY")
    external_link
    main_language
    main_tech
  }
`
