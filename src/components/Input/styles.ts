import styled, { css } from 'styled-components'
import { SIZE } from '../../constants/font'

export const ErrorText = styled.p``

export const InputBox = styled.input<{ error: string | undefined }>`
  margin: 0.25rem 0;
  padding: 0.25rem;
  font-size: ${({ theme: { font } }) => font.size[SIZE.N]};
  border: none;
  background-color: transparent;
  border-bottom: 0.125rem solid ${({ theme: { colours } }) => colours.secondary[1]};
  outline: none;
  color: ${({ theme: { colours } }) => colours.secondary[1]};
  caret-color: ${({ theme: { colours } }) => colours.secondary[1]};

  &:focus {
    border-bottom-color: ${({ theme: { colours } }) => colours.info[3]};
  }

  &:-webkit-autofill {
    box-shadow: 0 0 0 50px ${({ theme: { colours } }) => colours.bg} inset;
    -webkit-box-shadow: 0 0 0 50px ${({ theme: { colours } }) => colours.bg} inset;
    -webkit-text-fill-color: ${({ theme: { colours } }) => colours.secondary[1]};
  }

  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 50px ${({ theme: { colours } }) => colours.bg} inset;
    -webkit-box-shadow: 0 0 0 50px ${({ theme: { colours } }) => colours.bg} inset;
    -webkit-text-fill-color: ${({ theme: { colours } }) => colours.secondary[1]};
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
  min-width: 20rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;

  label {
    margin-bottom: 0.5rem;
    font-size: ${({ theme: { font } }) => font.size[SIZE.N]};
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
