import styled from 'styled-components'

export const IconLink = styled.a<{ brand: string }>`
  margin: 0 0.25rem;
  color: ${({ theme: { colours }, brand }) => colours.brands[brand]} !important;
`
