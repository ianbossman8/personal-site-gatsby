import React, { useEffect, useState } from 'react'
import { IoIosMenu } from 'react-icons/io'
import { GrClose } from 'react-icons/gr'
import LinksList from '../LinksList/LinksList'
import useModalEscapeKeyHooks from '../../customHooks/useModalEscapeKeyHooks'
import { LinksObj } from '../../util/linksGen'
import { SIZE } from '../../constants/font'
import { MenuContainer } from './styles'
import { MenuButton } from '../../styles/buttons'
import useWindowResizeHook from '../../customHooks/useWindowResizeHook'
import { WIDTH_BOUNDARIES } from '../../constants/styles'

interface Props {
  linksMeta: LinksObj[]
  size?: SIZE
  isIndex: boolean
}

export default function Menu(props: Props) {
  const { size, isIndex, linksMeta } = props
  const curWidth = useWindowResizeHook('width')
  const [showMenu, setShowMenu] = useState<boolean>(false)

  function handleMenuClick() {
    setShowMenu((showMenu) => !showMenu)
  }

  function handleMenuClose() {
    setShowMenu(false)
  }

  useModalEscapeKeyHooks(handleMenuClose)

  useEffect(() => {
    if (curWidth && curWidth >= WIDTH_BOUNDARIES.M) {
      setShowMenu(false)
    }
  }, [curWidth])

  return (
    <>
      {!isIndex && (
        <>
          <MenuContainer showMenu={showMenu} onClick={handleMenuClick}>
            <LinksList linksMeta={linksMeta} size={size} />
          </MenuContainer>
          <MenuButton>
            {!showMenu ? (
              <IoIosMenu size={48} onClick={handleMenuClick} title="menu" />
            ) : (
              <GrClose size={42} onClick={handleMenuClick} title="close" />
            )}
          </MenuButton>
        </>
      )}
    </>
  )
}
