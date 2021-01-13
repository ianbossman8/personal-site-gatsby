import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/Seo'
import { useSiteMetaDataQuery } from '../queries/useSiteMetaDataQuery'
import IntroBar from '../components/IntroBar/IntroBar'
import Modal from '../components/Modal/Modal'
import { WelcomeText } from '../styles/text'
import { MainButton } from '../styles/buttons'
import { Link } from 'gatsby'

function SiteIndex() {
  const siteMetadata = useSiteMetaDataQuery()

  const [modalContent, setModalContent] = useState<string | undefined>(
    undefined
  )

  function handleButtonlick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    if ((event.target as any).nodeName === 'SPAN') {
      console.log((event.target as any).innerHTML)
      setModalContent((event.target as any).innerHTML)
    } else {
      setModalContent((isModalOn) =>
        !isModalOn ? (event.target as HTMLButtonElement).value : undefined
      )
    }
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
      <IntroBar>
        <MainButton onClick={handleButtonlick} value="about">
          <span>about</span>
        </MainButton>
        <MainButton onClick={handleButtonlick} value="contact">
          <span>contact me</span>
        </MainButton>
        <MainButton>
          <span>
            <Link to="/">blogs</Link>
          </span>
        </MainButton>
      </IntroBar>
      {modalContent && (
        <Modal content={modalContent} handleModalClose={handleModalClose} />
      )}
    </Layout>
  )
}

export default SiteIndex
