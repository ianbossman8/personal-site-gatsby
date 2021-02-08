import React from 'react'
import Emoji from '../Emoji/Emoji'
import THEME from '../../constants/theme'
import SYMBOLS from '../../constants/symbols'
import { AppHeader } from './styles'
import { ThemeButton } from '../../styles/buttons'

interface Props {
  colourTheme: THEME
  setColourTheme: (theme: THEME) => void
}

function Header(props: Props) {
  const { colourTheme, setColourTheme } = props

  function handleThemeButtonClick() {
    const nextTheme = colourTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK

    setColourTheme(nextTheme)
  }

  return (
    <AppHeader>
      <ThemeButton onClick={handleThemeButtonClick}>
        <Emoji label="switch colour theme" symbol={SYMBOLS[colourTheme].themeSwitch} />
      </ThemeButton>
    </AppHeader>
  )
}

export default Header
