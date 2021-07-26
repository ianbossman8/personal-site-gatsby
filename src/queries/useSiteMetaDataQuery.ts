import { graphql, useStaticQuery } from 'gatsby'

type SiteMetaDataQueryResponse = {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
      keywords: string
      lang: string
      siteUrl: string
    }
  }
}

export function useSiteMetaDataQuery(): SiteMetaDataQueryResponse['site']['siteMetadata'] {
  const { site } = useStaticQuery<SiteMetaDataQueryResponse>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            lang
            siteUrl
          }
        }
      }
    `
  )

  return site.siteMetadata
}
