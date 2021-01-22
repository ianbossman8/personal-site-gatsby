import { graphql, useStaticQuery } from 'gatsby'

type SiteMetaDataQueryResponse = {
  site: {
    siteMetadata: {
      title: string
      description: string
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
          }
        }
      }
    `
  )

  return site.siteMetadata
}
