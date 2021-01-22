import React from 'react'
import { AppFooter, FooterText } from './style'
import SocialIconsList from '../SocialIconsList/SocialIconsList'

function Footer() {
  return (
    <AppFooter>
      <FooterText>
        © {new Date().getFullYear()} produced and designed by ian chan
      </FooterText>
      <SocialIconsList />
    </AppFooter>
  )
}

export default Footer
