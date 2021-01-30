import React, { ReactNode, useEffect, useState } from 'react'
import { IoIosMenu } from 'react-icons/io'
import useModalContentHooks from '../../customHooks/useModalContentHooks'
import useWindowResizeHook from '../../customHooks/useWindowResizeHook'
import SEO, { Props as SeoProps } from '../Seo'
import Layout from '../Layout/Layout'
import IntroBar from '../IntroBar/IntroBar'
import Modal from '../Modal/Modal'
import { WIDTH_BOUNDARIES } from '../../constants/styles'
import { Location } from '../../util'
import { MenuButton } from '../../styles/buttons'
import { Menu } from './styles'

interface Props {
  pageSeo: SeoProps
  children: ReactNode
}

export default function Base(props: Props) {
  const locObj = new Location()

  const { pageSeo, children } = props

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

  const isIndex = locObj.isIndexPath(pageSeo.pathname)
  const isSecondary = locObj.isSecondaryPath(pageSeo.pathname)

  useEffect(() => {
    if (!isIndex) {
      if (!exceedBoundary) {
        setShowMenu(true)
      } else {
        setShowMenu(false)
      }
    }
  }, [isIndex, exceedBoundary])

  return (
    <Layout isIndex={isIndex} isSecondary={isSecondary}>
      <SEO {...pageSeo} />
      {!isIndex && exceedBoundary && (
        <MenuButton>
          <IoIosMenu size={48} onClick={handleMenuClick} title="menu" />
        </MenuButton>
      )}
      <Menu showMenu={showMenu} isIndex={isIndex} onClick={() => handleMenuClick(undefined, false)}>
        <IntroBar isIndex={isIndex} setModalContentTopic={setModalContentTopic} />
      </Menu>
      {children}
      {modalContentTopic && (
        <Modal
          topic={modalContentTopic}
          modalContent={modalContent}
          handleModalClose={handleModalClose}
        />
      )}
    </Layout>
  )
}
