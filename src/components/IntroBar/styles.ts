import styled, { keyframes } from 'styled-components'
import { MainButton } from '../../styles/buttons'
import { colourfulBackground, fillBackgroundText } from '../../styles/colours'
import { MEDIA_QUERY_MEDIUM_WIDTH_RULE, MEDIA_QUERY_SMALL_WIDTH_RULE } from '../../constants/styles'

const opacityAnimation = keyframes`
 to {
   opacity: 1;
 }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;

  ${MainButton} {
    border: 2px solid inherit;
    border-image: ${({ theme: { colours } }) => colourfulBackground(colours, 'toRight')} 5;
    background: transparent;
    user-select: none;
    ${fillBackgroundText}

    ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
      min-width: 240px;
    }
  }

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
