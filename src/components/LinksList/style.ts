import styled, { css } from 'styled-components'
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

  li {
    ${({ direction }) =>
      direction !== 'column'
        ? css`
            margin: 0 0.375rem;
          `
        : css`
            margin: 0.175rem 0;
          `};

    span {
      max-width: 1.25rem;
      margin-right: 0.5rem;
    }
  }

  a {
    text-decoration: none;
    text-transform: capitalize;
    color: ${({ theme: { colours } }) => colours.secondary[1]};

    &:hover {
      color: ${({ theme: { colours } }) => colours.info[3]};
    }
  }
`
