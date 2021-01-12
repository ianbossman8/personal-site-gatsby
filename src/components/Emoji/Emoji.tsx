import React from 'react'
import { SymbolSpan } from './style'
import { FONT_SIZE } from '../../constants/font'

interface Props {
  label: string
  symbol: number
  size?: FONT_SIZE
}

function Emoji(props: Props) {
  const { label, symbol, size = FONT_SIZE.L } = props

  return (
    <SymbolSpan role="img" aria-label={label} size={size}>
      {String.fromCodePoint(symbol)}
    </SymbolSpan>
  )
}

export default Emoji
