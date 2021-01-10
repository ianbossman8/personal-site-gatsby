import React from 'react'
import { AppFooter } from './style'
import { P } from '../../styles/text'

interface Props {
  isIndex: boolean
}

function Footer(props: Props) {
  return (
    <AppFooter>
      <P>© produced and designed by ian chan</P>
    </AppFooter>
  )
}

export default Footer
