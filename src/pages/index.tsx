import React from 'react'
import styled, { keyframes } from 'styled-components'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import { useSiteMetaDataQuery } from '../queries/useSiteMetaDataQuery'
import FONT_SIZE from '../constants/fontSize'
import { fillBackgroundText } from '../styles/text'

const textColourAnimation = keyframes`
  to {
    transform: scale(1.1);
  }
`

const WelcomeText = styled.h1`
  margin: 0;
  text-transform: uppercase;
  font-weight: 400;
  font-size: ${({ theme: { fontSize } }) => fontSize[FONT_SIZE.EL]};
  ${fillBackgroundText}
  animation: 0.8s ${textColourAnimation} ease-in-out forwards;
`

function SiteIndex() {
  const siteMetadata = useSiteMetaDataQuery()

  return (
    <Layout location={location.pathname}>
      <SEO title={siteMetadata.title} />
      <WelcomeText>welcome to bossman's life</WelcomeText>
    </Layout>
  )
}

export default SiteIndex
