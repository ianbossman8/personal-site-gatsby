import React from 'react'
import { Link } from 'gatsby'
import { AllBlogPostsInfoQuery } from '../../queries/useAllBlogPostsQuery'
import Card from '../Card/Card'
import { BlogsListContainer, BlogsContainer } from './styles'
import { P } from '../../styles/text'

interface Props {
  totalBlogs: number
  blogsDesc: AllBlogPostsInfoQuery['allMarkdownRemark']['edges']
}

function BlogsList(props: Props) {
  const { totalBlogs, blogsDesc } = props

  return (
    <BlogsContainer>
      <P>Number of articles- {totalBlogs}</P>
      <BlogsListContainer>
        {blogsDesc.map(({ node: { id, frontmatter, fields } }) => (
          <Link to={fields.slug} key={id}>
            <Card blogDetail={frontmatter} />
          </Link>
        ))}
      </BlogsListContainer>
    </BlogsContainer>
  )
}

export default BlogsList
