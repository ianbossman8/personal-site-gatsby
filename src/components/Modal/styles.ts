import styled, { keyframes } from 'styled-components'
import { H2, mainFontColour } from '../../styles/text'
import { colourfulBackground } from '../../styles/colours'
import { FONT_SIZE } from '../../constants/font'

const opacityAnimation = keyframes`
 to {
  background-color: rgba(255, 255, 255, 0.1);
 }
`

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  animation: ${opacityAnimation} 0.5s ease-in forwards;
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

export const ContentContainer = styled.article`
  min-height: 475px;
  min-width: 300px;
  height: 57.5%;
  width: 57.5%;
  box-sizing: border-box;
  opacity: 0;
  padding: 0.75rem;
  background: ${({ theme: { colours } }) =>
    colourfulBackground(colours, 'toBottomRight')};
  background-size: 200% 200%;
  box-shadow: ${({ theme: { colours } }) =>
    `0 4px 12px 0 ${colours.secondary[1]}`};
  overflow: scroll;
  z-index: 2;
  animation: 6s ${changeBackgroundPosition} ease-in infinite,
    0.8s ${modalOpacityAnimation} ease-out forwards;
`

export const ModalHeader = styled(H2)`
  text-transform: uppercase;
  text-decoration: underline;
  letter-spacing: 2px;
`

export const BlockQuote = styled.blockquote`
  mark {
    background-color: transparent;
    font-size: ${({
      theme: {
        font: { size }
      }
    }) => size[FONT_SIZE.N]};
    font-style: italic;
    color: ${({ theme: { colours } }) => colours.secondary[1]};
  }
`
