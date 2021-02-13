import styled from 'styled-components'
import { SIZE } from '../../constants/font'

export const LinksListContainer = styled.ul<{ direction: string; fontSize: SIZE }>`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  list-style-type: none;
  font-size: ${({
    theme: {
      font: { size }
    },
    fontSize
  }) => size[fontSize]};

  a {
    text-decoration: none;
    color: ${({ theme: { colours } }) => colours.secondary[2]};
    text-transform: capitalize;
  }

  li {
    margin: ${({ direction }) => (direction !== 'column' ? '0 0.375rem' : '0')};

    span {
      max-width: 20px;
      margin-right: 0.5rem;
    }
  }
`
