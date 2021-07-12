import React, { ReactNode } from 'react'
import { IconLink } from './styles'

interface Props {
  children: ReactNode
  link: string
  title: string
  brand?: string
}

export default function Icon(props: Props) {
  const { children, link, title, brand } = props

  return (
    <IconLink href={link} target="blank" title={title} brand={brand}>
      <i>{children}</i>
    </IconLink>
  )
}
