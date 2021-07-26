import React from 'react'
import { Link } from 'gatsby'
import Emoji from '../Emoji/Emoji'
import { LinksObj } from '../../util/linksGen'
import { SIZE } from '../../constants/font'
import { LinksListContainer } from './style'

interface Props {
  linksMeta: LinksObj[]
  size?: SIZE
  direction?: string
  showIcons?: boolean
}

export default function LinksList(props: Props): JSX.Element {
  const { size = SIZE.N, direction = 'row', showIcons = true } = props

  return (
    <LinksListContainer direction={direction} fontSize={size}>
      {props.linksMeta.map((meta) => (
        <li key={meta.pathname}>
          {showIcons && <Emoji symbol={meta.icon} size={size} label={meta.title} />}
          <Link to={meta.pathname}>{meta.title}</Link>
        </li>
      ))}
    </LinksListContainer>
  )
}
