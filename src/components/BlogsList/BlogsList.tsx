import React from 'react'
import { Link } from 'gatsby'
import { BlogsContainer } from './styles'
import { AllBlogPostsInfoQuery } from '../../queries/useAllBlogPosts'
import Card from '../Card/Card'

interface Props {
  totalBlogs: number
  blogsDesc: AllBlogPostsInfoQuery['allMarkdownRemark']['edges']
}

function BlogsList(props: Props) {
  const { totalBlogs, blogsDesc } = props

  return (
    <>
      <p>Number of articles- {totalBlogs}</p>
      <BlogsContainer>
        {blogsDesc.map(({ node: { id, frontmatter, fields } }) => (
          <Link to={fields.slug} key={id}>
            <Card blogDetail={frontmatter} />
          </Link>
        ))}
      </BlogsContainer>
    </>
  )
}

export default BlogsList
