import styled, { css, DefaultTheme, keyframes } from 'styled-components'
import FONT_SIZE from '../constants/fontSize'

function colourfulText(colours: DefaultTheme['colours']) {
  return `linear-gradient(to right, ${colours.main[3]}, ${colours.info[3]}, ${colours.warn[3]}, ${colours.alert[3]})`
}

export const fillBackgroundText = css`
  background: ${({ theme: { colours } }) => colourfulText(colours)};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const textColourAnimation = keyframes`
  to {
    transform: scale(1.1);
  }
`

export const WelcomeText = styled.h1`
  margin: 0;
  text-transform: uppercase;
  font-weight: 400;
  font-size: ${({ theme: { fontSize } }) => fontSize[FONT_SIZE.EL]};
  ${fillBackgroundText}
  animation: 0.8s ${textColourAnimation} ease-in-out forwards;
`
