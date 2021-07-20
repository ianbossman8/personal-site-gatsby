import styled, { css, keyframes } from 'styled-components'
import { SIZE } from '../../constants/font'
import {
  MEDIA_QUERY_MEDIUM_HEIGHT_RULE,
  MEDIA_QUERY_MEDIUM_WIDTH_RULE,
  MEDIA_QUERY_SMALL_WIDTH_RULE
} from '../../constants/styles'
import { blockQuoteStyle, H2, H3, P, pStyle } from '../../styles/text'
import { colourfulBackground } from '../../styles/colours'
import { MainButton, mainButtonCss } from '../../styles/buttons'
import { InputBox } from '../Input/styles'
import { TextBox } from '../TextArea/styles'

function opacityAnimation(colour: string) {
  return keyframes`
    to {
      background-color: ${colour};
    }
 `
}

const changeBackgroundPosition = keyframes`
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}
`

const modalOpacityAnimation = keyframes`
 to {
  opacity: 0.975;
 }
`

export const ModalHeader = styled(H2)`
  text-transform: uppercase;
  text-decoration: underline;
  font-weight: ${({
    theme: {
      font: { weight }
    }
  }) => weight[SIZE.S]};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing[SIZE.S]};
`

export const ContentContainer = styled.section<{ reverse: boolean }>`
  min-height: 30rem;
  min-width: 18.75rem;
  width: 45%;
  box-sizing: border-box;
  background: ${({ theme: { colours } }) => colourfulBackground(colours, 'toBottomRight')};
  background-size: 200% 200%;
  box-shadow: ${({ theme: { colours } }) => `0 0.25rem 1rem 0 ${colours.secondary.blur.strong}`};
  opacity: 0;
  padding: 1.5rem;
  overflow: scroll;
  z-index: 3;
  animation: ${modalOpacityAnimation} 0.8s ease-out forwards,
    ${changeBackgroundPosition} 6s ease-in infinite;
  will-change: background-position, opacity;

  .modal__contact {
    margin-top: 2rem;
    ${P} {
      text-align: center;
    }
  }

  svg.modal--close-button {
    position: sticky;
    top: 0;
    float: right;
    z-index: 4;
    cursor: pointer;

    path {
      stroke: ${({ theme: { colours } }) => colours.primary[1]};
    }
  }

  ${({ reverse, theme: { colours } }) =>
    reverse &&
    css`
      blockquote {
        ${blockQuoteStyle(true)};
      }

      p {
        ${pStyle(true)};
      }

      label,
      ${InputBox}, ${TextBox} {
        color: ${colours.primary[1]};
      }

      ${InputBox}, ${TextBox} {
        caret-color: ${({ theme: { colours } }) => colours.primary[1]};
      }

      ${ModalHeader}, ${H3} {
        color: ${colours.primary[1]};
      }

      ${H3} {
        margin-bottom: 0.25rem;
      }

      ${InputBox} {
        border-bottom-color: ${colours.primary[1]};
        &:focus {
          border-bottom-color: ${colours.info[1]};
        }
      }

      ${TextBox} {
        border-color: ${colours.primary[1]};
        &:focus {
          border-color: ${colours.info[1]};
        }

        &::placeholder {
          color: ${colours.primary[3]};
        }
      }

      ${MainButton} {
        ${mainButtonCss(true)}
      }
    `}

  ${MEDIA_QUERY_MEDIUM_WIDTH_RULE} {
    width: 62.5%;

    blockquote {
      padding: 0.15rem 0.5rem;
      margin: 0 0 2rem 0;

      mark {
        letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing[SIZE.S]};
      }
    }
  }

  ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
    width: 90%;
    padding: 1rem;
  }

  ${MEDIA_QUERY_MEDIUM_HEIGHT_RULE} {
    height: 57.5%;
  }
`

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  -webkit-backdrop-filter: blur(0.122rem);
  backdrop-filter: blur(0.122rem);
  background-color: ${({ theme: { colours } }) => colours.primary.blur.zero};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  animation: ${({ theme: { colours } }) =>
    css`
      ${opacityAnimation(colours.primary.blur.light)} 0.2s ease-in forwards
    `};
`
