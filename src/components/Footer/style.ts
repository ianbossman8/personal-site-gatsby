import styled from 'styled-components'
import { P } from '../../styles/text'
import { fillBackgroundText } from '../../styles/colours'

export const AppFooter = styled.footer`
  display: flex;
  text-transform: uppercase;
`

export const FooterText = styled(P)`
  ${fillBackgroundText};
`
