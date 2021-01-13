import styled from 'styled-components'
import { SIZE } from '../../constants/font'

interface SymbolSpanProps {
  size: SIZE
}

export const SymbolSpan = styled.span<SymbolSpanProps>`
  font-size: ${({ theme: { font }, size }) => font.size[size]};
`
