import React, { ReactNode, useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { ThemeContext } from '../../context/ThemeProvider'
import { PAGE_META } from '../../constants/meta'
import useSetThemeHook from '../../customHooks/useSetSystemThemeHook'
import THEME from '../../constants/theme'
import linksGen from '../../util/linksGen'
import { PageContainer, MainContainer } from './style'
import { styleTheme } from '../../styles/theme'

interface Props {
  isIndex: boolean
  children: ReactNode
}
function Layout(props: Props) {
  const { colourTheme, setColourTheme } = useContext(ThemeContext)
  useSetThemeHook(setColourTheme)

  const { children, isIndex } = props

  function handleThemeChange(theme: THEME) {
    setColourTheme(theme)
    localStorage.setItem('colourTheme', theme)
  }

  const linksMeta = isIndex ? undefined : linksGen(PAGE_META)

  return (
    <ThemeProvider theme={styleTheme[colourTheme]}>
      <PageContainer isIndex={isIndex}>
        <Header colourTheme={colourTheme} setColourTheme={handleThemeChange} />
        <MainContainer isIndex={isIndex}>{children}</MainContainer>
        <Footer isIndex={isIndex} linksMeta={linksMeta} />
      </PageContainer>
    </ThemeProvider>
  )
}

export default Layout
