import styled from 'styled-components'
import { FONT_SIZE } from '../../constants/font'

interface SymbolSpanProps {
  size: FONT_SIZE
}

export const SymbolSpan = styled.span<SymbolSpanProps>`
  font-size: ${({ theme: { font }, size }) => font.size[size]};
`
