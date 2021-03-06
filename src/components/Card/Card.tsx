import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { CardContainer, InfoContainer, MetaContainer } from './styles'
import { NodeData } from '../../queries/useAllBlogPostsQuery'
import { P, H3 } from '../../styles/text'

interface Props {
  blogDetail: NodeData['frontmatter']
}

export default function Card(props: Props) {
  const { blogDetail } = props
  const thumbnail = getImage(blogDetail.thumbnail)

  return (
    <CardContainer>
      <GatsbyImage image={thumbnail!} alt="" title="" />
      <InfoContainer>
        <H3>{blogDetail.title}</H3>
        <P>{blogDetail.description}</P>
      </InfoContainer>
      <MetaContainer>
        <P>{blogDetail.date}</P>
      </MetaContainer>
    </CardContainer>
  )
}
