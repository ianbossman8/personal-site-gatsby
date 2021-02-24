import styled from 'styled-components'
import { CommonStyles } from './dump.styles'

export const AboutContainer = styled.div`
  max-width: 50rem;
  display: flex;
  flex-direction: column;

  ${CommonStyles}

  .contact-form {
    align-self: center;
  }
`

export const HTMLContainer = styled.div`
  margin-bottom: 2rem;

  blockquote {
    margin: auto;
    margin-bottom: 2rem;
  }

  p {
    line-height: 1.5;
  }
`
