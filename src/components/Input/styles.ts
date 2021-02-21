import styled, { css } from 'styled-components'
import { SIZE } from '../../constants/font'

export const ErrorText = styled.p``

export const InputBox = styled.input<{ error?: string }>`
  margin: 0.25rem 0;
  padding: 0.25rem;
  font-size: ${({ theme: { font } }) => font.size[SIZE.NS]};
  border: none;
  background-color: transparent;
  border-bottom: 2px solid ${({ theme: { colours } }) => colours.secondary[1]};
  outline: none;

  &:focus {
    border-bottom-color: ${({ theme: { colours } }) => colours.info[3]};
  }

  ${({ theme: { colours }, error }) =>
    error &&
    css`
      border-bottom-color: ${colours.alert[3]};

      &:focus {
        border-bottom-color: ${colours.alert[3]};
      }
    `}
`

export const InputContainer = styled.div`
  width: 100%;
  min-width: 23rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  label {
    font-size: ${({ theme: { font } }) => font.size[SIZE.NS]};
    text-transform: capitalize;
  }

  ${ErrorText} {
    padding: 0;
    margin: 0.25rem 0;
    min-height: 1.25rem;
    color: ${({ theme: { colours } }) => colours.alert[3]};

    &::first-letter {
      text-transform: capitalize;
    }
  }
`
