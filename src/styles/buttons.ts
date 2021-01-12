import styled from 'styled-components'
import { colourfulBackground, fillBackgroundText } from '../styles/colours'
import { FONT_SIZE, FONT_WEIGHT } from '../constants/font'
import { MEDIA_QUERY_SMALL } from '../constants/styles'

export const ThemeButton = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
`

export const MainButton = styled.button`
  margin: 0.5rem 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid transparent;
  box-shadow: ${({ theme: { colours } }) =>
    `0 2px 6px 0 ${colours.secondary[1]}`};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-image: ${({ theme: { colours } }) =>
      colourfulBackground(colours, 'toRight')}
    5;
  text-transform: capitalize;
  ${fillBackgroundText};
  font-size: ${({
    theme: {
      font: { size }
    }
  }) => size[FONT_SIZE.L]};
  font-weight: ${({
    theme: {
      font: { weight }
    }
  }) => weight[FONT_WEIGHT.S]};
  cursor: pointer;

  &:hover {
    color: red;
  }

  ${MEDIA_QUERY_SMALL} {
    font-size: ${({
      theme: {
        font: { size }
      }
    }) => size[FONT_SIZE.S]};
  }
`
