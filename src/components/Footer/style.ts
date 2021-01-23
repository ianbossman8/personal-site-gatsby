import styled from 'styled-components'
import { P } from '../../styles/text'
import { fillBackgroundText } from '../../styles/colours'
import { MEDIA_QUERY_SMALL_RULE } from '../../constants/styles'

export const AppFooter = styled.footer`
  display: flex;
  justify-content: center;
  text-transform: uppercase;

  ${MEDIA_QUERY_SMALL_RULE} {
    flex-direction: column-reverse;
  }
`

export const FooterText = styled(P)`
  ${fillBackgroundText};
  text-align: center;
`
