import React from 'react'
import { ThemeProvider } from 'styled-components'
import THEME from '../../constants/theme'
import { styleTheme } from '../../styles/theme'

export default function themeWrapper(component: React.ReactElement) {
  return <ThemeProvider theme={styleTheme[THEME.LIGHT]}>{component}</ThemeProvider>
}
