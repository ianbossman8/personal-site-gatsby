import styled, { css } from 'styled-components'
import { MEDIA_QUERY_MEDIUM_WIDTH_RULE } from '../../constants/styles'

export const Menu = styled.div<{ showMenu: boolean; isIndex: boolean }>`
  ${({ isIndex, showMenu }) =>
    !isIndex &&
    css`
      position: static;

      ${MEDIA_QUERY_MEDIUM_WIDTH_RULE} {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${({ theme: { colours } }) => colours.primary.blur.strong};
        display: ${showMenu ? 'flex' : 'none'};
        justify-content: center;
        z-index: 1;
      }
    `}
`
