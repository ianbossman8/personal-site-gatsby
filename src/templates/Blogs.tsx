import React from 'react'
import { useAllBlogPosts } from '../queries/useAllBlogPostsQuery'
import Base from '../components/Base/Base'
import { PAGE_META } from '../constants/meta'

function SiteIndex() {
  const allBlogPostsInfo = useAllBlogPosts()

  return <Base allBlogPostsInfo={allBlogPostsInfo} pageSeo={{ ...PAGE_META.blog }} />
}

export default SiteIndex
