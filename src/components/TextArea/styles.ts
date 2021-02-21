import styled, { css } from 'styled-components'
import { SIZE } from '../../constants/font'
import { ErrorText } from '../Input/styles'

export const TextInputContainer = styled.div`
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

export const TextBox = styled.textarea<{ error: string }>`
  min-height: 4rem;
  box-sizing: border-box;
  margin-top: 0.25rem;
  padding: 0.25rem;
  border: 2px solid ${({ theme: { colours } }) => colours.secondary[3]};
  background-color: transparent;
  line-height: 1.5rem;
  outline: none;
  resize: none;

  &:focus {
    border-color: ${({ theme: { colours } }) => colours.info[3]};
  }

  ${({ theme: { colours }, error }) =>
    error &&
    css`
      border-color: ${colours.alert[3]};

      &:focus {
        border-color: ${colours.alert[3]};
      }
    `}
`
