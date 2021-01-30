import React from 'react'
import { useAllBlogPosts } from '../queries/useAllBlogPostsQuery'
import Base from '../components/Base/Base'
import BlogsList from '../components/BlogsList/BlogsList'
import { PAGE_META } from '../constants/meta'

function Blogs() {
  const allBlogPostsInfo = useAllBlogPosts()

  return (
    <Base pageSeo={{ ...PAGE_META.BLOG }}>
      <BlogsList totalBlogs={allBlogPostsInfo.totalCount} blogsDesc={allBlogPostsInfo.edges} />
    </Base>
  )
}

export default Blogs
