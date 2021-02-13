import styled, { css, keyframes } from 'styled-components'
import { fillBackgroundText, glassBackground } from './colours'
import { SIZE } from '../constants/font'
import { MEDIA_QUERY_MEDIUM_WIDTH_RULE, MEDIA_QUERY_SMALL_WIDTH_RULE } from '../constants/styles'

const textColourAnimation = keyframes`
  to {
    transform: scale(1.1);
  }
`

export function reverseFontColour(reverse: boolean | undefined = false) {
  return reverse
    ? css`
        color: ${({ theme: { colours } }) => colours.primary[1]};
      `
    : css`
        color: ${({ theme: { colours } }) => colours.secondary[1]};
      `
}

export const blockQuoteStyle = (reverse?: boolean) => css`
  ${glassBackground};
  padding: 0.25rem 0.75rem;
  margin-bottom: 2rem;

  mark {
    ${reverseFontColour(reverse)};
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

export const pStyle = (reverse?: boolean) => css`
  ${reverseFontColour(reverse)};
  font-weight: ${({
    theme: {
      font: { weight }
    }
  }) => weight[SIZE.S]};

  ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
    font-size: ${({
      theme: {
        font: { size }
      }
    }) => size[SIZE.XS]};
  }

  a {
    text-decoration: none;
  }
`

export const H1 = styled.h1<{ reverse?: boolean }>`
  ${({ reverse }) => reverseFontColour(reverse)};
  font-size: ${({
    theme: {
      font: { size }
    }
  }) => size[SIZE.EL]};
  font-weight: ${({
    theme: {
      font: { weight }
    }
  }) => weight[SIZE.N]};

  ${MEDIA_QUERY_MEDIUM_WIDTH_RULE} {
    font-size: ${({
      theme: {
        font: { size }
      }
    }) => size[SIZE.L]};
  }

  ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
    font-size: ${({
      theme: {
        font: { size }
      }
    }) => size[SIZE.NL]};
  }
`

export const H2 = styled.h2<{ reverse?: boolean }>`
  ${({ reverse }) => reverseFontColour(reverse)};
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
  }) => weight[SIZE.N]};

  ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
    font-size: ${({
      theme: {
        font: { size }
      }
    }) => size[SIZE.N]};
  }
`

export const H3 = styled.h3<{ reverse?: boolean }>`
  ${({ reverse }) => reverseFontColour(reverse)};
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
  }) => weight[SIZE.N]};

  ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
    font-size: ${({
      theme: {
        font: { size }
      }
    }) => size[SIZE.NS]};
  }
`

export const P = styled.p<{ reverse?: boolean }>`
  ${({ reverse }) => pStyle(reverse)};
`

export const ColourFulHeader = styled(H1)`
  text-align: center;
  text-transform: uppercase;
  user-select: none;
  ${fillBackgroundText}
  animation: ${textColourAnimation} 0.8s ease-in-out forwards;
`
