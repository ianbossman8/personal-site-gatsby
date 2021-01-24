import { graphql, useStaticQuery } from 'gatsby'

type SiteMetaDataQueryResponse = {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
      keywords: string
      lang: string
    }
  }
}

export function useSiteMetaDataQuery() {
  const { site } = useStaticQuery<SiteMetaDataQueryResponse>(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            lang
          }
        }
      }
    `
  )

  return site.siteMetadata
}
