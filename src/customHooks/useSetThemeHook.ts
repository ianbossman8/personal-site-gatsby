import { useEffect, useState } from 'react'
import THEME from '../constants/theme'

function initialTheme() {
  const systemTheme = matchMedia('(prefers-color-scheme: dark)').matches
  const curlocalTheme = localStorage.getItem('colourTheme')
  let initialTheme

  if (curlocalTheme) {
    initialTheme = curlocalTheme as THEME
  } else {
    if (systemTheme) {
      initialTheme = THEME.DARK
    } else {
      initialTheme = THEME.LIGHT
    }
  }

  return initialTheme
}

function useSetTheme(): [THEME, React.Dispatch<React.SetStateAction<THEME>>] {
  const theme = initialTheme()
  const [colourTheme, setColourTheme] = useState<THEME>(theme)

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
