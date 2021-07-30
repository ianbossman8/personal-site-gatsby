import React, { ReactNode, useMemo, useState, createContext, useEffect } from 'react'
import THEME from '../constants/theme'
import initialTheme from '../util/theme'

type ThemeContextType = {
  colourTheme: THEME.DARK | THEME.LIGHT
  setColourTheme: (theme: THEME) => void
}

export const ThemeContext = createContext<ThemeContextType>({
  colourTheme: THEME.LIGHT
} as ThemeContextType)

interface Props {
  children: ReactNode
}

function ThemeProvider(props: Props): JSX.Element {
  const [colourTheme, setColourTheme] = useState<THEME>(THEME.LIGHT)

  useEffect(() => {
    const theme = initialTheme()

    setColourTheme(theme)
    localStorage.setItem('colourTheme', theme)
  }, [])

  const themeValue = useMemo(
    () => ({
      colourTheme,
      setColourTheme
    }),
    [colourTheme, setColourTheme]
  )

  return <ThemeContext.Provider value={themeValue}>{props.children}</ThemeContext.Provider>
}

function themeWrapper({ element }: { element: ReactNode }): JSX.Element {
  return <ThemeProvider>{element}</ThemeProvider>
}

export default themeWrapper
