import styled, { css } from 'styled-components'
import { SIZE } from '../../constants/font'
import { P } from '../../styles/text'
import { ErrorText } from '../Input/styles'

export const TextInputContainer = styled.div`
  width: 100%;
  min-width: 20rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;

  label {
    font-size: ${({ theme: { font } }) => font.size[SIZE.NS]};
    text-transform: capitalize;
  }

  ${ErrorText}, ${P} {
    padding: 0;
    margin: 0.25rem 0;
    min-height: 1.25rem;

    &::first-letter {
      text-transform: capitalize;
    }
  }

  ${ErrorText} {
    color: ${({ theme: { colours } }) => colours.alert[3]};
  }
`

export const TextBox = styled.textarea<{ error: string | undefined }>`
  min-height: 4rem;
  box-sizing: border-box;
  margin-top: 0.25rem;
  padding: 0.25rem;
  border: 2px solid ${({ theme: { colours } }) => colours.secondary[3]};
  background-color: transparent;
  line-height: 1.5rem;
  outline: none;
  resize: none;
  color: ${({ theme: { colours } }) => colours.secondary[3]};
  caret-color: ${({ theme: { colours } }) => colours.secondary[3]};

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
