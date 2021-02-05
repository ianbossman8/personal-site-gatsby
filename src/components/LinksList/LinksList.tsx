import React from 'react'
import { Link } from 'gatsby'
import Emoji from '../Emoji/Emoji'
import { LinksObj } from '../../util/linksGen'
import { SIZE } from '../../constants/font'
import { LinksListContainer } from './style'

interface Props {
  linksMeta: LinksObj[]
  size?: SIZE
}

function LinksList(props: Props) {
  const { size = SIZE.NS } = props

  return (
    <LinksListContainer>
      {props.linksMeta.map((meta) => (
        <li key={meta.pathname}>
          <Link to={meta.pathname}>
            <Emoji symbol={meta.icon} size={size} />
            {meta.title}
          </Link>
        </li>
      ))}
    </LinksListContainer>
  )
}

export default LinksList
