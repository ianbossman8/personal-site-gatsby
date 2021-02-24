import React from 'react'
import { SymbolSpan } from './style'
import { SIZE } from '../../constants/font'

interface Props {
  label: string
  symbol: number
  size?: SIZE
}

export default function Emoji(props: Props) {
  const { label, symbol, size = SIZE.XL } = props

  return (
    <SymbolSpan role="img" aria-label={label} size={size}>
      {String.fromCodePoint(symbol)}
    </SymbolSpan>
  )
}
