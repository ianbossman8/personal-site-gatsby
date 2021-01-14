import styled from 'styled-components'
import { P } from '../../styles/text'
import { fillBackgroundText } from '../../styles/colours'
import { MEDIA_QUERY_SMALL } from '../../constants/styles'

export const AppFooter = styled.footer`
  display: flex;
  text-transform: uppercase;

  ${MEDIA_QUERY_SMALL} {
    flex-direction: column-reverse;
  }
`

export const FooterText = styled(P)`
  ${fillBackgroundText};
`
