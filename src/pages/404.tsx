import React from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import Base from '../components/Base/Base'
import { PAGE_META } from '../constants/meta'
import { PATH } from '../constants/path'
import { Location } from '../util'
import { ColourFulHeader } from '../styles/text'
import { PrimaryButton } from '../styles/buttons'

export default function NotFoundPage() {
  const locObj = new Location()
  const path = locObj.currentPath ? locObj.currentPath : PATH[404]

  function handleLinkClick() {
    navigate(-1)
  }

  return (
    <Base pageSeo={{ ...PAGE_META[404] }} path={path}>
      <ColourFulHeader>Page Not Found</ColourFulHeader>
      <PrimaryButton onClick={handleLinkClick}>back</PrimaryButton>
    </Base>
  )
}
