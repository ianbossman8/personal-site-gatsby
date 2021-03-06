import React, { ReactNode, useContext, useEffect, useRef, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton'
import { ThemeContext } from '../../context/ThemeProvider'
import useSetThemeHook from '../../customHooks/useSetSystemThemeHook'
import useWindowResizeHook from '../../customHooks/useWindowResizeHook'
import THEME from '../../constants/theme'
import { PageMeta } from '../../constants/meta'
import { PageContainer, MainContainer } from './style'
import { styleTheme } from '../../styles/theme'

interface Props {
  isIndex: boolean
  children: ReactNode
  pageMeta: PageMeta
}

function Layout(props: Props) {
  const { children, isIndex, pageMeta } = props

  const { colourTheme, setColourTheme } = useContext(ThemeContext)
  useSetThemeHook(setColourTheme)
  function handleThemeChange(theme: THEME) {
    setColourTheme(theme)
    localStorage.setItem('colourTheme', theme)
  }

  const ref = useRef<HTMLElement>(null)
  const curHeight = useWindowResizeHook('height')
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    if (curHeight && ref.current) {
      const elementHeight = ref.current.offsetHeight
      const heightLimit = curHeight * 0.925

      if (heightLimit <= elementHeight) {
        setShowButton(true)
      }
    } else {
      setShowButton(false)
    }
  }, [curHeight, ref.current])

  return (
    <ThemeProvider theme={styleTheme[colourTheme]}>
      <PageContainer isIndex={isIndex}>
        <Header
          isIndex={isIndex}
          pageMeta={pageMeta}
          colourTheme={colourTheme}
          setColourTheme={handleThemeChange}
        />
        <MainContainer isIndex={isIndex} ref={ref}>
          <>
            {children}
            {showButton && <ScrollUpButton />}
          </>
        </MainContainer>
        <Footer isIndex={isIndex} pageMeta={pageMeta} />
      </PageContainer>
    </ThemeProvider>
  )
}

export default Layout
