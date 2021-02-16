import React from 'react'
import { useAllBlogPosts } from '../queries/useAllBlogPostsQuery'
import Base from '../components/Base/Base'
import BlogsList from '../components/BlogsList/BlogsList'
import { pageMeta } from '../constants/meta'
import { LINKS } from '../constants/links'

export default function Blogs() {
  const allBlogPostsInfo = useAllBlogPosts()

  return (
    <Base pageSeo={{ ...pageMeta[LINKS.INTERNAL_LINKS.BLOGS] }}>
      <BlogsList totalBlogs={allBlogPostsInfo.totalCount} blogsDesc={allBlogPostsInfo.edges} />
    </Base>
  )
}
