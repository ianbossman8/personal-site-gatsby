import React, { ReactNode, useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { PageContainer, MainContainer } from './style'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import useSetTheme from '../../customHooks/useSetTheme'
import { styleTheme } from '../../styles/theme'
import THEME from '../../constants/theme'

interface Props {
  location: string | undefined
  title?: string
  description?: string
  children: ReactNode
}

const path = {
  root: '/',
  blogs: '/blogs'
}

function Layout(props: Props) {
  const [colourTheme, setColourTheme] = useSetTheme()
  const { children, location = path.root, title, description } = props

  function handleThemeChange(theme: THEME) {
    setColourTheme(theme)
    localStorage.setItem('colourTheme', theme)
  }

  const isMain = location === path.root || location === path.blogs
  const isIndex = location === path.root

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
