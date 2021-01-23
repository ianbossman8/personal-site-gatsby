import { useEffect, useState } from 'react'
import THEME from '../constants/theme'

function useSetTheme(): [THEME, React.Dispatch<React.SetStateAction<THEME>>] {
  const [colourTheme, setColourTheme] = useState<THEME>(THEME.DARK)

  useEffect(() => {
    const localTheme = localStorage.getItem('colourTheme')

    if (!localTheme) {
      const systemTheme = matchMedia('(prefers-color-scheme: dark)').matches

      if (systemTheme) {
        setColourTheme(THEME.DARK)
        localStorage.setItem('colourTheme', THEME.DARK)
      } else {
        setColourTheme(THEME.LIGHT)
        localStorage.setItem('colourTheme', THEME.LIGHT)
      }
    } else {
      setColourTheme(localTheme as THEME)
    }

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
