import React from 'react'
import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination'
import { BlogsListContainer, BlogsContainer, BlogHeader } from './styles'
import { Divider } from '../../styles/divider'
import { H1, P } from '../../styles/text'
import { AllBlogPostsInfoQuery } from '../../templates/Blogs'

interface Props {
  totalBlogs: number
  currentPage: number
  numBlogPages: number
  blogsMeta: AllBlogPostsInfoQuery['allMarkdownRemark']['edges']
}

export default function BlogsList(props: Props) {
  const { totalBlogs, blogsMeta, currentPage, numBlogPages } = props

  return (
    <BlogsContainer>
      <BlogHeader>
        <H1>Blogs</H1>
        <P>Here is where you find wisdom</P>
      </BlogHeader>
      <Divider />
      <P>Number of articles- {totalBlogs}</P>
      <BlogsListContainer>
        {blogsMeta.length > 0 ? (
          blogsMeta.map(({ node: { id, frontmatter, fields } }) => (
            <li key={id}>
              <Card blogDetail={frontmatter} link={fields.slug} />
            </li>
          ))
        ) : (
          <P>exciting posts coming soon!!</P>
        )}
      </BlogsListContainer>
      <Pagination currentPage={currentPage} numBlogPages={numBlogPages} />
    </BlogsContainer>
  )
}
