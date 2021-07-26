import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components'
import { SIZE } from '../constants/font'
import { MEDIA_QUERY_MEDIUM_WIDTH_RULE } from '../constants/styles'

export const commonButtonCssProperties = css`
  margin: 0.75rem 1rem;
  padding: 0.5rem 1.75rem;
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
  }) => weight[SIZE.S]};
  cursor: pointer;
  box-shadow: ${({ theme: { colours } }) => `0 0.125rem 0.5rem ${colours.secondary.blur.strong}`};

  &:disabled {
    background-color: ${({ theme: { colours } }) => colours.secondary.blur.light};
    cursor: not-allowed;
  }
`

export const ThemeButton = styled.button`
  padding: 0;
  margin: 0.75rem;
  border: none;
  background: transparent;
  cursor: pointer;
`

export function mainButtonCss(reverse = false): FlattenInterpolation<ThemeProps<DefaultTheme>> {
  return !reverse
    ? css`
        background-color: ${({ theme: { colours } }) => colours.info[3]};
        color: ${({ theme: { colours } }) => colours.primary[1]};
        box-shadow: ${({ theme: { colours } }) =>
          `0 0.125rem 0.5rem 0 ${colours.secondary.blur.strong}`};
      `
    : css`
        background-color: ${({ theme: { colours } }) => colours.info[1]};
        color: ${({ theme: { colours } }) => colours.secondary[1]};
        box-shadow: ${({ theme: { colours } }) =>
          `0 0.125rem 0.5rem 0 ${colours.primary.blur.strong}`};
      `
}

export const MainButton = styled.button`
  ${mainButtonCss()};
  ${commonButtonCssProperties}
  min-height: 2.75rem;
  border: none;
  border-radius: 0.25rem;
`

export const MenuButton = styled.button`
  display: none;
  color: ${({ theme: { colours } }) => colours.secondary[1]};

  ${MEDIA_QUERY_MEDIUM_WIDTH_RULE} {
    width: 3rem;
    height: 3rem;
    display: block;
    position: fixed;
    top: 0.5rem;
    left: 1rem;
    padding: 0;
    background: transparent;
    border: none;
    border-radius: 50%;

    z-index: 2;
    cursor: pointer;

    svg {
      path {
        stroke: ${({ theme: { colours } }) => colours.secondary[1]};
      }
    }

    &:hover {
      background-color: ${({ theme: { colours } }) => colours.secondary.blur.light};
    }

    transition: background-color 0.2s ease-out;
  }
`
