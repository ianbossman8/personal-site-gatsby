import React from 'react'
import { AllBlogPostsInfoQuery } from '../../queries/useAllBlogPostsQuery'
import Card from '../Card/Card'
import { BlogsListContainer, BlogsContainer, BlogHeader } from './styles'
import { Divider } from '../../styles/divider'
import { H1, P } from '../../styles/text'

interface Props {
  totalBlogs: number
  blogsDesc: AllBlogPostsInfoQuery['allMarkdownRemark']['edges']
}

export default function BlogsList(props: Props) {
  const { totalBlogs, blogsDesc } = props

  return (
    <BlogsContainer>
      <BlogHeader>
        <H1>Blogs</H1>
        <P>Here is where you find wisdom</P>
      </BlogHeader>
      <Divider />
      <P>Number of articles- {totalBlogs}</P>
      <BlogsListContainer>
        {blogsDesc.length > 0 ? (
          blogsDesc.map(({ node: { id, frontmatter, fields } }) => (
            <li key={id}>
              <Card blogDetail={frontmatter} link={fields.slug} />
            </li>
          ))
        ) : (
          <P>exciting posts coming soon!!</P>
        )}
      </BlogsListContainer>
    </BlogsContainer>
  )
}
