import { graphql } from 'gatsby'

export const queryGatsbyImageSharpFluid = graphql`
  fragment CustomGatsbyImageSharpFluid on ImageSharpFluid {
    aspectRatio
    src
    srcSet
    sizes
    srcWebp
    base64
    tracedSVG
    srcSetWebp
  }
`

export const queryMarkdownRemarkFrontmatter = graphql`
  fragment CustomMarkdownRemarkFrontmatter on MarkdownRemarkFrontmatter {
    title
    description
    date(formatString: "MMMM Do, YYYY")
    tags
    categories
    author
  }
`
