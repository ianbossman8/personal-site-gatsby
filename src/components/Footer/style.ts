import styled, { css } from 'styled-components'
import { H3, P } from '../../styles/text'
import { fillBackgroundText } from '../../styles/colours'
import { MEDIA_QUERY_MEDIUM_RULE, MEDIA_QUERY_SMALL_RULE } from '../../constants/styles'

export const AppFooter = styled.footer<{ isIndex: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  ${({ isIndex }) =>
    isIndex
      ? css`
          ${MEDIA_QUERY_MEDIUM_RULE} {
            flex-direction: column-reverse;
          }
        `
      : css`
          flex-direction: column;
        `}
`

export const InfoBox = styled.div`
  display: flex;

  ${H3}, ${P} {
    margin: 0.35rem 0;
  }

  ${MEDIA_QUERY_SMALL_RULE} {
    flex-direction: column;
  }
`

export const FirstContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  ${MEDIA_QUERY_SMALL_RULE} {
    width: auto;
    align-items: center;
  }
`
export const SecondContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;

  ${MEDIA_QUERY_SMALL_RULE} {
    width: auto;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
`

export const MainFooterText = styled(P)`
  ${fillBackgroundText};
  text-transform: uppercase;
  text-align: center;

  ${MEDIA_QUERY_SMALL_RULE} {
    margin: 0.25rem 0;
  }
`
