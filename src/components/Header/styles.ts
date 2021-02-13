import styled, { css } from 'styled-components'
import { MEDIA_QUERY_MEDIUM_WIDTH_RULE } from '../../constants/styles'
import { fillBackgroundText } from '../../styles/colours'
import { LinksListContainer } from '../LinksList/style'

export const AppHeader = styled.header<{ isIndex: boolean }>`
  width: inherit;
  display: flex;
  justify-content: center;
  user-select: none;

  ${({ isIndex }) =>
    !isIndex &&
    css`
      flex-direction: column;
      align-items: center;

      li {
        position: relative;
        width: max-content;
        margin: 0 1rem;
        padding: 0.5rem;

        a:hover {
          ${fillBackgroundText};

          &::after {
            position: absolute;
            width: calc(100% - 1rem);
            display: block;
            content: '';
            bottom: 0;
            height: 4px;
            background-color: ${({ theme: { colours } }) => colours.info[2]};
          }
        }
      }

      ${MEDIA_QUERY_MEDIUM_WIDTH_RULE} {
        ${LinksListContainer} {
          flex-direction: column;
          justify-content: center;

          li {
            margin: 0.5rem 1rem;
          }
        }
      }
    `}
`
