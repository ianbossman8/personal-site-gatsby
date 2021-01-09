import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'
import Emoji from '../components/Emoji/Emoji'
import THEME from '../constants/theme'
import SYMBOLS from '../constants/symbols'
interface Props {
  title?: string
  description?: string
  colourTheme: THEME
  setColourTheme: (theme: THEME) => void
}
const ThemeButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
`
function Header({ colourTheme, setColourTheme }: Props) {
  function handleThemeButtonClick() {
    const nextTheme = colourTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK
    setColourTheme(nextTheme)
    localStorage.setItem('colourTheme', nextTheme)
  }
  return (
    <header>
      <ThemeButton onClick={handleThemeButtonClick}>
        <Emoji
          label={'dim background'}
          symbol={SYMBOLS[colourTheme].themeSwitch}
        />
      </ThemeButton>
    </header>
  )
}

export default Header
