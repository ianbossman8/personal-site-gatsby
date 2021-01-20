import React from 'react'
import Img from 'gatsby-image'
import {
  CardContainer,
  ImgHolder,
  InfoContainer,
  MetaContainer
} from './styles'
import { NodeData } from '../../queries/useAllBlogPosts'
import { P, H3 } from '../../styles/text'

interface Props {
  blogDetail: NodeData['frontmatter']
}

function Card(props: Props) {
  const { blogDetail } = props
  const thumbnail = blogDetail.thumbnail
  console.log(blogDetail)
  return (
    <CardContainer>
      <ImgHolder>
        <Img
          fluid={thumbnail.childImageSharp.fluid}
          alt="Cat taking up an entire chair"
        />
      </ImgHolder>
      <InfoContainer>
        <H3 main>{blogDetail.title}</H3>
        <P>{blogDetail.description}</P>
      </InfoContainer>
      <MetaContainer>
        <P>{blogDetail.date}</P>
      </MetaContainer>
    </CardContainer>
  )
}

export default Card
