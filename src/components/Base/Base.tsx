import React, { useState } from 'react'
import { useSiteMetaDataQuery } from '../../queries/useSiteMetaDataQuery'
import { useAboutContentQuery } from '../../queries/useAboutContentQuery'
import { useAllBlogPosts } from '../../queries/useAllBlogPosts'
import SEO from '../Seo'
import Layout from '../Layout/Layout'
import IntroBar from '../IntroBar/IntroBar'
import Modal from '../Modal/Modal'
import { WelcomeText } from '../../styles/text'
import BlogsList from '../BlogsList/BlogsList'

interface Props {
  siteMetadata?: ReturnType<typeof useSiteMetaDataQuery>
  allBlogPostsInfo?: ReturnType<typeof useAllBlogPosts>
}

const path = {
  root: '/',
  blogs: '/blogs'
}

function checkLocation() {
  return typeof location !== 'undefined'
}

function Base(props: Props) {
  const { siteMetadata, allBlogPostsInfo } = props
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

  const isIndex = checkLocation() && location.pathname === path.root

  return (
    <Layout location={checkLocation() ? location.pathname : undefined}>
      <SEO title={siteMetadata?.title ?? ''} />
      {isIndex && <WelcomeText>wagwan, this is bossman's life</WelcomeText>}
      <IntroBar setModalContent={setModalContent} />
      {allBlogPostsInfo && (
        <BlogsList
          totalBlogs={allBlogPostsInfo.totalCount}
          blogsDesc={allBlogPostsInfo.edges}
        />
      )}
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

export default Base
