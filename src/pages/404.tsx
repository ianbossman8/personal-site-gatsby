import React from 'react'
import { navigate } from 'gatsby'
import Base from '../components/Base/Base'
import { PAGE_META } from '../constants/meta'
import { ColourFulHeader } from '../styles/text'
import { PrimaryButton } from '../styles/buttons'

export default function NotFoundPage() {
  function handleLinkClick() {
    navigate(-1)
  }

  return (
    <Base pageSeo={{ ...PAGE_META[404] }}>
      <ColourFulHeader>Page Not Found</ColourFulHeader>
      <PrimaryButton onClick={handleLinkClick}>back</PrimaryButton>
    </Base>
  )
}
