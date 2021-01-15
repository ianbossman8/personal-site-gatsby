import styled, { keyframes } from 'styled-components'
import { MainButton } from '../../styles/buttons'
import { MEDIA_QUERY_MEDIUM } from '../../constants/styles'
import { colourfulBackground, fillBackgroundText } from '../../styles/colours'

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
    border-image: ${({ theme: { colours } }) =>
        colourfulBackground(colours, 'toRight')}
      5;
    background: transparent;

    span {
      ${fillBackgroundText};
    }
  }

  button:first-child {
    opacity: 0;
    animation: ${opacityAnimation} 1s ease-in forwards;
  }

  button:nth-child(2) {
    opacity: 0;
    animation: ${opacityAnimation} 1.25s ease-in forwards;
  }

  button:nth-child(3) {
    opacity: 0;
    animation: ${opacityAnimation} 1.5s ease-in forwards;
  }

  button:last-child {
    opacity: 0;
    animation: ${opacityAnimation} 1.75s ease-in forwards;
  }

  ${MEDIA_QUERY_MEDIUM} {
    flex-direction: column;
  }
`
