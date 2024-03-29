import React from 'react'
import { P, H4 } from '../../styles/text'
import { ProjectsFrontmatter } from '../../types'
import { CardContainer, LeftDiv, RightDiv, BottomDiv } from './styles'

interface Props {
  cardDetail: Partial<ProjectsFrontmatter>
  repoIcon: JSX.Element
  siteIcon: JSX.Element
  languageLogo: JSX.Element
}

function stringArrayLooper(arr: string[] = []) {
  return <span>{arr.join(', ')}</span>
}

export default function LargeCard(props: Props): JSX.Element {
  const { cardDetail, repoIcon, siteIcon, languageLogo } = props
  const { title, description, other_techs, other_languages, main_tech, main_language, date } =
    cardDetail

  return (
    <CardContainer>
      <LeftDiv>
        <H4>{title}</H4>
        <P>{description}</P>
        <P>
          {main_language}, {stringArrayLooper(other_languages)}
        </P>
      </LeftDiv>
      <RightDiv>
        <div>
          <P>{date}</P>
          {repoIcon}
          {siteIcon}
        </div>
        {languageLogo}
      </RightDiv>
      <BottomDiv>
        <P>
          Stack{stringArrayLooper(other_techs)} {main_tech}
        </P>
      </BottomDiv>
    </CardContainer>
  )
}
