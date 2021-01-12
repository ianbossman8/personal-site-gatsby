import React from 'react'
import { AppFooter, FooterText } from './style'

interface Props {
  isIndex: boolean
}

function Footer(props: Props) {
  return (
    <AppFooter>
      <FooterText>© produced and designed by ian chan</FooterText>
    </AppFooter>
  )
}

export default Footer
