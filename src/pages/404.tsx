import React from 'react'
import { Link } from 'gatsby'
import Base from '../components/Base/Base'
import { pageMeta } from '../constants/meta'
import { LINKS } from '../constants/links'
import { ColourFulHeader, P } from '../styles/text'

export default function NotFoundPage() {
  return (
    <Base pageSeo={{ ...pageMeta[LINKS.INTERNAL_LINKS[404]] }}>
      <ColourFulHeader>404: page not found</ColourFulHeader>
      <P>
        The page you are looking for is not found going back{' '}
        <Link to={LINKS.INTERNAL_LINKS.ROOT}>home</Link>
      </P>
    </Base>
  )
}
