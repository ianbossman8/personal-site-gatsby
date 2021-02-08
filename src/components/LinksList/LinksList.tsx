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

function LinksList(props: Props) {
  const { size = SIZE.NS, direction = 'row', showIcons = true } = props

  return (
    <LinksListContainer direction={direction}>
      {props.linksMeta.map((meta) => (
        <li key={meta.pathname}>
          <Link to={meta.pathname}>
            {showIcons && <Emoji symbol={meta.icon} size={size} label={meta.title} />}
            {meta.title}
          </Link>
        </li>
      ))}
    </LinksListContainer>
  )
}

export default LinksList
