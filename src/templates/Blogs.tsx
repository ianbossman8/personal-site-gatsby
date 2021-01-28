import React from 'react'
import { useAllBlogPosts } from '../queries/useAllBlogPostsQuery'
import Base from '../components/Base/Base'
import BlogsList from '../components/BlogsList/BlogsList'
import { PAGE_META } from '../constants/meta'

function SiteIndex() {
  const allBlogPostsInfo = useAllBlogPosts()

  return (
    <Base pageSeo={{ ...PAGE_META.blog }}>
      <BlogsList totalBlogs={allBlogPostsInfo.totalCount} blogsDesc={allBlogPostsInfo.edges} />
    </Base>
  )
}

export default SiteIndex
