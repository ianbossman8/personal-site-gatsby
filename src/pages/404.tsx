import React from 'react'
import { Link } from 'gatsby'
import Base from '../components/Base/Base'
import { PAGE_META } from '../constants/meta'
import { ColourFulHeader, P } from '../styles/text'
import { LINKS } from '../constants/links'

export default function NotFoundPage() {
  return (
    <Base pageSeo={{ ...PAGE_META[404] }}>
      <ColourFulHeader>404: page not found</ColourFulHeader>
      <P>
        The page you are looking for is not found going back{' '}
        <Link to={LINKS.INTERNAL_LINKS.ROOT}>home</Link>
      </P>
    </Base>
  )
}
