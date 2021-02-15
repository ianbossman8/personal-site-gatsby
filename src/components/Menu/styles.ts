import styled, { css } from 'styled-components'
import { MEDIA_QUERY_MEDIUM_WIDTH_RULE } from '../../constants/styles'

export const MenuContainer = styled.div<{ showMenu: boolean }>`
  ${({ showMenu }) =>
    css`
      ${MEDIA_QUERY_MEDIUM_WIDTH_RULE} {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${({ theme: { colours } }) => colours.primary.blur.strong};
        -webkit-backdrop-filter: blur(1px);
        backdrop-filter: blur(1px);
        display: ${showMenu ? 'flex' : 'none'};
        justify-content: center;
        z-index: 1;
      }
    `}
`