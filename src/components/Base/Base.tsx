import React, { useEffect, useState } from 'react'
import { IoIosMenu } from 'react-icons/io'
import { useAllBlogPosts } from '../../queries/useAllBlogPostsQuery'
import useModalContentHooks from '../../customHooks/useModalContentHooks'
import useWindowResizeHook from '../../customHooks/useWindowResizeHook'
import SEO, { Props as SeoProps } from '../Seo'
import Layout from '../Layout/Layout'
import IntroBar from '../IntroBar/IntroBar'
import Modal from '../Modal/Modal'
import BlogsList from '../BlogsList/BlogsList'
import { PATH } from '../../constants/path'
import { WIDTH_BOUNDARIES } from '../../constants/styles'
import { Location } from '../../util'
import { WelcomeText } from '../../styles/text'
import { MenuButton } from '../../styles/buttons'
import { Menu } from './styles'

interface Props {
  allBlogPostsInfo?: ReturnType<typeof useAllBlogPosts>
  pageSeo?: SeoProps
}

export default function Base(props: Props) {
  const locObj = new Location()

  const { allBlogPostsInfo, pageSeo } = props

  const [modalContentTopic, setModalContentTopic] = useState<string | undefined>(undefined)
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const modalContent = useModalContentHooks(modalContentTopic)
  const exceedBoundary = useWindowResizeHook(WIDTH_BOUNDARIES.M)

  function handleModalClose() {
    setModalContentTopic(undefined)
  }

  function handleMenuClick(_: React.MouseEvent<Element, MouseEvent> | undefined, off?: boolean) {
    if (typeof off !== 'undefined') {
      return setShowMenu(off)
    }

    setShowMenu((showMenu) => !showMenu)
  }

  const isIndex = locObj.isMatchingPath(PATH.ROOT)

  useEffect(() => {
    if (!isIndex) {
      if (!exceedBoundary) {
        setShowMenu(true)
      } else {
        setShowMenu((showMenu) => !showMenu)
      }
    }
  }, [isIndex, exceedBoundary])

  return (
    <Layout curLocation={locObj.currentPath}>
      <SEO {...pageSeo} />
      {!isIndex && exceedBoundary && (
        <MenuButton>
          <IoIosMenu size={48} onClick={handleMenuClick} />
        </MenuButton>
      )}
      {isIndex && <WelcomeText>wagwan, this is bossman's life</WelcomeText>}
      <Menu showMenu={showMenu} isIndex={isIndex} onClick={() => handleMenuClick(undefined, false)}>
        <IntroBar isIndex={isIndex} setModalContentTopic={setModalContentTopic} />
      </Menu>
      {allBlogPostsInfo && <BlogsList totalBlogs={allBlogPostsInfo.totalCount} blogsDesc={allBlogPostsInfo.edges} />}
      {modalContentTopic && <Modal topic={modalContentTopic} modalContent={modalContent} handleModalClose={handleModalClose} />}
    </Layout>
  )
}
