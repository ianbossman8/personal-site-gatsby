import React, { useState } from 'react'
import { useSiteMetaDataQuery } from '../queries/useSiteMetaDataQuery'
import SEO from '../components/Seo'
import Layout from '../components/Layout/Layout'
import IntroBar from '../components/IntroBar/IntroBar'
import Modal from '../components/Modal/Modal'
import { WelcomeText } from '../styles/text'

function SiteIndex() {
  const siteMetadata = useSiteMetaDataQuery()

  const [modalContent, setModalContent] = useState<string | undefined>(
    undefined
  )

  function handleModalClose() {
    setModalContent(undefined)
  }

  return (
    <Layout
      location={
        typeof location !== 'undefined' ? location.pathname : undefined
      }>
      <SEO title={siteMetadata.title} />
      <WelcomeText>wagwan, this is bossman's life</WelcomeText>
      <IntroBar setModalContent={setModalContent} />
      {modalContent && (
        <Modal content={modalContent} handleModalClose={handleModalClose} />
      )}
    </Layout>
  )
}

export default SiteIndex
