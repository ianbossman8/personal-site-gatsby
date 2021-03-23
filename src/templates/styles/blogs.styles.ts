import styled from 'styled-components'
import { CommonDumpStyles } from './dump.styles'

export const BlogPage = styled.div`
  ${CommonDumpStyles};
`

export const BlogPostContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
`

export const ImgHolder = styled.figure`
  width: 100%;
  max-width: 60rem;
`
