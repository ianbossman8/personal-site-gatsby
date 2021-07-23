import styled from 'styled-components'
import { anchorStyle } from '../../styles/text'
import { CommonDumpStyles } from './dump.styles'

export const ImgHolder = styled.figure`
  width: 100%;
  max-width: 60rem;
  margin: 0;
`

export const BlogPage = styled.div`
  ${CommonDumpStyles};

  ${ImgHolder} {
    margin: 1rem 0;
  }

  a {
    ${anchorStyle}
  }
`
