import React from 'react'
import { useSiteMetaDataQuery } from '../queries/useSiteMetaDataQuery'
import Base from '../components/Base/Base'

function SiteIndex() {
  const siteMetadata = useSiteMetaDataQuery()

  return <Base siteMetadata={siteMetadata} />
}

export default SiteIndex
