import styled, { css, keyframes } from 'styled-components'
import { blockQuoteStyle, H2, pStyle } from '../../styles/text'
import { colourfulBackground } from '../../styles/colours'
import { SIZE } from '../../constants/font'
import { MEDIA_QUERY_MEDIUM_RULE } from '../../constants/styles'

const opacityAnimation = keyframes`
 to {
  background-color: rgba(255, 255, 255, 0.1);
 }
`

const changeBackgroundPosition = keyframes`
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}
`

const modalOpacityAnimation = keyframes`
 to {
  opacity: 0.975;
 }
`

export const ModalHeader = styled(H2)`
  text-transform: uppercase;
  text-decoration: underline;
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing[SIZE.S]};
`

const standardModalStyles = css`
  min-height: 475px;
  min-width: 300px;
  height: 57.5%;
  width: 57.5%;
  background: ${({ theme: { colours } }) => colourfulBackground(colours, 'toBottomRight')};
  background-size: 200% 200%;
  box-shadow: ${({ theme: { colours } }) => `0 4px 12px 0 ${colours.secondary[1]}`};
  animation: 6s ${changeBackgroundPosition} ease-in infinite;
`

const blogsModalStyles = css`
  height: 100%;
  width: 100%;
  background: ${({ theme: { colours } }) => colours.primary[3]};
`

export const ContentContainer = styled.section<{ main: boolean }>`
  ${({ main }) => (!main ? standardModalStyles : blogsModalStyles)}
  box-sizing: border-box;
  opacity: 0;
  padding: 1.5rem;
  overflow: scroll;
  z-index: 3;
  animation: 0.8s ${modalOpacityAnimation} ease-out forwards;

  svg.modal--close-button {
    position: sticky;
    top: 0;
    float: right;
    z-index: 4;
    cursor: pointer;

    path {
      stroke: ${({ theme: { colours }, main }) => (!main ? colours.primary[1] : colours.secondary[1])};
    }
  }

  blockquote {
    ${blockQuoteStyle};
  }

  p {
    ${pStyle};
    color: ${({ theme: { colours }, main }) => (main ? colours.secondary[3] : colours.primary[3])};
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing[SIZE.S]};
  }

  ${MEDIA_QUERY_MEDIUM_RULE} {
    blockquote {
      padding: 0.15rem 0.5rem;
      margin: 0;

      mark {
        letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing[SIZE.S]};
      }
    }
  }
`

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  animation: ${opacityAnimation} 0.2s ease-in forwards;
`
