import { graphql } from 'gatsby'

export const queryMarkdownRemarkFrontmatter = graphql`
  fragment CustomMarkdownRemarkFrontmatter on MarkdownRemarkFrontmatter {
    title
    description
    date(formatString: "MMMM Do, YYYY")
    edited_date(formatString: "MMMM Do, YYYY")
    tags
    categories
    author
  }
`
