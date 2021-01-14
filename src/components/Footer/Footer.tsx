import React from 'react'
import { AppFooter, FooterText } from './style'
import SocialIconsList from '../SocialIconsList/SocialIconsList'

interface Props {
  isIndex: boolean
}

function Footer(props: Props) {
  return (
    <AppFooter>
      <FooterText>© produced and designed by ian chan</FooterText>
      <SocialIconsList />
    </AppFooter>
  )
}

export default Footer
