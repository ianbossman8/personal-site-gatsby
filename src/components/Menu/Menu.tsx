import React, { useEffect, useState } from 'react'
import { IoIosMenu } from 'react-icons/io'
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

  const [showMenu, setShowMenu] = useState<boolean>(false)

  function handleMenuClick() {
    setShowMenu((showMenu) => !showMenu)
  }

  function handleMenuClose() {
    setShowMenu(false)
  }

  useModalEscapeKeyHooks(handleMenuClose)

  const exceedBound = useWindowResizeHook(WIDTH_BOUNDARIES.M)

  useEffect(() => {
    if (exceedBound) {
      setShowMenu(false)
    }
  }, [exceedBound])

  return (
    <>
      {!isIndex && (
        <>
          <MenuContainer showMenu={showMenu} onClick={handleMenuClick}>
            <LinksList linksMeta={linksMeta} size={size} />
          </MenuContainer>
          <MenuButton>
            <IoIosMenu size={48} onClick={handleMenuClick} title="menu" />
          </MenuButton>
        </>
      )}
    </>
  )
}
