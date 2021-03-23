import styled from 'styled-components'
import { MEDIA_QUERY_MEDIUM_WIDTH_RULE, MEDIA_QUERY_SMALL_WIDTH_RULE } from '../../constants/styles'

export const BlogsListContainer = styled.ul`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0;

  li {
    list-style-type: none;
    margin: 1rem;

    ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
      margin: 1rem 0;
    }
  }
`

export const BlogsContainer = styled.section`
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

export const BlogHeader = styled.div`
  margin-bottom: 1rem;
`
