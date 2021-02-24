import React from 'react'
import Base from '../components/Base/Base'
import { pageMeta } from '../constants/meta'
import { LINKS } from '../constants/links'
import { P } from '../styles/text'

export default function Projects() {
  return (
    <Base pageSeo={{ ...pageMeta[LINKS.INTERNAL_LINKS.PROJECTS] }}>
      <P>coming soon</P>
    </Base>
  )
}
