import styled, { css, keyframes } from 'styled-components'
import { fillBackgroundText, glassBackground } from './colours'
import { SIZE } from '../constants/font'
import { MEDIA_QUERY_MEDIUM, MEDIA_QUERY_SMALL } from '../constants/styles'

const textColourAnimation = keyframes`
  to {
    transform: scale(1.1);
  }
`

export function mainFontColour(primary?: boolean) {
  return css`
    color: ${({ theme: { colours } }) =>
      primary ? colours.primary[1] : colours.primary[3]};
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

export const pStyle = css`
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
  ${pStyle};
`

export const WelcomeText = styled(H1)`
  text-align: center;
  text-transform: uppercase;
  ${fillBackgroundText}
  animation: 0.8s ${textColourAnimation} ease-in-out forwards;
`

export const blockQuoteStyle = css`
  ${glassBackground};
  padding: 0.1rem 0.75rem;
  margin-bottom: 2rem;

  mark {
    ${mainFontColour()};
    background-color: transparent;
    font-size: ${({
      theme: {
        font: { size }
      }
    }) => size[SIZE.N]};
    font-style: italic;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing[SIZE.L]};
  }
`
