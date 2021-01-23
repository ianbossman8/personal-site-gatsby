import React from 'react'
import { useSiteMetaDataQuery } from '../queries/useSiteMetaDataQuery'
import { useAllBlogPosts } from '../queries/useAllBlogPostsQuery'
import Base from '../components/Base/Base'

function SiteIndex() {
  const siteMetadata = useSiteMetaDataQuery()
  const allBlogPostsInfo = useAllBlogPosts()

  return <Base siteMetadata={siteMetadata} allBlogPostsInfo={allBlogPostsInfo} />
}

export default SiteIndex
