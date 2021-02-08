import styled from 'styled-components'
import { MEDIA_QUERY_SMALL_WIDTH_RULE } from '../../constants/styles'

export const LinksListContainer = styled.ul<{ direction: string }>`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  list-style-type: none;

  a {
    text-decoration: none;
    color: ${({ theme: { colours } }) => colours.secondary[2]};
    text-transform: capitalize;

    span {
      max-width: 20px;
      margin-right: 0.5rem;
    }
  }

  li {
    margin: ${({ direction }) => (direction !== 'column' ? '0 0.375rem' : '0')};
  }
`
