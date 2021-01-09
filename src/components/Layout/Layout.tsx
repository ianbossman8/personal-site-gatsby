import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { styleTheme } from '../../styles/theme'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import Header from '../Header'
import Footer from '../Footer'
import { IndexPageContainer } from './style'
import THEME from '../../constants/theme'

interface Props {
  location: Location
  title?: string
  description?: string
  children: any
}

const rootPath = '/'

function Layout(props: Props) {
  const { children, location, title, description } = props
  const currentLocalTheme = localStorage.getItem('colourTheme')
  const [colourTheme, setColourTheme] = useState<THEME>(
    currentLocalTheme === null ? THEME.LIGHT : (currentLocalTheme as THEME)
  )

  useEffect(() => {
    const isSystemDark = matchMedia('(prefers-color-scheme: dark)')
    const localTheme = localStorage.getItem('colorTheme')

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

  return (
    <ThemeProvider theme={styleTheme[colourTheme]}>
      {location.pathname === rootPath ? (
        <IndexPageContainer>
          <Header
            colourTheme={colourTheme}
            setColourTheme={handleThemeChange}
          />
          <main>{children}</main>
        </IndexPageContainer>
      ) : (
        <div></div>
      )}
    </ThemeProvider>
  )
}

export default Layout
