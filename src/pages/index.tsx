import React, { useState } from 'react'
import { useSiteMetaDataQuery } from '../queries/useSiteMetaDataQuery'
import SEO from '../components/Seo'
import Layout from '../components/Layout/Layout'
import IntroBar from '../components/IntroBar/IntroBar'
import Modal from '../components/Modal/Modal'
import { WelcomeText } from '../styles/text'
import { useAboutContentQuery } from '../queries/useAboutContentQuery'

function SiteIndex() {
  const siteMetadata = useSiteMetaDataQuery()
  const aboutMe = useAboutContentQuery()

  const [modalContent, setModalContent] = useState<string | undefined>(
    undefined
  )

  let info

  if (modalContent === 'about') {
    info = aboutMe
  } else if (modalContent === 'contact') {
    info = '<p>coming soon my g</p>'
  } else {
    info = ''
  }

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
        <Modal
          content={modalContent}
          handleModalClose={handleModalClose}
          info={info}
        />
      )}
    </Layout>
  )
}

export default SiteIndex
