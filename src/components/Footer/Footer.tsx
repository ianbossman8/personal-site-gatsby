import React from 'react'
import { AppFooter } from './style'

interface Props {
  isIndex: boolean
}

function Footer(props: Props) {
  return <AppFooter>© produced and designed by ian chan</AppFooter>
}

export default Footer
