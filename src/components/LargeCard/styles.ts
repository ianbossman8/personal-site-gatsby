import styled from 'styled-components'
import { MEDIA_QUERY_SMALL_WIDTH_RULE, MEDIA_QUERY_MEDIUM_WIDTH_RULE } from '../../constants/styles'
import { H3, P } from '../../styles/text'

export const CardContainer = styled.div`
  width: 24rem;
  max-width: 24rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { colours } }) => colours.primary[1]};
  box-shadow: ${({ theme: { colours } }) =>
    `0 0.0625rem 0.25rem 0 ${colours.secondary.blur.light}`};
  letter-spacing: 0;
  margin: 0.5rem;
  transition: all 0.2s ease-in-out;

  ${H3}, ${P} {
    margin: 0.45rem 0.25rem;
  }

  ${P} {
    line-height: 1.375rem;
  }

  &:hover {
    box-shadow: ${({ theme: { colours } }) => `0 0.5rem 1rem 0 ${colours.secondary.blur.light}`};
    transform: translateY(-0.5rem);
  }

  ${MEDIA_QUERY_MEDIUM_WIDTH_RULE} {
    width: 26rem;
    max-width: 26rem;

    ${H3}, ${P} {
      margin: 0.5rem 0.325rem;
    }
  }

  ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
    width: inherit;
    max-width: inherit;

    ${H3}, ${P} {
      margin: 0.625rem 0.375rem;
    }
  }
`