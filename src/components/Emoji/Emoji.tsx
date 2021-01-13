import React from 'react'
import { SymbolSpan } from './style'
import { SIZE } from '../../constants/font'

interface Props {
  label: string
  symbol: number
  size?: SIZE
}

function Emoji(props: Props) {
  const { label, symbol, size = SIZE.L } = props

  return (
    <SymbolSpan role="img" aria-label={label} size={size}>
      {String.fromCodePoint(symbol)}
    </SymbolSpan>
  )
}

export default Emoji
