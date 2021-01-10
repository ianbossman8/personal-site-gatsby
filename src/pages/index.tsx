import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/Seo'
import { useSiteMetaDataQuery } from '../queries/useSiteMetaDataQuery'
import { WelcomeText } from '../styles/text'

function SiteIndex() {
  const siteMetadata = useSiteMetaDataQuery()

  return (
    <Layout
      location={
        typeof location !== 'undefined' ? location.pathname : undefined
      }>
      <SEO title={siteMetadata.title} />
      <WelcomeText>welcome to bossman's life</WelcomeText>
    </Layout>
  )
}

export default SiteIndex
