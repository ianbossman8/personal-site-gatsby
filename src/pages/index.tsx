import React from 'react'
import Base from '../components/Base/Base'
import { PAGE_META } from '../constants/meta'

export default function SiteIndex() {
  return <Base pageSeo={{ ...PAGE_META.index }} />
}
