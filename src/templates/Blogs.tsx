import React from 'react'
import { useAllBlogPosts } from '../queries/useAllBlogPostsQuery'
import Base from '../components/Base/Base'
import BlogsList from '../components/BlogsList/BlogsList'
import { PAGE_META } from '../constants/meta'
import { PATH } from '../constants/path'
import { Location } from '../util'

function Blogs() {
  const locObj = new Location()
  const path = locObj.currentPath ? locObj.currentPath : PATH.BLOGS
  const allBlogPostsInfo = useAllBlogPosts()

  return (
    <Base pageSeo={{ ...PAGE_META.blog }} path={path}>
      <BlogsList totalBlogs={allBlogPostsInfo.totalCount} blogsDesc={allBlogPostsInfo.edges} />
    </Base>
  )
}

export default Blogs
