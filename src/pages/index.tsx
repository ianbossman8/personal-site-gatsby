import React from 'react'
import { useSiteMetaDataQuery } from '../queries/useSiteMetaDataQuery'
import Base from '../components/Base/Base'

export default function SiteIndex() {
  const siteMetadata = useSiteMetaDataQuery()

  return <Base siteMetadata={siteMetadata} />
}
