import styled from 'styled-components'
import { MEDIA_QUERY_MEDIUM_WIDTH_RULE, MEDIA_QUERY_SMALL_WIDTH_RULE } from '../../constants/styles'

export const PostsContainer = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 0 8rem;
  margin: 1rem 0;

  ${MEDIA_QUERY_MEDIUM_WIDTH_RULE} {
    padding: 0 4rem;
  }

  ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
    padding: 0;
  }
`
