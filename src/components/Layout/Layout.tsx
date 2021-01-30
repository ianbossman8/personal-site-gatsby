import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { PageContainer, MainContainer } from './style'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import useSetThemeHook from '../../customHooks/useSetThemeHook'
import { styleTheme } from '../../styles/theme'
import THEME from '../../constants/theme'

interface Props {
  isIndex?: boolean
  isSecondary?: boolean
  children: ReactNode
}

function Layout(props: Props) {
  const [colourTheme, setColourTheme] = useSetThemeHook()
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
