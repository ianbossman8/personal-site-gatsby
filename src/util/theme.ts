import THEME from '../constants/theme'

export default function initialTheme(): THEME {
  let currentTheme

  if (typeof localStorage !== 'undefined' && typeof matchMedia !== 'undefined') {
    const systemTheme = matchMedia('(prefers-color-scheme: dark)').matches
    const curlocalTheme = localStorage.getItem('colourTheme')

    if (curlocalTheme) {
      currentTheme = curlocalTheme as THEME
    } else {
      if (systemTheme) {
        currentTheme = THEME.DARK
      } else {
        currentTheme = THEME.LIGHT
      }
    }
  } else {
    currentTheme = THEME.LIGHT
  }

  localStorage.setItem('colourTheme', currentTheme)

  return currentTheme
}
