import styled from 'styled-components'
import { SIZE } from '../../constants/font'
import { MEDIA_QUERY_SMALL_WIDTH_RULE, MEDIA_QUERY_MEDIUM_WIDTH_RULE } from '../../constants/styles'

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
    margin: ${({ direction }) => (direction !== 'column' ? '0 0.375rem' : '0.175rem 0')};

    span {
      max-width: 20px;
      margin-right: 0.5rem;
    }

    ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
      margin: 0.125rem 0;
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme: { colours } }) => colours.secondary[1]};
    text-transform: capitalize;

    &:hover {
      color: ${({ theme: { colours } }) => colours.info[3]};
    }
  }
`
