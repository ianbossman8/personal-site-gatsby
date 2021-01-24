import React from 'react'
import Helmet from 'react-helmet'
import { useSiteMetaDataQuery } from '../queries/useSiteMetaDataQuery'
export interface Props {
  description?: string
  meta?: []
  title?: string
}

export default function SEO(props: Props) {
  const siteMetadata = useSiteMetaDataQuery()
  const { description = siteMetadata.description, meta = [], title = siteMetadata.title } = props

  return (
    <Helmet
      htmlAttributes={{
        lang: siteMetadata.lang
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: description
        },
        {
          property: 'og:title',
          content: title
        },
        {
          name: 'author',
          content: siteMetadata.author
        },
        {
          name: 'keywords',
          content: siteMetadata.keywords
        },
        {
          property: 'og:description',
          content: description
        },
        {
          property: 'og:type',
          content: 'website'
        }
      ].concat(meta)}
    />
  )
}
