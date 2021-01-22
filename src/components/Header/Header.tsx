import React from 'react'

import { AppHeader } from './styles'
import { ThemeButton } from '../../styles/buttons'
import Emoji from '../Emoji/Emoji'
import THEME from '../../constants/theme'
import SYMBOLS from '../../constants/symbols'

interface Props {
  title?: string
  description?: string
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
        <Emoji
          label={'dim background'}
          symbol={SYMBOLS[colourTheme].themeSwitch}
        />
      </ThemeButton>
    </AppHeader>
  )
}

export default Header
