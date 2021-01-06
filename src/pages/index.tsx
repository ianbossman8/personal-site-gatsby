import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { useSiteQuery } from '../queries/useSiteQuery'

function SiteIndex() {
  const siteMetadata = useSiteQuery()
  let location = typeof window !== 'undefined' ? window.location : ''
  return (
    <Layout
      location={location}
      title={siteMetadata.title}
      description={siteMetadata.description}>
      <SEO title="hi" />
    </Layout>
  )
}

export default SiteIndex
