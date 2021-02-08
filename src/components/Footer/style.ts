import styled from 'styled-components'
import { H3, P } from '../../styles/text'
import { fillBackgroundText } from '../../styles/colours'
import { MEDIA_QUERY_SMALL_WIDTH_RULE, MEDIA_QUERY_MEDIUM_WIDTH_RULE } from '../../constants/styles'
import { SIZE } from '../../constants/font'

export const AppFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  flex-direction: column;

  ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
    li {
      font-size: ${({
        theme: {
          font: { size }
        }
      }) => size[SIZE.XS]};
    }
  }
`

export const InfoBox = styled.div`
  display: flex;

  ${H3}, ${P} {
    margin: 0.35rem 0;
  }

  ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
    flex-direction: column;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;

  ${MEDIA_QUERY_MEDIUM_WIDTH_RULE} {
    flex-direction: column;
    align-items: center;

    ul {
      margin-bottom: 0.75rem;
    }
  }
`

export const FirstContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
    width: auto;
    align-items: center;
  }
`
export const SecondContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;

  ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
    width: auto;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
`

export const MainFooterText = styled(P)`
  ${fillBackgroundText};
  text-transform: uppercase;
  text-align: center;

  ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
    margin: 0.25rem 0;
  }
`
