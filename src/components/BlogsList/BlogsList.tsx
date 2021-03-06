import React from 'react'
import { Link } from 'gatsby'
import { AllBlogPostsInfoQuery } from '../../queries/useAllBlogPostsQuery'
import Card from '../Card/Card'
import { BlogsListContainer, BlogsContainer } from './styles'
import { Divider } from '../../styles/divider'
import { P } from '../../styles/text'

interface Props {
  totalBlogs: number
  blogsDesc: AllBlogPostsInfoQuery['allMarkdownRemark']['edges']
}

export default function BlogsList(props: Props) {
  const { totalBlogs, blogsDesc } = props

  return (
    <BlogsContainer>
      <P>Number of articles- {totalBlogs}</P>
      <Divider />
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
