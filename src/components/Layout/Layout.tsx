import React, { ReactNode, useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { PageContainer, MainContainer } from './style'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import useSetThemeHook from '../../customHooks/useSetThemeHook'
import { styleTheme } from '../../styles/theme'
import THEME from '../../constants/theme'
import { PATH } from '../../constants/path'

interface Props {
  curLocation: string | undefined
  title?: string
  description?: string
  children: ReactNode
}

function Layout(props: Props) {
  const [colourTheme, setColourTheme] = useSetThemeHook()
  const { children, curLocation = PATH.ROOT, title, description } = props

  function handleThemeChange(theme: THEME) {
    setColourTheme(theme)
    localStorage.setItem('colourTheme', theme)
  }

  const isMain = curLocation === PATH.ROOT || curLocation === '/blogs'
  const isIndex = curLocation === PATH.ROOT

  return (
    <ThemeProvider theme={styleTheme[colourTheme]}>
      <PageContainer isMain={isMain}>
        <Header colourTheme={colourTheme} setColourTheme={handleThemeChange} />
        <MainContainer isIndex={isIndex}>{children}</MainContainer>
        <Footer />
      </PageContainer>
    </ThemeProvider>
  )
}

export default Layout
