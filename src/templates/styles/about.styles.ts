import styled from 'styled-components'
import { CommonDumpStyles } from './dump.styles'

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${CommonDumpStyles}

  .contact-form {
    align-self: center;
  }
`

export const SectionContainer = styled.section`
  margin-bottom: 2rem;

  blockquote {
    margin: auto;
    margin-bottom: 2rem;
  }

  p {
    line-height: 1.5rem;
  }
`
