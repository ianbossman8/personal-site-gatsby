import React, { ReactNode } from 'react'
import { IconLink } from './styles'

interface Props {
  children: ReactNode
  link: string
  title: string
}

export default function SocialIcon(props: Props) {
  const { children, link, title } = props

  return (
    <IconLink href={link} target="blank" title={title}>
      <i>{children}</i>
    </IconLink>
  )
}
