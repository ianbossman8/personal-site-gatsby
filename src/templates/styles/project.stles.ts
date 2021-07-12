import styled from 'styled-components'
import { MEDIA_QUERY_SMALL_WIDTH_RULE } from '../../constants/styles'

export const ProjectListContainer = styled.ul`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0;

  li {
    list-style-type: none;
    margin: 1rem;

    ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
      width: 100%;
    }
  }
`
