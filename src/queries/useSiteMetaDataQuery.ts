import { graphql, useStaticQuery } from 'gatsby'

type SiteQueryResponse = {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

export function useSiteMetaDataQuery() {
  const { site } = useStaticQuery<SiteQueryResponse>(
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
