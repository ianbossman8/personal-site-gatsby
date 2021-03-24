import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { CardContainer, InfoContainer, MetaContainer } from './styles'
import { P, H3 } from '../../styles/text'
import { Link } from 'gatsby'
import { NodeData } from '../../templates/Blogs'

interface Props {
  blogDetail: NodeData['frontmatter']
  link: string
}

export default function Card(props: Props) {
  const { blogDetail, link } = props

  const { title, description, date } = blogDetail

  const { name, childImageSharp } = blogDetail.thumbnail
  const thumbnail = getImage(childImageSharp)

  return (
    <CardContainer>
      {thumbnail && (
        <Link to={link}>
          <GatsbyImage
            image={thumbnail!}
            alt={name}
            title={name}
            backgroundColor={
              typeof thumbnail.backgroundColor !== 'undefined' ? thumbnail.backgroundColor : 'white'
            }
          />
        </Link>
      )}

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
