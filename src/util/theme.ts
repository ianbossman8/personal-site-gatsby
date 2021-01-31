import THEME from '../constants/theme'

export default function initialTheme() {
  let initialTheme

  if (typeof localStorage !== 'undefined' && typeof matchMedia !== 'undefined') {
    const systemTheme = matchMedia('(prefers-color-scheme: dark)').matches
    const curlocalTheme = localStorage.getItem('colourTheme')

    if (curlocalTheme) {
      initialTheme = curlocalTheme as THEME
    } else {
      if (systemTheme) {
        initialTheme = THEME.DARK
      } else {
        initialTheme = THEME.LIGHT
      }
    }
  } else {
    initialTheme = THEME.LIGHT
  }

  localStorage.setItem('colourTheme', initialTheme)

  return initialTheme
}
