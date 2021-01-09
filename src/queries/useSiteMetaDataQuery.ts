import { graphql, useStaticQuery } from 'gatsby'

type QueryResponse = {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

export const useSiteMetaDataQuery = () => {
  const { site } = useStaticQuery<QueryResponse>(
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
