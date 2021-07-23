import styled, { keyframes } from 'styled-components'
import { commonButtonCssProperties } from '../../styles/buttons'
import { colourfulBackground, fillBackgroundText } from '../../styles/colours'
import { MEDIA_QUERY_MEDIUM_WIDTH_RULE } from '../../constants/styles'
import { SIZE } from '../../constants/font'

const opacityAnimation = keyframes`
 to {
   opacity: 1;
 }
`

export const IntroButton = styled.button`
  ${commonButtonCssProperties};
  border-image: ${({ theme: { colours } }) => colourfulBackground(colours, 'toRight')} 5;
  background: transparent;
  user-select: none;
  font-size: ${({
    theme: {
      font: { size }
    }
  }) => size[SIZE.L]};

  span {
    ${fillBackgroundText};
  }

  &:hover {
    box-shadow: ${({ theme: { colours } }) =>
      `inset 0.175rem 0.25rem 0.375rem ${colours.secondary.blur.light}`};
  }

  &:active {
    box-shadow: ${({ theme: { colours } }) =>
      `inset 0.175rem 0.25rem 0.25rem ${colours.secondary.blur.light}`};
  }
`

export const IntroBarContainer = styled.div`
  display: flex;
  justify-content: center;

  button:nth-of-type(1) {
    opacity: 0;
    animation: ${opacityAnimation} 0.75s ease-in forwards;
  }

  button:nth-of-type(2) {
    opacity: 0;
    animation: ${opacityAnimation} 0.9s ease-in forwards;
  }

  button:nth-of-type(3) {
    opacity: 0;
    animation: ${opacityAnimation} 1.05s ease-in forwards;
  }

  button:nth-of-type(4) {
    opacity: 0;
    animation: ${opacityAnimation} 1.2s ease-in forwards;
  }

  button:nth-of-type(5) {
    opacity: 0;
    animation: ${opacityAnimation} 1.35s ease-in forwards;
  }

  ${MEDIA_QUERY_MEDIUM_WIDTH_RULE} {
    flex-direction: column;
  }
`
