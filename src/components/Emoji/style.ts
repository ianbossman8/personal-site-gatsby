import styled from 'styled-components'
import FONT_SIZE from '../../constants/fontSize'

interface SymbolSpanProps {
  size: FONT_SIZE
}

export const SymbolSpan = styled.span<SymbolSpanProps>`
  font-size: ${({ theme: { fontSize }, size }) => fontSize[size]};
`
