import React from 'react'
import { Link } from 'gatsby'
import CustomGatsbyImage from '../CustomGatsbyImage/CustomGatsbyImage'
import { P, H3 } from '../../styles/text'
import { CardContainer, InfoContainer, MetaContainer } from './styles'
import { BlogsFrontmatter } from '../../types'
import { LINKS } from '../../constants/links'

interface Props {
  cardDetail: BlogsFrontmatter
  link: string
  origin?: string
}

export default function Card(props: Props): JSX.Element {
  const { cardDetail, link, origin = LINKS.INTERNAL_LINKS.ROOT } = props
  const { title, description, date, thumbnail_description, thumbnail } = cardDetail

  return (
    <CardContainer>
      {thumbnail && (
        <Link to={link}>
          <CustomGatsbyImage
            imageDetail={thumbnail.childImageSharp}
            description={thumbnail_description}
          />
        </Link>
      )}

      <InfoContainer>
        <Link to={link} state={{ origin }}>
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
