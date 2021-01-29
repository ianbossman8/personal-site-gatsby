import React from 'react'
import Base from '../components/Base/Base'
import { PAGE_META } from '../constants/meta'
import { PATH } from '../constants/path'
import { Location } from '../util'
import { ColourFulHeader } from '../styles/text'

export default function SiteIndex() {
  const locObj = new Location()
  const path = locObj.currentPath ? locObj.currentPath : PATH.ROOT

  return (
    <Base pageSeo={{ ...PAGE_META.index }} path={path}>
      <ColourFulHeader>wagwan, this is bossman's life</ColourFulHeader>
    </Base>
  )
}
