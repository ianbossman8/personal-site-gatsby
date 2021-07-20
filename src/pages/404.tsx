import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Base from '../components/Base/Base'
import { pageMeta } from '../constants/meta'
import { LINKS } from '../constants/links'
import { ColourfulHeader, P } from '../styles/text'

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  text-align: center;
`

export default function NotFoundPage() {
  return (
    <Base pageSeo={{ ...pageMeta[LINKS.INTERNAL_LINKS[404]] }}>
      <Container>
        <ColourfulHeader>404: page not found</ColourfulHeader>
        <P>
          The page you are looking for is not found going back{' '}
          <Link to={LINKS.INTERNAL_LINKS.ROOT}>home</Link>
        </P>
      </Container>
    </Base>
  )
}
