import styled, { css, keyframes } from 'styled-components'
import { fillBackgroundText } from './colours'
import { SIZE } from '../constants/font'
import { MEDIA_QUERY_MEDIUM, MEDIA_QUERY_SMALL } from '../constants/styles'

const textColourAnimation = keyframes`
  to {
    transform: scale(1.1);
  }
`

export function mainFontColour(primary: boolean) {
  return css`
    color: ${({ theme: { colours } }) =>
      primary ? colours.primary[1] : colours.secondary[1]};
  `
}

export const H1 = styled.h1<{ primary?: boolean }>`
  font-weight: ${({
    theme: {
      font: { weight }
    }
  }) => weight[SIZE.N]};
  font-size: ${({
    theme: {
      font: { size }
    }
  }) => size[SIZE.EL]};

  ${MEDIA_QUERY_MEDIUM} {
    font-size: ${({
      theme: {
        font: { size }
      }
    }) => size[SIZE.L]};
  }

  ${MEDIA_QUERY_SMALL} {
    font-size: ${({
      theme: {
        font: { size }
      }
    }) => size[SIZE.NL]};
  }
`

export const H2 = styled.h2<{ primary?: boolean }>`
  ${({ primary = false }) => mainFontColour(primary)};
  font-size: ${({
    theme: {
      font: { size }
    }
  }) => size[SIZE.NL]};
  text-transform: capitalize;
  font-weight: ${({
    theme: {
      font: { weight }
    }
  }) => weight[SIZE.S]};

  ${MEDIA_QUERY_SMALL} {
    font-size: ${({
      theme: {
        font: { size }
      }
    }) => size[SIZE.S]};
  }
`

export const P = styled.p<{ primary?: boolean }>`
  ${({ primary = true }) => mainFontColour(primary)};
  font-weight: ${({
    theme: {
      font: { weight }
    }
  }) => weight[SIZE.S]};

  ${MEDIA_QUERY_SMALL} {
    font-size: ${({
      theme: {
        font: { size }
      }
    }) => size[SIZE.S]};
  }
`

export const WelcomeText = styled(H1)`
  text-align: center;
  text-transform: uppercase;
  ${fillBackgroundText}
  animation: 0.8s ${textColourAnimation} ease-in-out forwards;
`
