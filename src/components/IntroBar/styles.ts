import styled, { css, keyframes } from 'styled-components'
import { MainButton } from '../../styles/buttons'
import { colourfulBackground, fillBackgroundText } from '../../styles/colours'
import { MEDIA_QUERY_MEDIUM_RULE } from '../../constants/styles'

const opacityAnimation = keyframes`
 to {
   opacity: 1;
 }
`

export const Container = styled.nav<{ isIndex: boolean; exceedBoundary?: boolean }>`
  display: flex;
  justify-content: center;

  ${MainButton} {
    border: 2px solid inherit;
    border-image: ${({ theme: { colours } }) => colourfulBackground(colours, 'toRight')} 5;
    background: transparent;

    span {
      ${fillBackgroundText};
    }
  }

  a.home--link {
    align-self: center;
  }

  ${({ isIndex }) =>
    isIndex &&
    css`
      button:nth-of-type(1) {
        opacity: 0;
        animation: ${opacityAnimation} 0.8s ease-in forwards;
      }

      button:nth-of-type(2) {
        opacity: 0;
        animation: ${opacityAnimation} 1s ease-in forwards;
      }

      button:nth-of-type(3) {
        opacity: 0;
        animation: ${opacityAnimation} 1.25s ease-in forwards;
      }

      button:nth-of-type(4) {
        opacity: 0;
        animation: ${opacityAnimation} 1.5s ease-in forwards;
      }
    `}

  ${MEDIA_QUERY_MEDIUM_RULE} {
    flex-direction: column;
  }
`
