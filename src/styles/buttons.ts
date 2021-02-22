import styled, { css } from 'styled-components'
import { SIZE } from '../constants/font'
import { MEDIA_QUERY_MEDIUM_WIDTH_RULE } from '../constants/styles'

const commonButtonCssProperties = css`
  margin: 0.75rem 1rem;
  padding: 0.5rem 1.25rem;
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
  cursor: pointer;

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

export const mainButtonCss = (reverse: boolean = false) =>
  !reverse
    ? css`
        background-color: ${({ theme: { colours } }) => colours.info[3]};
        color: ${({ theme: { colours } }) => colours.primary[1]};
        box-shadow: ${({ theme: { colours } }) => `0 2px 8px 0 ${colours.secondary.blur.strong}`};
      `
    : css`
        background-color: ${({ theme: { colours } }) => colours.info[1]};
        color: ${({ theme: { colours } }) => colours.secondary[1]};
        box-shadow: ${({ theme: { colours } }) => `0 2px 8px 0 ${colours.primary.blur.strong}`};
      `

export const MainButton = styled.button`
  min-height: 2.75rem;
  ${mainButtonCss()};
  ${commonButtonCssProperties}
`

export const MenuButton = styled.button`
  display: none;

  ${MEDIA_QUERY_MEDIUM_WIDTH_RULE} {
    display: block;
    position: fixed;
    top: 0.5rem;
    left: 1rem;
    padding: 0;
    background: transparent;
    border: none;
    color: ${({ theme: { colours } }) => colours.secondary[1]};
    z-index: 2;
    cursor: pointer;
  }
`
