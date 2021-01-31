import React, { ReactNode, useMemo, useState, createContext, useEffect } from 'react'
import THEME from '../constants/theme'
import initialTheme from '../util/theme'

type ThemeContextType = {
  colourTheme: THEME
  setColourTheme: (theme: THEME) => void
}

export const ThemeContext = createContext<ThemeContextType>({
  colourTheme: THEME.LIGHT,
  setColourTheme: (theme: THEME) => {}
})

interface Props {
  children: ReactNode
}

function ThemeProvider(props: Props) {
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

export default ({ element }: { element: ReactNode }) => <ThemeProvider>{element}</ThemeProvider>
