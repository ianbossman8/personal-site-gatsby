import styled, { keyframes } from 'styled-components'
import { MEDIA_QUERY_SMALL } from '../../constants/styles'

const opacityAnimation = keyframes`
 to {
   opacity: 1;
 }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;

  button:first-child {
    opacity: 0;
    animation: ${opacityAnimation} 1s ease-in forwards;
  }

  button:nth-child(2) {
    opacity: 0;
    animation: ${opacityAnimation} 1.4s ease-in forwards;
  }

  button:last-child {
    opacity: 0;
    animation: ${opacityAnimation} 1.75s ease-in forwards;
  }

  ${MEDIA_QUERY_SMALL} {
    flex-direction: column;
  }
`
