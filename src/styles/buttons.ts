import styled, { css } from 'styled-components'
import { SIZE } from '../constants/font'
import { MEDIA_QUERY_SMALL } from '../constants/styles'

export const ThemeButton = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
`

const commonButtonCssProperties = css`
  margin: 0.5rem 1rem;
  padding: 0.5rem 1rem;
  box-shadow: ${({ theme: { colours } }) =>
    `0 2px 6px 0 ${colours.secondary[1]}`};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  text-transform: capitalize;
  cursor: pointer;
`

export const MainButton = styled.button`
  background-color: ${({ theme: { colours } }) => colours.secondary[1]};
  color: ${({ theme: { colours } }) => colours.primary[1]};
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
  ${commonButtonCssProperties}

  ${MEDIA_QUERY_SMALL} {
    font-size: ${({
      theme: {
        font: { size }
      }
    }) => size[SIZE.S]};
  }
`
