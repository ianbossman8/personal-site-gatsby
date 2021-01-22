import React from 'react'
import { useSiteMetaDataQuery } from '../queries/useSiteMetaDataQuery'
import Base from '../components/Base/Base'
import { useAllBlogPosts } from '../queries/useAllBlogPostsQuery'

function SiteIndex() {
  const siteMetadata = useSiteMetaDataQuery()
  const allBlogPostsInfo = useAllBlogPosts()

  return (
    <Base siteMetadata={siteMetadata} allBlogPostsInfo={allBlogPostsInfo} />
  )
}

export default SiteIndex
