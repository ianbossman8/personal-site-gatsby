import { useEffect, useState } from 'react'
import THEME from '../constants/theme'
import initialTheme from '../util/theme'

function useSetTheme(): [THEME, React.Dispatch<React.SetStateAction<THEME>>] {
  const theme = initialTheme()
  // const theme =
  //   typeof localStorage !== 'undefined' && localStorage.getItem('colourTheme') !== null
  //     ? (localStorage.getItem('colourTheme') as THEME)
  //     : THEME.LIGHT
  const [colourTheme, setColourTheme] = useState<THEME>(theme)

  useEffect(() => {
    console.log(theme, colourTheme)
    setColourTheme(THEME.DARK)
    localStorage.setItem('colourTheme', THEME.DARK)
  }, [])
  console.log(theme, colourTheme)
  useEffect(() => {
    const isSystemDark = matchMedia('(prefers-color-scheme: dark)')

    function handleSystemChange(event: MediaQueryListEvent) {
      const localTheme = localStorage.getItem('colourTheme')

      if (event.matches && localTheme !== THEME.DARK) {
        setColourTheme(THEME.DARK)
        localStorage.setItem('colourTheme', THEME.DARK)
      }

      if (!event.matches && localTheme !== THEME.LIGHT) {
        setColourTheme(THEME.LIGHT)
        localStorage.setItem('colourTheme', THEME.LIGHT)
      }
    }

    isSystemDark.addEventListener('change', handleSystemChange)

    return () => {
      isSystemDark.removeEventListener('change', handleSystemChange)
    }
  }, [])

  return [colourTheme, setColourTheme]
}

export default useSetTheme
