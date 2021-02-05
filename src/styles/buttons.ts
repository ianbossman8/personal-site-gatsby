import styled, { css } from 'styled-components'
import { SIZE } from '../constants/font'
import { MEDIA_QUERY_SMALL_RULE } from '../constants/styles'

export const ThemeButton = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
`

export const commonButtonCssProperties = css`
  margin: 0.75rem 1rem;
  padding: 0.5rem 1rem;
  box-shadow: ${({ theme: { colours } }) => `0 2px 6px 0 ${colours.secondary[1]}`};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
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

  ${MEDIA_QUERY_SMALL_RULE} {
    font-size: ${({
      theme: {
        font: { size }
      }
    }) => size[SIZE.S]};
  }
`

export const PrimaryButton = styled.button`
  ${commonButtonCssProperties};
  background-color: ${({ theme: { colours } }) => colours.main[1]};
  color: ${({ theme: { colours } }) => colours.secondary[1]};
  width: 200px;

  ${MEDIA_QUERY_SMALL_RULE} {
    width: 150px;
  }
`

export const MainButton = styled.button`
  min-height: 3rem;
  background-color: ${({ theme: { colours } }) => colours.main[1]};
  color: ${({ theme: { colours } }) => colours.primary[1]};

  ${commonButtonCssProperties}

  a {
    text-decoration: none;
  }
`

export const MenuButton = styled.button`
  position: fixed;
  top: 0.5rem;
  left: 1rem;
  padding: 0;
  background: transparent;
  border: none;
  color: ${({ theme: { colours } }) => colours.secondary[1]};
  z-index: 2;
  cursor: pointer;
`
