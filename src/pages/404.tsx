import React from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import Base from '../components/Base/Base'
import { PAGE_META } from '../constants/meta'
import { ColourFulHeader } from '../styles/text'
import { commonButtonCssProperties } from '../styles/buttons'

const BackButton = styled.button`
  ${commonButtonCssProperties};
  font-size: 2rem;
`

export default function NotFoundPage() {
  function handleLinkClick() {
    navigate(-1)
  }

  return (
    <Base pageSeo={{ ...PAGE_META[404] }}>
      <ColourFulHeader>Page Not Found</ColourFulHeader>
      <BackButton onClick={handleLinkClick}>back</BackButton>
    </Base>
  )
}
