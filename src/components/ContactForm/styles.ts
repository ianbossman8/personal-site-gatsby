import styled, { css } from 'styled-components'
import { InputBox } from '../Input/styles'

export const Form = styled.form<{ reverse: boolean }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;

  ${({ theme: { colours }, reverse }) =>
    reverse &&
    css`
      label {
        color: ${colours.primary[1]};
      }
      ${InputBox} {
        border-bottom-color: ${colours.primary[1]};
        &:focus {
          border-bottom-color: ${colours.info[1]};
        }
      }
    `}
`
