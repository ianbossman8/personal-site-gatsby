import React from 'react'
import { P, H3 } from '../../styles/text'
import { Frontmatter } from '../../templates/Projects'
import { CardContainer } from './styles'

interface Props {
  cardDetail: Frontmatter
}

export default function LargeCard(props: Props) {
  const { cardDetail } = props
  const {
    title,
    description,
    date,
    edited_date,
    external_link,
    repo_link,
    main_language,
    other_languages,
    main_tech
  } = cardDetail

  return (
    <CardContainer>
      <H3>{title}</H3>
    </CardContainer>
  )
}
