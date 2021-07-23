import styled from 'styled-components'
import { MainButton } from '../../styles/buttons'

export const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${MainButton} {
    margin-left: 0;

    &:hover,
    &:active {
      box-shadow: ${({ theme: { colours } }) =>
        `inset 0.175rem 0.25rem 0.375rem ${colours.secondary.blur.light}`};
    }
  }
`
