import { useEffect } from 'react'
import THEME from '../constants/theme'

export default function useSetSystemThemeHook(setColourTheme: (theme: THEME) => void): void {
  useEffect(() => {
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)')

    function handleSystemChange(event: MediaQueryListEvent) {
      const localTheme = localStorage.getItem('colourTheme')

      if (event.matches && localTheme !== THEME.DARK) {
        localStorage.setItem('colourTheme', THEME.DARK)
        setColourTheme(THEME.DARK)
      }

      if (!event.matches && localTheme !== THEME.LIGHT) {
        localStorage.setItem('colourTheme', THEME.LIGHT)
        setColourTheme(THEME.LIGHT)
      }
    }

    isSystemDark.addEventListener('change', handleSystemChange)

    return () => {
      isSystemDark.removeEventListener('change', handleSystemChange)
    }
  }, [])
}
