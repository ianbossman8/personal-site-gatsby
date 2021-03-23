import { graphql } from 'gatsby'

export const queryMarkdownRemarkFrontmatter = graphql`
  fragment CustomMarkdownRemarkFrontmatter on MarkdownRemarkFrontmatter {
    title
    description
    date(formatString: "Do MMM, YYYY")
    edited_date(formatString: "Do MMM, YYYY")
    tags
    categories
    author
  }
`
