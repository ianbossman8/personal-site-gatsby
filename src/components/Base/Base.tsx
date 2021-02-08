import React, { ReactNode, useEffect, useState } from 'react'
import { IoIosMenu } from 'react-icons/io'
import { Link } from 'gatsby'
import { FcHome } from 'react-icons/fc'
import { HooksReturnType } from '../../customHooks/useModalContentHooks'
import useWindowResizeHook from '../../customHooks/useWindowResizeHook'
import SEO, { Props as SeoProps } from '../Seo'
import Layout from '../Layout/Layout'
import Modal from '../Modal/Modal'
import { PAGE_META } from '../../constants/meta'
import { WIDTH_BOUNDARIES } from '../../constants/styles'
import linksGen from '../../util/linksGen'
import Location from '../../util/location'
import { MenuButton } from '../../styles/buttons'
import { Menu } from './styles'
import LinksList from '../LinksList/LinksList'
import { LINKS } from '../../constants/links'

interface Props {
  pageSeo: SeoProps
  modalProps?: {
    modalContent: HooksReturnType
    handleModalReset: () => void
  }
  children: ReactNode
}

export default function Base(props: Props) {
  const { pageSeo, modalProps, children } = props

  const [showMenu, setShowMenu] = useState<boolean>(false)

  const exceedBoundary = useWindowResizeHook(WIDTH_BOUNDARIES.M)

  function handleMenuClick(_: React.MouseEvent<Element, MouseEvent> | undefined, off?: boolean) {
    if (typeof off !== 'undefined') {
      return setShowMenu(off)
    }

    setShowMenu((showMenu) => !showMenu)
  }

  const isIndex = Location.isIndexPath(pageSeo.pathname)

  const linksMeta = linksGen(PAGE_META)

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
    <Layout isIndex={isIndex} linksMeta={linksMeta}>
      <SEO {...pageSeo} />
      {!isIndex && exceedBoundary && (
        <>
          <Link to={LINKS.INTERNAL_LINKS.ROOT} className="home--link">
            <FcHome size={48} title="go home" />
          </Link>
          <MenuButton>
            <IoIosMenu size={48} onClick={handleMenuClick} title="menu" />
          </MenuButton>
        </>
      )}
      <Menu showMenu={showMenu} isIndex={isIndex} onClick={() => handleMenuClick(undefined, false)}>
        {/* <LinksList linksMeta={linksMeta} /> */}
      </Menu>
      {children}
      {modalProps && modalProps.modalContent && (
        <Modal
          topic={modalProps.modalContent.title}
          modalContent={modalProps.modalContent.body}
          handleModalClose={modalProps.handleModalReset}
        />
      )}
    </Layout>
  )
}
