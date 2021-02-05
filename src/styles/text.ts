import styled, { css, keyframes } from 'styled-components'
import { fillBackgroundText, glassBackground } from './colours'
import { SIZE } from '../constants/font'
import { MEDIA_QUERY_MEDIUM_RULE, MEDIA_QUERY_SMALL_RULE } from '../constants/styles'

const textColourAnimation = keyframes`
  to {
    transform: scale(1.1);
  }
`

export function mainFontColour(primary?: boolean, main?: boolean) {
  if (main) {
    return css`
      color: ${({ theme: { colours } }) => colours.secondary[1]};
    `
  }

  return css`
    color: ${({ theme: { colours } }) => (primary ? colours.primary[1] : colours.primary[3])};
  `
}

export const blockQuoteStyle = css`
  ${glassBackground};
  padding: 0.25rem 0.75rem;
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

export const pStyle = css`
  font-weight: ${({
    theme: {
      font: { weight }
    }
  }) => weight[SIZE.S]};

  ${MEDIA_QUERY_SMALL_RULE} {
    font-size: ${({
      theme: {
        font: { size }
      }
    }) => size[SIZE.S]};
  }

  a {
    text-decoration: none;
    color: ${({ theme: { colours } }) => colours.info[2]};
  }
`

export const H1 = styled.h1<{ primary?: boolean; main?: boolean }>`
  ${({ primary = false, main = false }) => mainFontColour(primary, main)};
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

  ${MEDIA_QUERY_MEDIUM_RULE} {
    font-size: ${({
      theme: {
        font: { size }
      }
    }) => size[SIZE.L]};
  }

  ${MEDIA_QUERY_SMALL_RULE} {
    font-size: ${({
      theme: {
        font: { size }
      }
    }) => size[SIZE.NL]};
  }
`

export const H2 = styled.h2<{ primary?: boolean; main?: boolean }>`
  ${({ primary = false, main = false }) => mainFontColour(primary, main)};
  text-transform: capitalize;
  font-size: ${({
    theme: {
      font: { size }
    }
  }) => size[SIZE.NL]};
  font-weight: ${({
    theme: {
      font: { weight }
    }
  }) => weight[SIZE.S]};

  ${MEDIA_QUERY_SMALL_RULE} {
    font-size: ${({
      theme: {
        font: { size }
      }
    }) => size[SIZE.N]};
  }
`

export const H3 = styled.h3<{ primary?: boolean; main?: boolean }>`
  ${({ primary = false, main = false }) => mainFontColour(primary, main)};
  text-transform: capitalize;
  font-size: ${({
    theme: {
      font: { size }
    }
  }) => size[SIZE.N]};
  font-weight: ${({
    theme: {
      font: { weight }
    }
  }) => weight[SIZE.S]};

  ${MEDIA_QUERY_SMALL_RULE} {
    font-size: ${({
      theme: {
        font: { size }
      }
    }) => size[SIZE.NS]};
  }
`

export const P = styled.p<{ primary?: boolean; main?: boolean }>`
  ${({ primary = true, main = true }) => mainFontColour(primary, main)};
  ${pStyle};
`

export const ColourFulHeader = styled(H1)`
  text-align: center;
  text-transform: uppercase;
  ${fillBackgroundText}
  animation: 0.8s ${textColourAnimation} ease-in-out forwards;
`
