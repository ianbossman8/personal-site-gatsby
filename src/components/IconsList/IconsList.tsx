import React, { ReactNode } from 'react'
import { IconsListContainer } from './styles'
import Icon from '../Icon/Icon'

interface Props {
  icons: {
    name: string
    link: string
    title: string
    icon: ReactNode
  }[]
}

export default function IconsList(props: Props) {
  return (
    <IconsListContainer>
      {props.icons.map((icon) => (
        <Icon link={icon.link} key={icon.name} title={icon.title} brand={icon.name}>
          {icon.icon}
        </Icon>
      ))}
    </IconsListContainer>
  )
}
