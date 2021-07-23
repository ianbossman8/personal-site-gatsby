import styled, { css, keyframes } from 'styled-components'
import { fillBackgroundText, glassBackground } from './colours'
import { SIZE } from '../constants/font'

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
  max-width: 42rem;
  padding: 0.25rem 0.75rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  text-align: center;

  mark {
    ${reverseFontColour(reverse)};
    background-color: transparent;
    font-size: ${({
      theme: {
        font: { size }
      }
    }) => size[SIZE.L]};
    font-style: italic;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing[SIZE.L]};
  }
`

export const H1Style = css`
  font-family: 'Garamond, Georgia, serif';
  box-sizing: border-box;
  font-size: ${({
    theme: {
      font: { size }
    }
  }) => size[SIZE.XXL]};
  font-weight: ${({
    theme: {
      font: { weight }
    }
  }) => weight[SIZE.L]};
`

export const H1 = styled.h1<{ reverse?: boolean }>`
  ${({ reverse }) => reverseFontColour(reverse)};
  ${H1Style};
`

export const H2Style = css`
  text-transform: capitalize;
  font-size: ${({
    theme: {
      font: { size }
    }
  }) => size[SIZE.XL]};
  font-weight: ${({
    theme: {
      font: { weight }
    }
  }) => weight[SIZE.N]};
`

export const H2 = styled.h2<{ reverse?: boolean }>`
  ${({ reverse }) => reverseFontColour(reverse)};
  ${H2Style};
`

export const H3Style = css`
  text-transform: capitalize;
  font-size: ${({
    theme: {
      font: { size }
    }
  }) => size[SIZE.L]};
  font-weight: ${({
    theme: {
      font: { weight }
    }
  }) => weight[SIZE.N]};
`

export const H3 = styled.h3<{ reverse?: boolean }>`
  ${({ reverse }) => reverseFontColour(reverse)};
  ${H3Style};
`

export const H4 = styled.h4<{ reverse?: boolean }>`
  ${({ reverse }) => reverseFontColour(reverse)};
  margin: 0.25rem;
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
  }) => weight[SIZE.L]};
`

export const pStyle = (reverse?: boolean) => css`
  ${reverseFontColour(reverse)};
  font-weight: ${({
    theme: {
      font: { weight }
    }
  }) => weight[SIZE.S]};

  a {
    text-decoration: none;
  }
`

export const P = styled.p<{ reverse?: boolean }>`
  ${({ reverse }) => pStyle(reverse)};
`

export const ColourfulHeader = styled(H1)`
  max-width: calc(100% - 2rem);
  text-align: center;
  font-family: system-ui, -apple-system, sans-serif;
  font-weight: ${({
    theme: {
      font: { weight }
    }
  }) => weight[SIZE.N]};
  text-transform: uppercase;
  user-select: none;
  ${fillBackgroundText}
  animation: ${textColourAnimation} 0.8s ease-in-out forwards;
`

export const anchorStyle = css`
  text-decoration: none;
  text-transform: capitalize;
  color: ${({ theme: { colours } }) => colours.secondary[1]};

  &:hover {
    color: ${({ theme: { colours } }) => colours.info[2]};
  }

  &:active {
    color: ${({ theme: { colours } }) => colours.info[3]};
  }
`
