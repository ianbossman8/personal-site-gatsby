import styled from 'styled-components'
import { MainButton } from '../../styles/buttons'

export const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${MainButton} {
    margin-left: 0;
  }
`
