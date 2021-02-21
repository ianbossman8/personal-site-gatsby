import styled, { css } from 'styled-components'
import { SIZE } from '../constants/font'
import { MEDIA_QUERY_MEDIUM_WIDTH_RULE, MEDIA_QUERY_SMALL_WIDTH_RULE } from '../constants/styles'

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

  ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
    font-size: ${({
      theme: {
        font: { size }
      }
    }) => size[SIZE.S]};
  }
`

export const ThemeButton = styled.button`
  padding: 0;
  margin: 0.75rem;
  border: none;
  background: transparent;
  cursor: pointer;
`

export const MainButton = styled.button`
  min-height: 2.75rem;
  background-color: ${({ theme: { colours } }) => colours.info[1]};
  color: ${({ theme: { colours } }) => colours.secondary[1]};
  border: none;
  box-shadow: ${({ theme: { colours } }) => `0 2px 8px 0 ${colours.secondary.blur.strong}`};
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
