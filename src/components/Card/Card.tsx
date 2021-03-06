import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { CardContainer, InfoContainer, MetaContainer } from './styles'
import { NodeData } from '../../queries/useAllBlogPostsQuery'
import { P, H3 } from '../../styles/text'
import { Link } from 'gatsby'

interface Props {
  blogDetail: NodeData['frontmatter']
  link: string
}

export default function Card(props: Props) {
  const { blogDetail, link } = props

  const { title, description, date } = blogDetail
  const thumbnail = getImage(blogDetail.thumbnail)

  return (
    <CardContainer>
      <Link to={link}>
        <GatsbyImage image={thumbnail!} alt="" title="" />
      </Link>
      <InfoContainer>
        <Link to={link}>
          <H3>{title}</H3>
        </Link>
        <P>{description}</P>
      </InfoContainer>
      <MetaContainer>
        <P>{date}</P>
      </MetaContainer>
    </CardContainer>
  )
}
