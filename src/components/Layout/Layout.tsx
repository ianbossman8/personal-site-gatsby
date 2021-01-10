import React, { ReactNode, useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { IndexPageContainer, MainContainer } from './style'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { styleTheme } from '../../styles/theme'
import THEME from '../../constants/theme'

interface Props {
  location: string | undefined
  title?: string
  description?: string
  children: ReactNode
}

const rootPath = '/'

function Layout(props: Props) {
  const { children, location = rootPath, title, description } = props
  const currentLocalTheme =
    typeof matchMedia !== 'undefined' &&
    matchMedia('(prefers-color-scheme: dark)').matches

  const [colourTheme, setColourTheme] = useState<THEME>(
    currentLocalTheme ? THEME.DARK : THEME.LIGHT
  )

  useEffect(() => {
    const isSystemDark = matchMedia('(prefers-color-scheme: dark)')
    const localTheme = localStorage.getItem('colourTheme')

    if (localTheme === THEME.DARK) {
      setColourTheme(THEME.DARK)
    } else if (localTheme === THEME.LIGHT) {
      setColourTheme(THEME.LIGHT)
    } else {
      if (isSystemDark.matches) {
        setColourTheme(THEME.DARK)
        localStorage.setItem('colourTheme', THEME.DARK)
      } else {
        setColourTheme(THEME.LIGHT)
        localStorage.setItem('colourTheme', THEME.LIGHT)
      }
    }

    function handleSystemChange(event: MediaQueryListEvent) {
      const localTheme = localStorage.getItem('colourTheme')

      if (event.matches && localTheme !== THEME.DARK) {
        setColourTheme(THEME.DARK)
      }

      if (!event.matches && localTheme !== THEME.LIGHT) {
        setColourTheme(THEME.LIGHT)
      }
    }

    isSystemDark.addEventListener('change', handleSystemChange)

    return () => {
      isSystemDark.removeEventListener('change', handleSystemChange)
    }
  }, [])

  function handleThemeChange(theme: THEME) {
    setColourTheme(theme)
  }

  const isIndex = location === rootPath

  return (
    <ThemeProvider theme={styleTheme[colourTheme]}>
      <IndexPageContainer>
        <Header
          colourTheme={colourTheme}
          setColourTheme={handleThemeChange}
          isIndex={isIndex}
        />
        <MainContainer>{children}</MainContainer>
        <Footer isIndex={isIndex} />
      </IndexPageContainer>
    </ThemeProvider>
  )
}

export default Layout
