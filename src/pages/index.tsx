import React from 'react'
import Base from '../components/Base/Base'
import { PAGE_META } from '../constants/meta'
import { ColourFulHeader } from '../styles/text'

export default function SiteIndex() {
  return (
    <Base pageSeo={{ ...PAGE_META.INDEX }}>
      <ColourFulHeader>wagwan, this is bossman's life</ColourFulHeader>
    </Base>
  )
}
