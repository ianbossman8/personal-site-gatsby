import styled from 'styled-components'
import { MEDIA_QUERY_SMALL_WIDTH_RULE } from '../../constants/styles'
import { H3, P } from '../../styles/text'

export const ImgHolder = styled.figure`
  width: 100%;
  margin: 0;
`

export const InfoContainer = styled.div`
  box-sizing: padding;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.75rem;
  padding: 0.75rem;
`

export const CardContainer = styled.div`
  max-height: 425px;
  width: 325px;
  max-width: 325px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: ${({ theme: { colours } }) => colours.primary[2]};
  box-shadow: ${({ theme: { colours } }) => `0 1px 4px ${colours.secondary.blur}`};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  letter-spacing: 0;
  margin: 0 0 1rem 1rem;
  transition: all 0.2s;

  &:hover {
    box-shadow: ${({ theme: { colours } }) => `0 8px 16px ${colours.secondary.blur}`};
    transform: translateY(-10px);
  }

  ${H3}, ${P} {
    margin: 0.45rem 0.25rem;
  }

  ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
    margin: 1rem 0;
  }
`

export const MetaContainer = styled.div`
  display: flex;
  align-self: flex-end;

  ${CardContainer}, ${P} {
    margin: 0;
    padding: 0.5rem;
    background-color: ${({ theme: { colours } }) => colours.main[1]};
    clip-path: polygon(10px 0%, 100% 0%, 100% 100%, 0% 100%);
  }
`
