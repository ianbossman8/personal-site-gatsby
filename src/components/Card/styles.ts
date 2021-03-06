import styled from 'styled-components'
import { MEDIA_QUERY_SMALL_WIDTH_RULE, MEDIA_QUERY_MEDIUM_WIDTH_RULE } from '../../constants/styles'
import { H3, P } from '../../styles/text'

export const InfoContainer = styled.div`
  box-sizing: padding;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.75rem;
  padding: 0.75rem;
`

export const CardContainer = styled.div`
  max-height: 30rem;
  width: 20rem;
  max-width: 20rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { colours } }) => colours.primary[3]};
  box-shadow: ${({ theme: { colours } }) =>
    `0 0.0625rem 0.25rem 0 ${colours.secondary.blur.light}`};
  letter-spacing: 0;
  margin: 0 0 1rem 1rem;
  transition: all 0.2s ease-in-out;

  ${H3}, ${P} {
    margin: 0.45rem 0.25rem;
  }

  &:hover {
    box-shadow: ${({ theme: { colours } }) => `0 0.5rem 1rem 0 ${colours.secondary.blur.light}`};
    transform: translateY(-0.5rem);
  }

  ${MEDIA_QUERY_MEDIUM_WIDTH_RULE} {
    max-height: 33rem;
    width: 26rem;
    max-width: 26rem;

    ${H3}, ${P} {
      margin: 0.5rem 0.325rem;
    }
  }

  ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
    max-height: 45rem;
    width: inherit;
    max-width: inherit;
    margin: 1rem 0;

    ${H3}, ${P} {
      margin: 0.625rem 0.375rem;
    }
  }
`

export const MetaContainer = styled.div`
  display: flex;
  align-self: flex-end;

  ${CardContainer}, ${P} {
    margin: 0;
    padding: 0.5rem;
    background-color: ${({ theme: { colours } }) => colours.main[1]};
    clip-path: polygon(0.625rem 0%, 100% 0%, 100% 100%, 0% 100%);
  }
`
