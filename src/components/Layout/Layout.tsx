import React, { ReactNode, useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { ThemeContext } from '../../context/ThemeProvider'
import useSetThemeHook from '../../customHooks/useSetSystemThemeHook'
import THEME from '../../constants/theme'
import { PageContainer, MainContainer } from './style'
import { styleTheme } from '../../styles/theme'

interface Props {
  isIndex?: boolean
  isSecondary?: boolean
  children: ReactNode
}

function Layout(props: Props) {
  const { colourTheme, setColourTheme } = useContext(ThemeContext)
  useSetThemeHook(setColourTheme)

  const { children, isIndex, isSecondary } = props

  function handleThemeChange(theme: THEME) {
    setColourTheme(theme)
    localStorage.setItem('colourTheme', theme)
  }

  return (
    <ThemeProvider theme={styleTheme[colourTheme]}>
      <PageContainer isSecondary={isSecondary}>
        <Header colourTheme={colourTheme} setColourTheme={handleThemeChange} />
        <MainContainer isIndex={isIndex}>{children}</MainContainer>
        <Footer />
      </PageContainer>
    </ThemeProvider>
  )
}

export default Layout
