import React from 'react'
import { Link } from 'gatsby'
import Base from '../components/Base/Base'
import { pageMeta } from '../constants/meta'
import { LINKS } from '../constants/links'
import { ColourFulHeader, P } from '../styles/text'

export default function PrivacyPage() {
  return <Base pageSeo={{ ...pageMeta.privacy }}></Base>
}
