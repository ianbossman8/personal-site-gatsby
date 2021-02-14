import { graphql, useStaticQuery } from 'gatsby'

type AboutQueryResponse = {
  markdownRemark: {
    html: string
  }
}

export function useAboutContentQuery() {
  // const { markdownRemark } = useStaticQuery<AboutQueryResponse>(
  //   graphql`
  //     query {
  //       markdownRemark(fields: { slug: { eq: "/siteInfo/about-me/" } }) {
  //         html
  //       }
  //     }
  //   `
  // )
  // return markdownRemark.html
}
