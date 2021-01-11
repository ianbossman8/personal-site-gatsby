import styled, { css, DefaultTheme, keyframes } from 'styled-components'
import FONT_SIZE from '../constants/fontSize'
import { MEDIA_QUERY_MEDIUM, MEDIA_QUERY_SMALL } from '../constants/styles'

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

export const H1 = styled.h1`
  font-weight: 400;
  font-size: ${({ theme: { fontSize } }) => fontSize[FONT_SIZE.EL]};

  ${MEDIA_QUERY_MEDIUM} {
    font-size: ${({ theme: { fontSize } }) => fontSize[FONT_SIZE.L]};
  }

  ${MEDIA_QUERY_SMALL} {
    font-size: ${({ theme: { fontSize } }) => fontSize[FONT_SIZE.N]};
  }
`

export const P = styled.p`
  font-weight: 200;

  ${MEDIA_QUERY_SMALL} {
    font-size: ${({ theme: { fontSize } }) => fontSize[FONT_SIZE.XS]};
  }
`

export const WelcomeText = styled(H1)`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  ${fillBackgroundText}
  animation: 0.8s ${textColourAnimation} ease-in-out forwards;
`
