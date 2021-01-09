import React from 'react'
import styled, { keyframes } from 'styled-components'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import { useSiteMetaDataQuery } from '../queries/useSiteMetaDataQuery'
import FONT_SIZE from '../constants/fontSize'

const textColourAnimation = keyframes`
  to {
    transform: scale(1.1);
  }
`

const WelcomeText = styled.h1`
  text-transform: uppercase;
  font-weight: 400;
  font-size: ${({ theme: { fontSize } }) => fontSize[FONT_SIZE.EL]};
  background: ${({ theme: { colours } }) =>
    `linear-gradient(to right, ${colours.main[3]}, ${colours.info[3]}, ${colours.warn[3]}, ${colours.alert[3]})`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: 0.8s ${textColourAnimation} ease-in-out forwards;
`

function SiteIndex() {
  const siteMetadata = useSiteMetaDataQuery()

  return (
    <Layout location={location}>
      <SEO title={siteMetadata.title} />
      <WelcomeText>welcome to bossman's life</WelcomeText>
    </Layout>
  )
}

export default SiteIndex
