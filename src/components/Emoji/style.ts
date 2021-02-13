import styled from 'styled-components'
import { SIZE } from '../../constants/font'

export const SymbolSpan = styled.span<{ size: SIZE }>`
  font-size: ${({ theme: { font }, size }) => font.size[size]};
  user-select: none;
`
